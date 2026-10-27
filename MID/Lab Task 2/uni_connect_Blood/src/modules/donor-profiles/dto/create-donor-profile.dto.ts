import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { BloodGroup } from "../../../common/enums/blood.enum";

export class CreateDonorProfileDto {
  @IsNotEmpty()
  @IsUUID()
  userId!: string;

  @IsNotEmpty()
  @IsEnum(BloodGroup)
  bloodGroup!: BloodGroup;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsNotEmpty()
  @IsString()
  location!: string;

  @IsOptional()
  @IsDateString()
  lastDonationDate?: string;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}
