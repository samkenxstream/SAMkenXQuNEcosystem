import { gql } from '@urql/core';
import { CollectionEventsFragment } from '../../../fragments/EventsByCollection';

export const EthSepoliaEventsByCollection = gql`
  query EthSepoliaEventsByCollection(
    $contractAddress: String!
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...CollectionEventsFragment
    }
  }
  ${CollectionEventsFragment}
`;