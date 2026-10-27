import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DonorProfile } from "./entities/donor-profile.entity";
import { DonorProfilesController } from "./donor-profiles.controller";
import { DonorProfilesService } from "./donor-profiles.service";

@Module({
  imports: [TypeOrmModule.forFeature([DonorProfile])],
  controllers: [DonorProfilesController],
  providers: [DonorProfilesService],
})
export class DonorProfilesModule {}
