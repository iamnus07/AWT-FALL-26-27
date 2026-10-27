import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from "@nestjs/common";
import { DonorProfilesService } from "./donor-profiles.service";
import { CreateDonorProfileDto } from "./dto/create-donor-profile.dto";

@Controller("donor-profiles")
export class DonorProfilesController {
  constructor(private readonly service: DonorProfilesService) {}

  @Post()
  create(@Body() dto: CreateDonorProfileDto) {
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
