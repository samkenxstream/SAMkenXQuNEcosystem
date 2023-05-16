import { gql } from '@apollo/client/core';

import { TokenEventInfo } from './tokenEvent';
import { Pagination } from './pagination';

export const NftEventsFragment = gql`
  fragment NftEventsFragment on EVMSchemaType {
    nft(contractAddress: $contractAddress, tokenId: $tokenId) {
      tokenEvents(after: $after, first: $first) {
        pageInfo {
          ...Pagination
        }
        edges {
          node {
            ...TokenEventInfo
          }
        }
      }
    }
  }
  ${TokenEventInfo}
  ${Pagination}
`;