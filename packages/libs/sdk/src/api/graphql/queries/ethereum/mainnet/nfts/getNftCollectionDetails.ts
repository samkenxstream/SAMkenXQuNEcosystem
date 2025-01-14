import { gql } from '@urql/core';
import { NftCollectionInfo } from '../../../fragments/NftCollectionInfo';

export const EthMainnetNftCollectionDetails = gql`
  query EthMainnetNftCollectionDetails($contractAddress: String!) {
    ethereum {
      ...NftCollectionInfo
    }
  }
  ${NftCollectionInfo}
`;
