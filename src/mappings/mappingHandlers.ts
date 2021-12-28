import { MoonbeamCall, MoonbeamEvent } from '@subql/contract-processors/dist/moonbeam'
import { Approval } from '../types'
import { ApproveCallArgs, createTransfer, TransferEventArgs } from '../utils/createTransferRecord'

export async function handleMoonriverEvent(event: MoonbeamEvent<TransferEventArgs>): Promise<void> {
  const from = event.args.from
  const to = event.args.to
  const amount = event.args.value.toBigInt()
  const tokenAddress = event.address

  logger.info(tokenAddress)

  // await createTransfer(from, to, tokenAddress, amount, event)
}

export async function handleMoonriverCall(event: MoonbeamCall<ApproveCallArgs>): Promise<void> {
  const approval = new Approval(event.hash);

  approval.owner = event.from;
  approval.value = event.args._value.toBigInt();
  approval.spender = event.args._spender;
  approval.contractAddress = event.to;

  await approval.save();
}
