import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { ResponseStatus } from "../../../common/enums/blood.enum";

export class CreateBloodResponseDto {
  @IsNotEmpty()
  @IsUUID()
  requestId!: string;

  @IsNotEmpty()
  @IsUUID()
  donorId!: string;

  @IsOptional()
  @IsEnum(ResponseStatus)
  status?: ResponseStatus;

  @IsOptional()
  @IsString()
  message?: string;
}
