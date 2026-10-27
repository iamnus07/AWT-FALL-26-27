import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BloodResponse } from "./entities/blood-response.entity";
import { BloodResponsesController } from "./blood-responses.controller";
import { BloodResponsesService } from "./blood-responses.service";

@Module({
  imports: [TypeOrmModule.forFeature([BloodResponse])],
  controllers: [BloodResponsesController],
  providers: [BloodResponsesService],
})
export class BloodResponsesModule {}
