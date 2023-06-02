import { gql } from '@urql/core';
import { TransactionsByWalletAddress } from '../../../fragments/transactionsByWalletAddress';

export const EthSepoliaTransactionsByWalletAddress = gql`
  query EthSepoliaTransactionsByWalletAddress(
    $address: String!
    $first: Int
    $after: String
  ) {
    ethereumSepolia {
      ...TransactionsByWalletAddress
    }
  }
  ${TransactionsByWalletAddress}
`;