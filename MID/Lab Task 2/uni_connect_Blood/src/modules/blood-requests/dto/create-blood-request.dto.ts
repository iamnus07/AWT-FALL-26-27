import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from "class-validator";
import { BloodGroup, UrgencyLevel } from "../../../common/enums/blood.enum";

export class CreateBloodRequestDto {
  @IsNotEmpty()
  @IsUUID()
  requesterId!: string;

  @IsNotEmpty()
  @IsString()
  patientName!: string;

  @IsNotEmpty()
  @IsEnum(BloodGroup)
  bloodGroup!: BloodGroup;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  unitsNeeded!: number;

  @IsNotEmpty()
  @IsString()
  hospital!: string;

  @IsNotEmpty()
  @IsString()
  location!: string;

  @IsNotEmpty()
  @IsString()
  contactPhone!: string;

  @IsNotEmpty()
  @IsDateString()
  neededBy!: string;

  @IsOptional()
  @IsEnum(UrgencyLevel)
  urgency?: UrgencyLevel;

  @IsOptional()
  @IsString()
  note?: string;
}
