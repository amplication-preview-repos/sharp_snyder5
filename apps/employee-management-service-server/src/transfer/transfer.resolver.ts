import * as graphql from "@nestjs/graphql";
import { TransferResolverBase } from "./base/transfer.resolver.base";
import { Transfer } from "./base/Transfer";
import { TransferService } from "./transfer.service";

@graphql.Resolver(() => Transfer)
export class TransferResolver extends TransferResolverBase {
  constructor(protected readonly service: TransferService) {
    super(service);
  }
}
