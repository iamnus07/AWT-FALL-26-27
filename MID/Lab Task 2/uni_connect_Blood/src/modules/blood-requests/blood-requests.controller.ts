import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from "@nestjs/common";
import { BloodRequestsService } from "./blood-requests.service";
import { CreateBloodRequestDto } from "./dto/create-blood-request.dto";

@Controller("blood-requests")
export class BloodRequestsController {
  constructor(private readonly service: BloodRequestsService) {}

  @Post()
  create(@Body() dto: CreateBloodRequestDto) {
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
