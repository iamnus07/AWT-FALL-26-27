import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BloodResponse } from "./entities/blood-response.entity";
import { CreateBloodResponseDto } from "./dto/create-blood-response.dto";
import { handleDbError } from "../../common/utils/db-error.util";

@Injectable()
export class BloodResponsesService {
  constructor(
    @InjectRepository(BloodResponse)
    private readonly repo: Repository<BloodResponse>,
  ) {}

  async create(dto: CreateBloodResponseDto): Promise<BloodResponse> {
    try {
      const response = this.repo.create({
        ...dto,
        message: dto.message ?? null,
      });
      return await this.repo.save(response);
    } catch (error) {
      handleDbError(error);
    }
  }

  findAll(): Promise<BloodResponse[]> {
    return this.repo.find();
  }

  async findOne(id: string): Promise<BloodResponse> {
    const response = await this.repo.findOneBy({ id });
    if (!response)
      throw new NotFoundException(`Blood response ${id} not found`);
    return response;
  }
}
