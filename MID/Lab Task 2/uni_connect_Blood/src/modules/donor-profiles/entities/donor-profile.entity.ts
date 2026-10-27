import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { BloodGroup } from "../../../common/enums/blood.enum";
import { BloodResponse } from "../../blood-responses/entities/blood-response.entity";

@Entity({ name: "donor_profiles", schema: "public" })
export class DonorProfile {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "user_id", type: "uuid", unique: true })
  userId!: string;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column({
    name: "blood_group",
    type: "enum",
    enum: BloodGroup,
    enumName: "donor_blood_group_enum",
  })
  bloodGroup!: BloodGroup;

  @Column({ type: "varchar", length: 20 })
  phone!: string;

  @Column({ type: "varchar", length: 150 })
  location!: string;

  @Column({ name: "last_donation_date", type: "date", nullable: true })
  lastDonationDate!: Date | null;

  @Column({ name: "is_available", type: "boolean", default: true })
  isAvailable!: boolean;

  @OneToMany(() => BloodResponse, (response) => response.donor)
  responses!: BloodResponse[];

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamptz" })
  updatedAt!: Date;
}
