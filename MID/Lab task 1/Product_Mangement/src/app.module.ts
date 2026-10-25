import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./modules/users/user.module";
import { ProductsModule } from "./modules/products/products.module";
import { EmployeesModule } from "./modules/employees/employees.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USERNAME || "postgres",
      password: process.env.DB_PASSWORD || "9876",
      database: process.env.DB_DATABASE || "user_management",

      autoLoadEntities: true,

      synchronize: true,
    }),

    UserModule,
    ProductsModule,
    EmployeesModule,
  ],
})
export class AppModule {}
