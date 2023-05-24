import { gql } from '@urql/core';
import { GetBalancesByWalletAddressFragment } from '../../../fragments/getBalancesByWalletAddress';

export const EthSepoliaBalancesByWalletAddress = gql`
  query EthSepoliaBalancesByWalletAddress(
    $address: String!
    $first: Int
    $after: String
  ) {
    ethereumSepolia {
      ...GetBalancesByWalletAddressFragment
    }
  }
  ${GetBalancesByWalletAddressFragment}
`;