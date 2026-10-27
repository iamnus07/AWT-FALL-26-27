import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BloodRequest } from "./entities/blood-request.entity";
import { BloodRequestsController } from "./blood-requests.controller";
import { BloodRequestsService } from "./blood-requests.service";

@Module({
  imports: [TypeOrmModule.forFeature([BloodRequest])],
  controllers: [BloodRequestsController],
  providers: [BloodRequestsService],
})
export class BloodRequestsModule {}
