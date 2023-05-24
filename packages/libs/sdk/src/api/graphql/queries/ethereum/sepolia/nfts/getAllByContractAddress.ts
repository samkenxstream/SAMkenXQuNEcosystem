import { gql } from '@urql/core';
import { NftsByContractAddressFragment } from '../../../fragments/nftsByContractAddress';

export const EthSepoliaWalletNFTsByContractAddress = gql`
  query EthSepoliaWalletNFTsByContractAddress(
    $contractAddress: String!
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...NftsByContractAddressFragment
    }
  }
  ${NftsByContractAddressFragment}
`;