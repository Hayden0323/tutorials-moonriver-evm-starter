import { MoonbeamEvent } from '@subql/contract-processors/dist/moonbeam'
import { createTransfer, TransferEventArgs } from '../utils/createTransferRecord'

export async function handleMoonriverEvent(event: MoonbeamEvent<TransferEventArgs>): Promise<void> {
  if (!event.args) return
    
  const from = event.args.from
  const to = event.args.to
  const amount = event.args.value.toBigInt()
  const tokenAddress = event.address

  await createTransfer(from, to, tokenAddress, amount, event)
}