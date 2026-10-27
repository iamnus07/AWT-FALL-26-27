import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from "@nestjs/common";
import { BloodResponsesService } from "./blood-responses.service";
import { CreateBloodResponseDto } from "./dto/create-blood-response.dto";

@Controller("blood-responses")
export class BloodResponsesController {
  constructor(private readonly service: BloodResponsesService) {}

  @Post()
  create(@Body() dto: CreateBloodResponseDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }
}
