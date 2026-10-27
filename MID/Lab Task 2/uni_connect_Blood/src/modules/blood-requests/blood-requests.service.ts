import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BloodRequest } from "./entities/blood-request.entity";
import { CreateBloodRequestDto } from "./dto/create-blood-request.dto";
import { handleDbError } from "../../common/utils/db-error.util";

@Injectable()
export class BloodRequestsService {
  constructor(
    @InjectRepository(BloodRequest)
    private readonly repo: Repository<BloodRequest>,
  ) {}

  async create(dto: CreateBloodRequestDto): Promise<BloodRequest> {
    try {
      const request = this.repo.create({
        ...dto,
        neededBy: new Date(dto.neededBy),
        note: dto.note ?? null,
      });
      return await this.repo.save(request);
    } catch (error) {
      handleDbError(error);
    }
  }

  findAll(): Promise<BloodRequest[]> {
    return this.repo.find();
  }

  async findOne(id: string): Promise<BloodRequest> {
    const request = await this.repo.findOneBy({ id });
    if (!request) throw new NotFoundException(`Blood request ${id} not found`);
    return request;
  }
}
