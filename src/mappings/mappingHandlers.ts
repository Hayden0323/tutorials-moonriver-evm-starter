import { MoonbeamCall, MoonbeamEvent } from '@subql/contract-processors/dist/moonbeam'
import { Approval, Transaction } from '../types'
import { ApproveCallArgs, createTransfer, TransferEventArgs } from '../utils/createTransferRecord'

export async function handleMoonriverEvent(event: MoonbeamEvent<TransferEventArgs>): Promise<void> {
  // const transaction = new Transaction(event.transactionHash);

  //   transaction.value = event.args.value.toBigInt();
  //   transaction.from = event.args.from;
  //   transaction.to = event.args.to;
  //   transaction.contractAddress = event.address;

  //   await transaction.save();

  if (!event.args) return
    
  const from = event.args.from
  const to = event.args.to
  const amount = event.args.value.toBigInt()
  const tokenAddress = event.address

  await createTransfer(from, to, tokenAddress, amount, event)
}

export async function handleMoonriverCall(event: MoonbeamCall<ApproveCallArgs>): Promise<void> {
  const approval = new Approval(event.hash);

  approval.owner = event.from;
  approval.value = event.args._value.toBigInt();
  approval.spender = event.args._spender;
  approval.contractAddress = event.to;

  await approval.save();
}
