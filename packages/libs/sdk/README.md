# QuickNode SDK

An SDK from [QuickNode](https://www.quicknode.com/) making it easy for developers to interact with the blockchain.

Currently supports getting started with [QuickNode GraphQL API](https://docs.quicknode.com/docs/graphql/getting-started) in a blink!

[![npm](https://img.shields.io/npm/dm/@quicknode/sdk)](https://www.npmjs.com/package/@quicknode/sdk)
[![npm](https://img.shields.io/npm/v/@quicknode/sdk?color=g)](https://www.npmjs.com/package/@quicknode/sdk)
![Maintenance](https://img.shields.io/maintenance/yes/2022?color=g)
[![License](https://img.shields.io/npm/l/@quicknode/sdk?color=g)](https://github.com/quiknode-labs/qn-oss/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues-raw/quiknode-labs/qn-oss?color=g)](https://github.com/quiknode-labs/qn-oss/issues)
[![Discord](https://img.shields.io/discord/880505845090250794?color=g)](https://discord.gg/DkdgEqE)

## Getting Started

### Installation

- Node.js v16 or higher
- `npm install @quicknode/sdk` or `yarn add @quicknode/sdk`

```ts
import QuickNode from '@qn-oss/libs/sdk';

const client = new QuickNode.API({ gqlApiKey: 'my-api-key' });

client.nfts
  .getByWalletENS({
    ensName: 'vitalik.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

Full example app implementation [here](https://github.com/quiknode-labs/qn-oss/tree/main/packages/apps/examples/nft-sdk)

## Providing a config object to the client

Sign up for a [QuickNode](https://www.quicknode.com/) account to use the multi-chain [QuickNode GraphQL API](https://docs.quicknode.com/docs/graphql/getting-started) API key in the SDK.

```ts
import QuickNode from '@qn-oss/libs/sdk';

const client = new QuickNode.API({
  gqlApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
  defaultChain: 'polygon',
});
```

A `defaultChain` can be set to set the chain for all calls. Currently we support:

- `ethereum` Ethereum Mainnet
- `ethereumSepolia` Ethereum Sepolia
- `polygon` Polygon Mainnet

The `defaultChain` in the initializer can be overridden with the `chain` argument in functions.

If no `defaultChain` is passed into the initializer or a `chain` argument to a function,`ethereum` is used by default.

### Client config API

| Property     | Values | Description                                | Example  |
| ------------ | ------ | ------------------------------------------ | -------- |
| gqlApiKey    | string | The QuickNode GraphQL API Key              | abcd1234 |
| defaultChain | string | The default chain to use for all functions | polygon  |

<br>

## Methods

### nfts.getByWalletENS

Returns NFTs owned by a wallet

| Argument | Values | Required | Description                     | Example                     |
| -------- | ------ | -------- | ------------------------------- | --------------------------- |
| ensName  | string | ✅       | Wallet ENS address              | vitalik.eth                 |
| first    | number | ❌       | Number of results to return     | 10                          |
| after    | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ= |
| chain    | string | ❌       | Blockchain name                 | polygon                     |

```ts
import QuickNode from '@qn-oss/libs/sdk';

const client = new QuickNode.API({
  gqlApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

client.nfts
  .getByWalletENS({
    ensName: 'vitalik.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getByWalletAddress

Returns NFTs owned by a wallet

| Argument | Values | Required | Description                     | Example                                    |
| -------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| address  | string | ✅       | Wallet address                  | 0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17 |
| first    | number | ❌       | Number of results to return     | 10                                         |
| after    | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| chain    | string | ❌       | Blockchain name                 | polygon                                    |

```ts
import QuickNode from '@qn-oss/libs/sdk';

const client = new QuickNode.API({
  gqlApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

client.nfts
  .getByWalletAddress({
    address: '0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getTrendingCollections

Returns trending NFT Collections

| Argument | Values | Required | Description                     | Example                     |
| -------- | ------ | -------- | ------------------------------- | --------------------------- |
| first    | number | ❌       | Number of results to return     | 10                          |
| after    | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ= |
| chain    | string | ❌       | Blockchain name                 | polygon                     |

```ts
import QuickNode from '@quicknode/sdk';

const client = new QuickNode();

client.nfts
  .getTrendingCollections({
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getByContractAddress

Returns NFTs by contract address. The response differs based on if they are an ERC721 or ERC1155 standard.

| Argument        | Values | Required | Description                     | Example                                    |
| --------------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address            | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| first           | number | ❌       | Number of results to return     | 10                                         |
| after           | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| chain           | string | ❌       | Blockchain name                 | polygon                                    |

```ts
import QuickNode from '@qn-oss/libs/sdk';

const client = new QuickNode.API({
  gqlApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

client.nfts
  .getByWalletAddress({
    address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getNFTDetails

Returns the details for a specified NFT

| Argument        | Values | Required | Description          | Example                                    |
| --------------- | ------ | -------- | -------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| tokenId         | string | ✅       | NFT Token ID         | 1                                          |
| chain           | string | ❌       | Blockchain name      | polygon                                    |

```ts
import QuickNode from '@qn-oss/libs/sdk';

const client = new QuickNode.API({
  gqlApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});


client.nfts
  .getNFTDetails(
    contractAddress: "0x2106C00Ac7dA0A3430aE667879139E832307AeAa",
    tokenId: "1",
  )
  .then((response) => console.log(response));
```

### nfts.getCollectionDetails

Returns the details for an NFT Collection

| Argument        | Values | Required | Description          | Example                                    |
| --------------- | ------ | -------- | -------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| chain           | string | ❌       | Blockchain name      | polygon                                    |

```ts
import QuickNode from '@quicknode/sdk';
const client = new QuickNode();
client.nfts
  .getCollectionDetails({
    address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
  })
  .then((response) => console.log(response));
```

## Pagination

For functions that support pagination, use the `first` property to specify the amount of results to return.

The returned `data.tokensPageInfo.endCursor` property in the response can be used to access subsequent results. This value can be passed in to the `after` property and will return the results after that `endCursor`.

`hasNextPage` can be used to determine the end of the results, where it will be `false`.

For example, if a response contains:

```json
"data": {
  "tokensPageInfo": {
    "hasNextPage": true,
    "endCursor": 'YXJyYXljb25uZWN0aW9uOlk='
  }
}
```

calling the following will get the next page of results

```typescript
client.nfts.getByWalletENS({
  ensName: 'vitalik.eth',
  first: 5,
  after: 'YXJyYXljb25uZWN0aW9uOlk=',
});
```

# Contributing corner

## Issues

Please submit any questions, issues, or feedback as an [issue in Github](https://github.com/quiknode-labs/qn-oss/issues).

## Development

We recommend using the example application to develop

1. cd `packages/apps/examples/sdk-api`
2. `cp .env.example .env` and add api key
3. `nx serve apps-examples-sdk-api`
4. Then you can send requests to the API, for example: `curl http://localhost:3333/api/nftsByAddress/0xbc08dadccc79c00587d7e6a75bb68ff5fd30f9e0`

## Running tests

Run `nx test libs-sdk` to execute the tests via [Jest](https://jestjs.io).

API responses are recorded using [polly.js](https://github.com/Netflix/pollyjs). You can re-record live requests by passing in an API key as an environment variable.
`QUICKNODE_GQL_API_KEY=REPLACEME nx test libs-sdk`

## Running lint

Run `nx lint libs-sdk` to execute the lint via [ESLint](https://eslint.org/).

## Generate graphql codegen typings

Generate graphql typings via [Codegen](https://www.the-guild.dev/graphql/codegen).

1. cd `packages/libs/sdk`
2. add a `graphqlHeaders.json` with any authorization headers you want to pass to graphql API
3. run `yarn run codegen`