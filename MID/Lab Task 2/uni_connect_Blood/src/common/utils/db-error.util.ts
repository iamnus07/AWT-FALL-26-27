import { BadRequestException, ConflictException } from "@nestjs/common";

export function handleDbError(error: any): never {
  if (error?.code === "23503") {
    throw new BadRequestException("Referenced record does not exist");
  }
  if (error?.code === "23505") {
    throw new ConflictException("Record already exists");
  }
  throw error;
}
