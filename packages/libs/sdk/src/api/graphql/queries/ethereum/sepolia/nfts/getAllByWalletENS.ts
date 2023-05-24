import { gql } from '@urql/core';
import { WalletByEnsFragment } from '../../../fragments/nftsByWalletENS';

export const EthSepoliaWalletNFTsByEns = gql`
  query EthSepoliaWalletNFTsByEns(
    $ensName: String!
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    ethereumSepolia {
      ...WalletByEnsFragment
    }
  }
  ${WalletByEnsFragment}
`;
