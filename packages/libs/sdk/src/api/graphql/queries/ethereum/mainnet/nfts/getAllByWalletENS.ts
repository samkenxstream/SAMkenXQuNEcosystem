import { gql } from '@urql/core';
import { WalletByEnsFragment } from '../../../fragments/nftsByWalletENS';

export const EthMainnetWalletNFTsByEns = gql`
  query EthMainnetWalletNFTsByEns(
    $ensName: String!
    $before: String
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    ethereum {
      ...WalletByEnsFragment
    }
  }
  ${WalletByEnsFragment}
`;
