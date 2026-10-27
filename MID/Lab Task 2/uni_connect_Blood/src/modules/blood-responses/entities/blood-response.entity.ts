import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { ResponseStatus } from "../../../common/enums/blood.enum";
import { BloodRequest } from "../../blood-requests/entities/blood-request.entity";
import { DonorProfile } from "../../donor-profiles/entities/donor-profile.entity";

@Entity({ name: "blood_responses", schema: "public" })
@Unique(["requestId", "donorId"])
export class BloodResponse {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "request_id", type: "uuid" })
  requestId!: string;

  @ManyToOne(() => BloodRequest, (request) => request.responses, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "request_id" })
  request!: BloodRequest;

  @Column({ name: "donor_id", type: "uuid" })
  donorId!: string;

  @ManyToOne(() => DonorProfile, (donor) => donor.responses, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "donor_id" })
  donor!: DonorProfile;

  @Column({
    type: "enum",
    enum: ResponseStatus,
    enumName: "response_status_enum",
    default: ResponseStatus.PENDING,
  })
  status!: ResponseStatus;

  @Column({ type: "text", nullable: true })
  message!: string | null;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamptz" })
  updatedAt!: Date;
}
