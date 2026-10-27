import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./modules/users/entities/user.entity";
import { DonorProfile } from "./modules/donor-profiles/entities/donor-profile.entity";
import { BloodRequest } from "./modules/blood-requests/entities/blood-request.entity";
import { BloodResponse } from "./modules/blood-responses/entities/blood-response.entity";
import { UsersModule } from "./modules/users/users.module";
import { DonorProfilesModule } from "./modules/donor-profiles/donor-profiles.module";
import { BloodRequestsModule } from "./modules/blood-requests/blood-requests.module";
import { BloodResponsesModule } from "./modules/blood-responses/blood-responses.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || process.env.DB_USERNAME || "postgres",
      password: process.env.DB_PASSWORD || "9876",
      database: process.env.DB_DATABASE || process.env.DB_NAME || "uni_connect",
      entities: [User, DonorProfile, BloodRequest, BloodResponse],
      autoLoadEntities: true,
      synchronize: true,
    }),

    UsersModule,
    DonorProfilesModule,
    BloodRequestsModule,
    BloodResponsesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

