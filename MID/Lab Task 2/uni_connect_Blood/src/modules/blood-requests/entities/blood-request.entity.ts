import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import {
  BloodGroup,
  RequestStatus,
  UrgencyLevel,
} from "../../../common/enums/blood.enum";
import { BloodResponse } from "../../blood-responses/entities/blood-response.entity";

@Entity({ name: "blood_requests", schema: "public" })
export class BloodRequest {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "requester_id", type: "uuid" })
  requesterId!: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "requester_id" })
  requester!: User;

  @Column({ name: "patient_name", type: "varchar", length: 150 })
  patientName!: string;

  @Column({
    name: "blood_group",
    type: "enum",
    enum: BloodGroup,
    enumName: "request_blood_group_enum",
  })
  bloodGroup!: BloodGroup;

  @Column({ name: "units_needed", type: "int" })
  unitsNeeded!: number;

  @Column({ type: "varchar", length: 200 })
  hospital!: string;

  @Column({ type: "varchar", length: 150 })
  location!: string;

  @Column({ name: "contact_phone", type: "varchar", length: 20 })
  contactPhone!: string;

  @Column({ name: "needed_by", type: "timestamptz" })
  neededBy!: Date;

  @Column({
    type: "enum",
    enum: UrgencyLevel,
    enumName: "urgency_level_enum",
    default: UrgencyLevel.MEDIUM,
  })
  urgency!: UrgencyLevel;

  @Column({
    type: "enum",
    enum: RequestStatus,
    enumName: "request_status_enum",
    default: RequestStatus.OPEN,
  })
  status!: RequestStatus;

  @Column({ type: "text", nullable: true })
  note!: string | null;

  @OneToMany(() => BloodResponse, (response) => response.request)
  responses!: BloodResponse[];

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamptz" })
  updatedAt!: Date;
}
