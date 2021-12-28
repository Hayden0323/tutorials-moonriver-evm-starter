import { MoonbeamEvent } from '@subql/contract-processors/dist/moonbeam'
import { BigNumber } from 'ethers'
import { getAccount, getToken, getTokenDailyReport, getTransfer, getUserDailyReport, getUserDailyReportGroup } from './record'

// Setup types from ABI
export type TransferEventArgs = [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
export type ApproveCallArgs = [string, BigNumber] & { _spender: string; _value: BigNumber }

// export async function createTransfer(from: string, to: string, tokenAddress: string, amount: bigint, event: MoonbeamEvent<TransferEventArgs>) {
//   const txHash = event.transactionHash
//   const idx = event.logIndex
//   const block = event.blockNumber
//   const timestamp = event.blockTimestamp
//   const fromAccount = await getAccount(from)
//   const toAccount = await getAccount(to)
//   const tokenRecord = await getToken(tokenAddress)
//   const transfer = await getTransfer(`${txHash}-${idx}`)

//   const dateEndOfDay = getDateEndOfDay(timestamp).toDate()

//   // logger.info([txHash, idx, tokenAddress, from, to, amount.toString(), block, dateEndOfDay.getTime()].join('-'))

//   transfer.fromId = fromAccount.id
//   transfer.toId = toAccount.id
//   transfer.amount = amount
//   transfer.tokenId = tokenRecord.id
//   transfer.atBlock = BigInt(block)
//   transfer.timestamp = timestamp

//   const fromAccountDailyReportGroup = await getUserDailyReportGroup(`${from}-${dateEndOfDay.getTime()}`)
//   const fromAccountDailyReport = await getUserDailyReport(`${from}-${tokenAddress}-${dateEndOfDay.getTime()}`)
//   const toAccountDailyReportGroup = await getUserDailyReportGroup(`${to}-${dateEndOfDay.getTime()}`)
//   const toAccountDailyReport = await getUserDailyReport(`${to}-${tokenAddress}-${dateEndOfDay.getTime()}`)
//   const tokenDailyReport = await getTokenDailyReport(`${tokenAddress}-${dateEndOfDay.getTime()}`)

//   tokenRecord.transferCount += 1
//   tokenRecord._transferCount += 1

//   fromAccount.transferCount += 1
//   fromAccount._transferCount += 1

//   fromAccountDailyReport.groupId = fromAccountDailyReportGroup.id
//   fromAccountDailyReport.accountId = from
//   fromAccountDailyReport.tokenId = tokenRecord.id
//   fromAccountDailyReport.timestamp = dateEndOfDay
//   fromAccountDailyReport.transferCount += 1
//   fromAccountDailyReport._transferCount += 1
//   fromAccountDailyReport.out = fromAccountDailyReport.out + transfer.amount
//   fromAccountDailyReport.volume = fromAccountDailyReport.volume + transfer.amount
//   fromAccountDailyReport.abs = fromAccountDailyReport.abs - transfer.amount

//   fromAccountDailyReportGroup.accountId = from
//   fromAccountDailyReportGroup.transferCount += 1
//   fromAccountDailyReportGroup._transferCount += 1
//   fromAccountDailyReportGroup.timestamp = dateEndOfDay

//   toAccountDailyReport.accountId = to
//   toAccountDailyReport.groupId = toAccountDailyReportGroup.id
//   toAccountDailyReport.tokenId = tokenRecord.id
//   toAccountDailyReport.timestamp = dateEndOfDay
//   toAccountDailyReport.in = toAccountDailyReport.in + transfer.amount
//   toAccountDailyReport.volume = toAccountDailyReport.volume + transfer.amount
//   toAccountDailyReport.abs = toAccountDailyReport.abs + transfer.amount

//   toAccountDailyReportGroup.accountId = to
//   toAccountDailyReportGroup.timestamp = dateEndOfDay

//   tokenDailyReport.tokenId = tokenRecord.id
//   tokenDailyReport.transferCount += 1
//   tokenDailyReport._transferCount += 1
//   tokenDailyReport.volume = tokenDailyReport.volume + transfer.amount
//   tokenDailyReport.timestamp = dateEndOfDay

//   await fromAccount.save()
//   await toAccount.save()
//   await tokenRecord.save()
//   await transfer.save()
//   await fromAccountDailyReportGroup.save()
//   await fromAccountDailyReport.save()
//   await toAccountDailyReportGroup.save()
//   await toAccountDailyReport.save()
//   await tokenDailyReport.save()
// }
