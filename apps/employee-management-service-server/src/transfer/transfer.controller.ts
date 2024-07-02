import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransferService } from "./transfer.service";
import { TransferControllerBase } from "./base/transfer.controller.base";

@swagger.ApiTags("transfers")
@common.Controller("transfers")
export class TransferController extends TransferControllerBase {
  constructor(protected readonly service: TransferService) {
    super(service);
  }
}
