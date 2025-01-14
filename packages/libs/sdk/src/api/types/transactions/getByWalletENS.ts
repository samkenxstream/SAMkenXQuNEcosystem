import {
  CodegenEthMainnetTransactionsByWalletENSQueryVariables,
  CodegenEthMainnetTransactionsByWalletENSQuery,
  CodegenTransactionsNodeFragment,
  CodegenPaginationFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { SimplifyType } from '../../../lib/types';
import { NonQueryInput } from '../input';

// Using the generated CodegenEthMainnetTransactionsByWalletENSQuery as a base for the type here
// since the queries for each chain will be the same, so allow for it to be used for all chains
export type TransactionsByWalletENSQuery = {
  [k in ChainName]: CodegenEthMainnetTransactionsByWalletENSQuery['ethereum'];
};

// Using the generated CodegenEthMainnetTransactionsByWalletENSQueryVariables as a base for the type here
// since the variables will be the same for each query
export type TransactionsByWalletENSQueryVariables =
  CodegenEthMainnetTransactionsByWalletENSQueryVariables;

export type TransactionsByWalletENSInput =
  TransactionsByWalletENSQueryVariables & NonQueryInput;

export interface TransactionsByWalletENSQueryResultInfo {
  address: string | null;
  ensName: string | null;
  transactionsPageInfo: CodegenPaginationFragment;
  transactions: CodegenTransactionsNodeFragment[];
}

export interface TransactionsByWalletENSQueryResultBody {
  walletByENS: TransactionsByWalletENSQueryResultInfo;
}

// What the graphQL query returns after the edges and nodes are removed
export type TransactionsByWalletENSQueryResultFull = Record<
  ChainName,
  TransactionsByWalletENSQueryResultBody
>;

// What we actually return to the user
export type TransactionsByWalletENSResult = SimplifyType<{
  address: string;
  ensName: string;
  results: CodegenTransactionsNodeFragment[];
  pageInfo: CodegenPaginationFragment;
}>;
