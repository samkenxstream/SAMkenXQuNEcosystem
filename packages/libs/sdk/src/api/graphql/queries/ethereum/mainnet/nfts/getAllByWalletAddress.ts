import { gql } from '@urql/core';
import { WalletByAddressFragment } from '../../../fragments/nftsByWalletAddress';

export const EthMainnetWalletNFTsByAddress = gql`
  query EthMainnetWalletNFTsByAddress(
    $address: String!
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    ethereum {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
