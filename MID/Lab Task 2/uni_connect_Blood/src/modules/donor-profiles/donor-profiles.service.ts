import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DonorProfile } from "./entities/donor-profile.entity";
import { CreateDonorProfileDto } from "./dto/create-donor-profile.dto";
import { handleDbError } from "../../common/utils/db-error.util";

@Injectable()
export class DonorProfilesService {
  constructor(
    @InjectRepository(DonorProfile)
    private readonly repo: Repository<DonorProfile>,
  ) {}

  async create(dto: CreateDonorProfileDto): Promise<DonorProfile> {
    try {
      const donor = this.repo.create({
        ...dto,
        lastDonationDate: dto.lastDonationDate
          ? new Date(dto.lastDonationDate)
          : null,
      });
      return await this.repo.save(donor);
    } catch (error) {
      handleDbError(error);
    }
  }

  findAll(): Promise<DonorProfile[]> {
    return this.repo.find();
  }

  async findOne(id: string): Promise<DonorProfile> {
    const donor = await this.repo.findOneBy({ id });
    if (!donor) throw new NotFoundException(`Donor profile ${id} not found`);
    return donor;
  }
}
