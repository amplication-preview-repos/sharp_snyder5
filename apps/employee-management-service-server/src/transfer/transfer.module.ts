import { Module } from "@nestjs/common";
import { TransferModuleBase } from "./base/transfer.module.base";
import { TransferService } from "./transfer.service";
import { TransferController } from "./transfer.controller";
import { TransferResolver } from "./transfer.resolver";

@Module({
  imports: [TransferModuleBase],
  controllers: [TransferController],
  providers: [TransferService, TransferResolver],
  exports: [TransferService],
})
export class TransferModule {}
