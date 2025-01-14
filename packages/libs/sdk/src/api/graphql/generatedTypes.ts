import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
  JSON: any;
  JSONObject: any;
};

/** Fetches an NFT collection */
export type CodegenCollection = {
  /** The contract address of the collection */
  address: Scalars['String'];
  /** Attributes within a collection */
  attributes?: Maybe<CodegenCollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<CodegenTokenUpload>>;
  /** The base token uri of the collection */
  baseTokenUri?: Maybe<Scalars['String']>;
  /** The circulating supply of tokens within the collection */
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<CodegenNFTContract>;
  /** The description of the collection */
  description?: Maybe<Scalars['String']>;
  /** The external url of the collection */
  externalUrl?: Maybe<Scalars['String']>;
  /** The collection image. */
  image?: Maybe<Array<CodegenTokenUpload>>;
  /** The name of the collection */
  name?: Maybe<Scalars['String']>;
  ohlcvChart?: Maybe<Array<CodegenCollectionOHLCVChart>>;
  /** Opensea metadata */
  openseaMetadata?: Maybe<CodegenOpenSeaMetadata>;
  /** Order history for a collection */
  orderHistory?: Maybe<Array<CodegenCollectionOrderHistory>>;
  /** The sales of the collection */
  sales?: Maybe<CodegenCollectionSalesConnection>;
  /** The slug of the collection */
  slug?: Maybe<Scalars['String']>;
  /** The symbol of the collection */
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenCollectionTokenEventsConnection;
  /** The total supply of tokens within the collection */
  totalSupply?: Maybe<Scalars['BigInt']>;
  /** The twitter username of the collection */
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CodegenCollectionWalletsConnection;
};


/** Fetches an NFT collection */
export type CodegenCollectionCodegenattributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Fetches an NFT collection */
export type CodegenCollectionCodegenohlcvChartArgs = {
  filter?: InputMaybe<CodegenCollectionOhlcvChartInput>;
};


/** Fetches an NFT collection */
export type CodegenCollectionCodegenorderHistoryArgs = {
  filter?: InputMaybe<CodegenCollectionOrderHistoryInput>;
};


/** Fetches an NFT collection */
export type CodegenCollectionCodegensalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenCollectionSaleFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenCollectionSaleOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


/** Fetches an NFT collection */
export type CodegenCollectionCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


/** Fetches an NFT collection */
export type CodegenCollectionCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Attributes within a collection */
export type CodegenCollectionAttribute = {
  /** The trait key */
  name: Scalars['String'];
  /** The value of the trait */
  value?: Maybe<Scalars['String']>;
};

export type CodegenCollectionAttributesConnection = {
  edges: Array<CodegenCollectionAttributesConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionAttributesConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenCollectionAttribute;
};

/** Collection OHLCV chart stats */
export type CodegenCollectionOHLCVChart = {
  average?: Maybe<Scalars['Float']>;
  close?: Maybe<Scalars['Float']>;
  count: Scalars['Float'];
  high?: Maybe<Scalars['Float']>;
  low?: Maybe<Scalars['Float']>;
  open?: Maybe<Scalars['Float']>;
  timestamp: Scalars['DateTime'];
  volume?: Maybe<Scalars['Float']>;
};

/** Filter by input interval */
export type CodegenCollectionOHLCVChartInterval =
  | 'FIFTEEN_MINUTES'
  | 'FIVE_MINUTES'
  | 'ONE_DAY'
  | 'ONE_HOUR'
  | 'ONE_MINUTE'
  | 'SEVEN_DAYS'
  | 'SIX_HOURS'
  | 'THIRTY_DAYS'
  | 'THIRTY_MINUTES'
  | 'TWELVE_HOURS';

export type CodegenCollectionOhlcvChartInput = {
  confirmedAtGte?: InputMaybe<Scalars['DateTime']>;
  confirmedAtLte?: InputMaybe<Scalars['DateTime']>;
  interval?: InputMaybe<CodegenCollectionOHLCVChartInterval>;
  limit?: InputMaybe<Scalars['Float']>;
};

/** Collection order history summary */
export type CodegenCollectionOrderHistory = {
  /** The address of the seller */
  fromAddress: Scalars['String'];
  /**
   * The price of the transaction in the base network token
   * @deprecated Use "priceInNativeToken" instead
   */
  priceInEth: Scalars['Float'];
  /** The price of the transaction in the base network token */
  priceInNativeToken: Scalars['Float'];
  /** The timestamp of the transaction */
  timestamp: Scalars['DateTime'];
  /** The address of the buyer */
  toAddress: Scalars['String'];
  /** The token id */
  tokenId?: Maybe<Scalars['String']>;
  /** The transaction hash */
  transactionHash: Scalars['String'];
};

export type CodegenCollectionOrderHistoryInput = {
  /** The confirmedAt date is greater than or equal to, ie. 2023-01-01T00:00:00Z */
  confirmedAtGte?: InputMaybe<Scalars['DateTime']>;
  /** The confirmedAt date is less than or equal to, ie. 2023-01-01T00:00:00Z */
  confirmedAtLte?: InputMaybe<Scalars['DateTime']>;
  /** Whether the order is limited */
  isLimited?: InputMaybe<Scalars['Boolean']>;
};

/** Sale of a collection token */
export type CodegenCollectionSale = {
  /** The estimated time the sale was confirmed */
  estimatedConfirmedAt?: Maybe<Scalars['DateTime']>;
  /** The price in network base token */
  priceInNativeToken?: Maybe<Scalars['Float']>;
  /** The quantity sold */
  quantitySold?: Maybe<Scalars['Float']>;
};

/** Filter input for collection sales */
export type CodegenCollectionSaleFilterInput = {
  /** A time period relative to the current time in which to filter collection sales by. */
  timePeriod?: InputMaybe<CodegenCollectionSalePeriod>;
  /** Custom time range in which to filter collection sales by. Available only to paid customers. */
  timeRange?: InputMaybe<CodegenDateTimeInput>;
};

export type CodegenCollectionSaleOrderBy =
  | 'TIMESTAMP';

export type CodegenCollectionSalePeriod =
  | 'FIFTEEN_MINUTES'
  | 'FIVE_MINUTES'
  | 'ONE_DAY'
  | 'ONE_HOUR'
  | 'ONE_MINUTE'
  | 'SEVEN_DAYS'
  | 'THIRTY_MINUTES'
  | 'TWELVE_HOURS';

export type CodegenCollectionSalesConnection = {
  edges: Array<CodegenCollectionSalesConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionSalesConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenCollectionSale;
};

/** The ERC standard of the collection */
export type CodegenCollectionStandard =
  | 'ERC721'
  | 'ERC1155';

export type CodegenCollectionStandardInput = {
  /** Equal to */
  eq?: InputMaybe<CodegenCollectionStandard>;
  /** In */
  in?: InputMaybe<Array<CodegenCollectionStandard>>;
  /** Not In */
  notIn?: InputMaybe<Array<CodegenCollectionStandard>>;
};

/** Stats of a collection */
export type CodegenCollectionStats = {
  /**
   * Average sale price of the collection
   * @deprecated Use 'averageInNativeToken' instead
   */
  average?: Maybe<Scalars['Float']>;
  /** Average sale price of the collection in native token */
  averageInNativeToken?: Maybe<Scalars['Float']>;
  /**
   * Highest sale price of the collection
   * @deprecated Use 'ceilingInNativeToken' instead
   */
  ceiling?: Maybe<Scalars['Float']>;
  /** Highest sale price of the collection in native token */
  ceilingInNativeToken?: Maybe<Scalars['Float']>;
  /**
   * Lowest sale price of the collection
   * @deprecated Use 'floorInNativeToken' instead
   */
  floor?: Maybe<Scalars['Float']>;
  /** Lowest sale price of the collection in native token */
  floorInNativeToken?: Maybe<Scalars['Float']>;
  /** Total sales of the collection */
  totalSales?: Maybe<Scalars['Int']>;
  /**
   * Total sales volume of the collection
   * @deprecated Use 'volumeInNativeToken' instead
   */
  volume?: Maybe<Scalars['Float']>;
  /** Total sales volume of the collection in native token */
  volumeInNativeToken?: Maybe<Scalars['Float']>;
};

export type CodegenCollectionTokenEventsConnection = {
  edges: Array<CodegenCollectionTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionTokenEventsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenCollectionWalletsConnection = {
  edges: Array<CodegenCollectionWalletsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionWalletsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenWallet;
};

/** Filter input for collections */
export type CodegenCollectionsFilterInput = {
  /** The address of the collection */
  address?: InputMaybe<CodegenStringInput>;
  /** The ERC standard of the collection */
  ercStandard?: InputMaybe<CodegenCollectionStandardInput>;
};

/** Fetches a contract */
export type CodegenContract = {
  /** The ABI of the contract */
  abi?: Maybe<Scalars['JSON']>;
  /** The contract address */
  address: Scalars['String'];
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  /** The name of the contract */
  name?: Maybe<Scalars['String']>;
  /** The supported ERC interfaces of the contract */
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  /** The symbol of the contract */
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenContractTokenEventsConnection;
};


/** Fetches a contract */
export type CodegenContractCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenContractStandard =
  | 'ERC20'
  | 'ERC721'
  | 'ERC1155';

export type CodegenContractStandardInput = {
  /** Equal to */
  eq?: InputMaybe<CodegenContractStandard>;
  /** In */
  in?: InputMaybe<Array<CodegenContractStandard>>;
  /** Not In */
  notIn?: InputMaybe<Array<CodegenContractStandard>>;
};

export type CodegenContractTokenEventsConnection = {
  edges: Array<CodegenContractTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenContractTokenEventsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

/** Filter input for contracts */
export type CodegenContractsFilterInput = {
  /** The address of the contract */
  address?: InputMaybe<CodegenStringInput>;
};

export type CodegenDateTimeInput = {
  /** Equal to a date ie. 2023-01-01T00:00:00Z */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Greater than a date ie. 2023-01-01T00:00:00Z */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Greater than or equal to a date ie. 2023-01-01T00:00:00Z */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Less than a date ie. 2023-01-01T00:00:00Z */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Less than or equal to a date ie. 2023-01-01T00:00:00Z */
  lte?: InputMaybe<Scalars['DateTime']>;
};

export type CodegenERC721Collection = CodegenCollection & {
  /** The contract address of the collection */
  address: Scalars['String'];
  /** Attributes within a collection */
  attributes?: Maybe<CodegenCollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<CodegenTokenUpload>>;
  /** The base token uri of the collection */
  baseTokenUri?: Maybe<Scalars['String']>;
  /** The circulating supply of tokens within the collection */
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<CodegenNFTContract>;
  /** The description of the collection */
  description?: Maybe<Scalars['String']>;
  /** The external url of the collection */
  externalUrl?: Maybe<Scalars['String']>;
  /** The collection image. */
  image?: Maybe<Array<CodegenTokenUpload>>;
  /** The name of the collection */
  name?: Maybe<Scalars['String']>;
  nft?: Maybe<CodegenERC721NFT>;
  nfts: CodegenERC721CollectionTokensConnection;
  ohlcvChart?: Maybe<Array<CodegenCollectionOHLCVChart>>;
  /** Opensea metadata */
  openseaMetadata?: Maybe<CodegenOpenSeaMetadata>;
  /** Order history for a collection */
  orderHistory?: Maybe<Array<CodegenCollectionOrderHistory>>;
  /** The sales of the collection */
  sales?: Maybe<CodegenCollectionSalesConnection>;
  /** The slug of the collection */
  slug?: Maybe<Scalars['String']>;
  stats?: Maybe<CodegenCollectionStats>;
  /** The symbol of the collection */
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenCollectionTokenEventsConnection;
  /** The total supply of tokens within the collection */
  totalSupply?: Maybe<Scalars['BigInt']>;
  /** The twitter username of the collection */
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CodegenCollectionWalletsConnection;
};


export type CodegenERC721CollectionCodegenattributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CodegenERC721CollectionCodegennftArgs = {
  tokenId: Scalars['String'];
};


export type CodegenERC721CollectionCodegennftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenNFTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CodegenERC721CollectionCodegenohlcvChartArgs = {
  filter?: InputMaybe<CodegenCollectionOhlcvChartInput>;
};


export type CodegenERC721CollectionCodegenorderHistoryArgs = {
  filter?: InputMaybe<CodegenCollectionOrderHistoryInput>;
};


export type CodegenERC721CollectionCodegensalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenCollectionSaleFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenCollectionSaleOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenERC721CollectionCodegenstatsArgs = {
  filter?: InputMaybe<CodegenERC721CollectionStatsInput>;
};


export type CodegenERC721CollectionCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenERC721CollectionCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC721CollectionStatsInput = {
  timeRange?: InputMaybe<CodegenDateTimeInput>;
};

export type CodegenERC721CollectionTokensConnection = {
  edges: Array<CodegenERC721CollectionTokensEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenERC721CollectionTokensEdge = {
  cursor: Scalars['String'];
  node: CodegenERC721NFT;
};

export type CodegenERC721NFT = CodegenNFT & {
  /** The animation url of the token */
  animationUrl?: Maybe<Scalars['String']>;
  /** The attributes of the token. */
  attributes?: Maybe<Array<CodegenTokenAttribute>>;
  collection?: Maybe<CodegenERC721Collection>;
  /** The slug of the collection */
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<CodegenNFTContract>;
  /** The contract address */
  contractAddress: Scalars['String'];
  /** The description of the token */
  description?: Maybe<Scalars['String']>;
  /** The external url of the token */
  externalUrl?: Maybe<Scalars['String']>;
  /** The metadata of the token */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The name of the token */
  name?: Maybe<Scalars['String']>;
  tokenEvents: CodegenNFTTokenEventsConnection;
  /** The token id */
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<CodegenTokenUpload>>;
  wallet?: Maybe<CodegenWallet>;
};


export type CodegenERC721NFTCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenERC1155Collection = CodegenCollection & {
  /** The contract address of the collection */
  address: Scalars['String'];
  /** Attributes within a collection */
  attributes?: Maybe<CodegenCollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<CodegenTokenUpload>>;
  /** The base token uri of the collection */
  baseTokenUri?: Maybe<Scalars['String']>;
  /** The circulating supply of tokens within the collection */
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<CodegenNFTContract>;
  /** The description of the collection */
  description?: Maybe<Scalars['String']>;
  /** The external url of the collection */
  externalUrl?: Maybe<Scalars['String']>;
  /** The collection image. */
  image?: Maybe<Array<CodegenTokenUpload>>;
  /** The name of the collection */
  name?: Maybe<Scalars['String']>;
  nft?: Maybe<CodegenERC1155NFT>;
  nfts: CodegenERC1155CollectionTokensConnection;
  ohlcvChart?: Maybe<Array<CodegenCollectionOHLCVChart>>;
  /** Opensea metadata */
  openseaMetadata?: Maybe<CodegenOpenSeaMetadata>;
  /** Order history for a collection */
  orderHistory?: Maybe<Array<CodegenCollectionOrderHistory>>;
  /** The sales of the collection */
  sales?: Maybe<CodegenCollectionSalesConnection>;
  /** The slug of the collection */
  slug?: Maybe<Scalars['String']>;
  stats?: Maybe<CodegenCollectionStats>;
  /** The symbol of the collection */
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenCollectionTokenEventsConnection;
  /** The total supply of tokens within the collection */
  totalSupply?: Maybe<Scalars['BigInt']>;
  /** The twitter username of the collection */
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CodegenCollectionWalletsConnection;
};


export type CodegenERC1155CollectionCodegenattributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CodegenERC1155CollectionCodegennftArgs = {
  tokenId: Scalars['String'];
};


export type CodegenERC1155CollectionCodegennftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenNFTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CodegenERC1155CollectionCodegenohlcvChartArgs = {
  filter?: InputMaybe<CodegenCollectionOhlcvChartInput>;
};


export type CodegenERC1155CollectionCodegenorderHistoryArgs = {
  filter?: InputMaybe<CodegenCollectionOrderHistoryInput>;
};


export type CodegenERC1155CollectionCodegensalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenCollectionSaleFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenCollectionSaleOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenERC1155CollectionCodegenstatsArgs = {
  filter?: InputMaybe<CodegenERC1155CollectionStatsInput>;
};


export type CodegenERC1155CollectionCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenERC1155CollectionCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionStatsInput = {
  timeRange?: InputMaybe<CodegenDateTimeInput>;
};

export type CodegenERC1155CollectionTokensConnection = {
  edges: Array<CodegenERC1155CollectionTokensEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionTokensEdge = {
  cursor: Scalars['String'];
  node: CodegenERC1155NFT;
};

export type CodegenERC1155NFT = CodegenNFT & {
  /** The animation url of the token */
  animationUrl?: Maybe<Scalars['String']>;
  collection?: Maybe<CodegenERC1155Collection>;
  /** The slug of the collection */
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<CodegenNFTContract>;
  /** The contract address */
  contractAddress: Scalars['String'];
  /** The description of the token */
  description?: Maybe<Scalars['String']>;
  /** The external url of the token */
  externalUrl?: Maybe<Scalars['String']>;
  /** The metadata of the token */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The name of the token */
  name?: Maybe<Scalars['String']>;
  tokenEvents: CodegenNFTTokenEventsConnection;
  /** The token id */
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<CodegenTokenUpload>>;
  wallets: CodegenERC1155NFTWalletsConnection;
};


export type CodegenERC1155NFTCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenERC1155NFTCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155NFTWalletsConnection = {
  edges: Array<CodegenERC1155NFTWalletsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenERC1155NFTWalletsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenWallet;
};

export type CodegenERCStandard =
  | 'ERC20'
  | 'ERC721'
  | 'ERC1155';

export type CodegenEVMSchemaType = {
  collection?: Maybe<CodegenCollection>;
  collections: CodegenEVMSchemaTypeCollectionsConnection;
  contract?: Maybe<CodegenContract>;
  contracts: CodegenEVMSchemaTypeContractsConnection;
  /** Fetch historical gas prices by block number. */
  gasPrices?: Maybe<Array<CodegenGasPrice>>;
  nft?: Maybe<CodegenNFT>;
  tokenEvents: CodegenEVMSchemaTypeTokenEventsConnection;
  transaction?: Maybe<CodegenTransaction>;
  /** Returns a list of transactions. Ordered by block number and index. */
  transactions?: Maybe<CodegenEVMSchemaTypeTransactionsConnection>;
  trendingCollections: CodegenEVMSchemaTypeTrendingCollectionsConnection;
  /** Wallet by address */
  walletByAddress?: Maybe<CodegenWallet>;
  /** Wallet by ENS name */
  walletByENS?: Maybe<CodegenWallet>;
};


export type CodegenEVMSchemaTypeCodegencollectionArgs = {
  contractAddress: Scalars['String'];
};


export type CodegenEVMSchemaTypeCodegencollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CodegenEVMSchemaTypeCodegencontractArgs = {
  contractAddress: Scalars['String'];
};


export type CodegenEVMSchemaTypeCodegencontractsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenContractsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CodegenEVMSchemaTypeCodegengasPricesArgs = {
  filter?: InputMaybe<CodegenGasPriceFilterInput>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenEVMSchemaTypeCodegennftArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


export type CodegenEVMSchemaTypeCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenEVMSchemaTypeCodegentransactionArgs = {
  hash: Scalars['String'];
};


export type CodegenEVMSchemaTypeCodegentransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenEVMSchemaTypeCodegentrendingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTrendingCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTrendingOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenEVMSchemaTypeCodegenwalletByAddressArgs = {
  address: Scalars['String'];
};


export type CodegenEVMSchemaTypeCodegenwalletByENSArgs = {
  ensName: Scalars['String'];
};

export type CodegenEVMSchemaTypeCollectionsConnection = {
  edges: Array<CodegenEVMSchemaTypeCollectionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeCollectionsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenCollection;
};

export type CodegenEVMSchemaTypeContractsConnection = {
  edges: Array<CodegenEVMSchemaTypeContractsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeContractsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenContract;
};

export type CodegenEVMSchemaTypeTokenEventsConnection = {
  edges: Array<CodegenEVMSchemaTypeTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeTokenEventsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenEVMSchemaTypeTransactionsConnection = {
  edges: Array<CodegenEVMSchemaTypeTransactionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeTransactionsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTransaction;
};

export type CodegenEVMSchemaTypeTrendingCollectionsConnection = {
  edges: Array<CodegenEVMSchemaTypeTrendingCollectionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeTrendingCollectionsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTrendingCollection;
};

/** Gas Prices for a given block. Gas values are returned in Wei. */
export type CodegenGasPrice = {
  /** The average gas price */
  average: Scalars['Float'];
  /** The block number */
  blockNumber: Scalars['Int'];
  /** The highest gas price */
  ceiling: Scalars['Float'];
  /** The lowest gas price */
  floor: Scalars['Float'];
  /** The median gas price */
  median: Scalars['Float'];
  /** The total gas price */
  total: Scalars['Float'];
};

/** Filter input for gas prices */
export type CodegenGasPriceFilterInput = {
  /** The block number */
  blockNumber?: InputMaybe<CodegenIntegerInput>;
};

export type CodegenIntegerInput = {
  /** Equal to */
  eq?: InputMaybe<Scalars['Int']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to */
  gte?: InputMaybe<Scalars['Int']>;
  /** In */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to */
  lte?: InputMaybe<Scalars['Int']>;
};

/** Marketplace where the token was sold */
export type CodegenMarketplace =
  | 'BLUR'
  | 'CRYPTOPUNKS'
  | 'LOOKSRARE'
  | 'NIFTY_GATEWAY'
  | 'OPENSEA'
  | 'SEAPORT'
  | 'X2Y2'
  | 'ZEROX';

export type CodegenMarketplaceInput = {
  eq?: InputMaybe<CodegenMarketplace>;
  in?: InputMaybe<Array<CodegenMarketplace>>;
  notIn?: InputMaybe<Array<CodegenMarketplace>>;
};

export type CodegenNFT = {
  /** The animation url of the token */
  animationUrl?: Maybe<Scalars['String']>;
  collection?: Maybe<CodegenCollection>;
  /** The slug of the collection */
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<CodegenNFTContract>;
  /** The contract address */
  contractAddress: Scalars['String'];
  /** The description of the token */
  description?: Maybe<Scalars['String']>;
  /** The external url of the token */
  externalUrl?: Maybe<Scalars['String']>;
  /** The metadata of the token */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The name of the token */
  name?: Maybe<Scalars['String']>;
  tokenEvents: CodegenNFTTokenEventsConnection;
  /** The token id */
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<CodegenTokenUpload>>;
};


export type CodegenNFTCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenNFTContract = CodegenContract & {
  /** The ABI of the contract */
  abi?: Maybe<Scalars['JSON']>;
  /** The contract address */
  address: Scalars['String'];
  collection?: Maybe<CodegenCollection>;
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  /** The name of the contract */
  name?: Maybe<Scalars['String']>;
  /** The supported ERC interfaces of the contract */
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  /** The symbol of the contract */
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenContractTokenEventsConnection;
};


export type CodegenNFTContractCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenNFTTokenEventsConnection = {
  edges: Array<CodegenNFTTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenNFTTokenEventsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenNFTWallet = {
  owner?: Maybe<CodegenWallet>;
  /** The address of the wallet */
  walletAddress?: Maybe<Scalars['String']>;
};

export type CodegenNFTsFilterInput = {
  /** Contract address in */
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Metadata provided by opensea */
export type CodegenOpenSeaMetadata = {
  /** Collection is hidden on Opensea. */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Collection verified by Opensea. */
  isVerified?: Maybe<Scalars['Boolean']>;
  /** Slug provided by Opensea (it might be stale). */
  unsafeSlug?: Maybe<Scalars['String']>;
};

/** Sort ascending (A-Z) or descending (Z-A) */
export type CodegenOrderDirection =
  | 'ASC'
  | 'DESC';

export type CodegenPageInfo = {
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type CodegenQuery = {
  ethereum: CodegenEVMSchemaType;
  ethereumSepolia: CodegenEVMSchemaType;
  polygon: CodegenEVMSchemaType;
};

export type CodegenStringInput = {
  /** Contains */
  contains?: InputMaybe<Scalars['String']>;
  /** Equal to */
  eq?: InputMaybe<Scalars['String']>;
  /** In */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not In */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** A token attribute */
export type CodegenTokenAttribute = {
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

/** A token burn event */
export type CodegenTokenBurnEvent = CodegenTokenEvent & {
  blockNumber: Scalars['Int'];
  contract?: Maybe<CodegenContract>;
  /** The address of the token contract */
  contractAddress: Scalars['String'];
  /** The ERC standard of the token contract */
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  nft?: Maybe<CodegenNFT>;
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  /** The token id */
  tokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity */
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export type CodegenTokenContract = CodegenContract & {
  /** The ABI of the contract */
  abi?: Maybe<Scalars['JSON']>;
  /** The contract address */
  address: Scalars['String'];
  decimals?: Maybe<Scalars['BigInt']>;
  details?: Maybe<CodegenTokenDetailsType>;
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  /** The name of the contract */
  name?: Maybe<Scalars['String']>;
  /** The supported ERC interfaces of the contract */
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  /** The symbol of the contract */
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenContractTokenEventsConnection;
};


export type CodegenTokenContractCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

/** Token details */
export type CodegenTokenDetailsType = {
  address: Scalars['String'];
  /** The name of the token */
  name?: Maybe<Scalars['String']>;
  /** The slug of the token */
  slug?: Maybe<Scalars['String']>;
  /** The symbol of the token */
  symbol?: Maybe<Scalars['String']>;
};

export type CodegenTokenEvent = {
  blockNumber: Scalars['Int'];
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export type CodegenTokenEventOrderBy =
  | 'TIMESTAMP';

/** Filter input for token events */
export type CodegenTokenEventsFilterInput = {
  /** Filter token events by their block number */
  blockNumber?: InputMaybe<CodegenIntegerInput>;
  /** Filter token events by contract address */
  contractAddress?: InputMaybe<CodegenStringInput>;
  /** Filter token events by their contract standard */
  contractStandard?: InputMaybe<CodegenContractStandardInput>;
  /** Filter token events by the "from" wallet */
  fromAddress?: InputMaybe<CodegenStringInput>;
  /** Filter token events by the marketplace. It's only valid for SALE types */
  marketplace?: InputMaybe<CodegenMarketplaceInput>;
  /** Filter token events by their estimated confirmation date */
  timestamp?: InputMaybe<CodegenDateTimeInput>;
  /** Filter token events by the "to" wallet */
  toAddress?: InputMaybe<CodegenStringInput>;
  /** Filter token events by transaction hash */
  transactionHash?: InputMaybe<CodegenStringInput>;
  /** Filter token events by their type */
  type?: InputMaybe<CodegenTokenTransferTypeInput>;
  /** Filter token events by the "to" and "from" wallet */
  walletAddress?: InputMaybe<CodegenStringInput>;
};

/** A token mint event */
export type CodegenTokenMintEvent = CodegenTokenEvent & {
  blockNumber: Scalars['Int'];
  contract?: Maybe<CodegenContract>;
  /** The address of the token contract */
  contractAddress: Scalars['String'];
  /** The ERC standard of the token contract */
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  nft?: Maybe<CodegenNFT>;
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  /** The token id */
  tokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity */
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

/** A token sale event */
export type CodegenTokenSaleEvent = CodegenTokenEvent & {
  blockNumber: Scalars['Int'];
  /** The address of the token contract */
  contractAddress: Scalars['String'];
  /** The ERC standard of the token contract */
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  /** Marketplace used to make the sale */
  marketplace?: Maybe<CodegenMarketplace>;
  receivedNft?: Maybe<CodegenNFT>;
  receivedTokenContract?: Maybe<CodegenContract>;
  /** The address of the token received as payment of the sale proceeds */
  receivedTokenContractAddress?: Maybe<Scalars['String']>;
  /** The id of the token received as payment of the sale proceeds */
  receivedTokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity of tokens received as payment of the sale proceeds */
  receivedTokenQuantity?: Maybe<Scalars['BigInt']>;
  sentNft?: Maybe<CodegenNFT>;
  sentTokenContract?: Maybe<CodegenContract>;
  /** The token id */
  sentTokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity */
  sentTokenQuantity: Scalars['BigInt'];
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

/** A token swap event */
export type CodegenTokenSwapEvent = CodegenTokenEvent & {
  blockNumber: Scalars['Int'];
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  receivedNft?: Maybe<CodegenNFT>;
  receivedTokenContract?: Maybe<CodegenContract>;
  /** The address of the token received */
  receivedTokenContractAddress?: Maybe<Scalars['String']>;
  /** The id of the token received */
  receivedTokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity */
  receivedTokenQuantity?: Maybe<Scalars['BigInt']>;
  sentNft?: Maybe<CodegenNFT>;
  sentTokenContract?: Maybe<CodegenContract>;
  /** The address of the token contract */
  sentTokenContractAddress: Scalars['String'];
  /** The ERC standard of the token contract */
  sentTokenContractERCStandard?: Maybe<CodegenERCStandard>;
  /** The token id */
  sentTokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity */
  sentTokenQuantity: Scalars['BigInt'];
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

/** A token transfer event */
export type CodegenTokenTransferEvent = CodegenTokenEvent & {
  blockNumber: Scalars['Int'];
  contract?: Maybe<CodegenContract>;
  /** The address of the token contract */
  contractAddress: Scalars['String'];
  /** The ERC standard of the token contract */
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  nft?: Maybe<CodegenNFT>;
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  /** The token id */
  tokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity */
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export type CodegenTokenTransferType =
  | 'BURN'
  | 'MINT'
  | 'SALE'
  | 'SWAP'
  | 'TRANSFER';

export type CodegenTokenTransferTypeInput = {
  eq?: InputMaybe<CodegenTokenTransferType>;
  in?: InputMaybe<Array<CodegenTokenTransferType>>;
  notIn?: InputMaybe<Array<CodegenTokenTransferType>>;
};

/** Token media uploads. */
export type CodegenTokenUpload = {
  /** The upload height. */
  height?: Maybe<Scalars['Float']>;
  /** The upload mimeType. */
  mimeType?: Maybe<Scalars['String']>;
  /** The upload url. */
  url: Scalars['String'];
  /** The upload width. */
  width?: Maybe<Scalars['Float']>;
};

export type CodegenTransaction = {
  /** The block number */
  blockNumber: Scalars['Int'];
  /** The block timestamp */
  blockTimestamp: Scalars['DateTime'];
  /** The contract address */
  contractAddress?: Maybe<Scalars['String']>;
  /** The cumulative gas used by this transaction */
  cumulativeGasUsed: Scalars['BigInt'];
  /** The effective gas price in Gwei */
  effectiveGasPrice?: Maybe<Scalars['BigInt']>;
  /** The from address */
  fromAddress: Scalars['String'];
  /** The amount of gas supplied for this transaction to happen */
  gas?: Maybe<Scalars['BigInt']>;
  /** Cost in Gwei per unit of gas for this transaction */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /** The amount of gas used by this transaction */
  gasUsed: Scalars['BigInt'];
  hash: Scalars['String'];
  /** The transaction input */
  input?: Maybe<Scalars['String']>;
  /** Max gas fee in Gwei */
  maxFeePerGas?: Maybe<Scalars['BigInt']>;
  /** Max gas priority fee in Gwei */
  maxPriorityFeePerGas?: Maybe<Scalars['BigInt']>;
  /** The to address */
  toAddress?: Maybe<Scalars['String']>;
  /** The transaction index */
  transactionIndex: Scalars['Int'];
  /** The transaction type */
  type?: Maybe<Scalars['String']>;
  /** The transaction value */
  value?: Maybe<Scalars['BigInt']>;
};

/** Filter input for transactions */
export type CodegenTransactionsFilterInput = {
  /** The block number */
  blockNumber?: InputMaybe<CodegenIntegerInput>;
  /** The from address */
  fromAddress?: InputMaybe<Scalars['String']>;
  /** The timestamp */
  timestamp?: InputMaybe<CodegenDateTimeInput>;
  /** The to address */
  toAddress?: InputMaybe<Scalars['String']>;
};

export type CodegenTrendingCollection = {
  /** The collection */
  collection?: Maybe<CodegenCollection>;
  stats?: Maybe<CodegenTrendingCollectionStats>;
};

/** Stats of a trending collection */
export type CodegenTrendingCollectionStats = {
  /**
   * Average sale price of the collection
   * @deprecated Use 'averageInNativeToken' instead
   */
  average?: Maybe<Scalars['Float']>;
  /** Average sale price of the collection in native token */
  averageInNativeToken?: Maybe<Scalars['Float']>;
  /**
   * Highest sale price of the collection
   * @deprecated Use 'ceilingInNativeToken' instead
   */
  ceiling?: Maybe<Scalars['Float']>;
  /** Highest sale price of the collection in native token */
  ceilingInNativeToken?: Maybe<Scalars['Float']>;
  /**
   * Lowest sale price of the collection
   * @deprecated Use 'floorInNativeToken' instead
   */
  floor?: Maybe<Scalars['Float']>;
  /** Lowest sale price of the collection in native token */
  floorInNativeToken?: Maybe<Scalars['Float']>;
  /** Total sales of the collection */
  totalSales?: Maybe<Scalars['Float']>;
  /**
   * Total sales volume of the collection
   * @deprecated Use 'volumeInNativeToken' instead
   */
  volume?: Maybe<Scalars['Float']>;
  /** Total sales volume of the collection in native token */
  volumeInNativeToken?: Maybe<Scalars['Float']>;
};

/** Filter input for trending collections */
export type CodegenTrendingCollectionsFilterInput = {
  /** A time period relative to the current time in which to filter trending collections by. */
  timePeriod?: InputMaybe<CodegenTrendingPeriod>;
  /** Custom time range in which to filter trending collections by. Available only to paid customers. */
  timeRange?: InputMaybe<CodegenDateTimeInput>;
};

export type CodegenTrendingOrderBy =
  | 'AVERAGE'
  | 'SALES'
  | 'VOLUME';

export type CodegenTrendingPeriod =
  | 'FIFTEEN_MINUTES'
  | 'FIVE_MINUTES'
  | 'ONE_DAY'
  | 'ONE_HOUR'
  | 'ONE_MINUTE'
  | 'SEVEN_DAYS'
  | 'THIRTY_MINUTES'
  | 'TWELVE_HOURS';

export type CodegenUnclassifiedContract = CodegenContract & {
  /** The ABI of the contract */
  abi?: Maybe<Scalars['JSON']>;
  /** The contract address */
  address: Scalars['String'];
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  /** The name of the contract */
  name?: Maybe<Scalars['String']>;
  /** The supported ERC interfaces of the contract */
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  /** The symbol of the contract */
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenContractTokenEventsConnection;
};


export type CodegenUnclassifiedContractCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWallet = {
  /** The address of the wallet */
  address: Scalars['String'];
  /** The ENS name of the wallet */
  ensName?: Maybe<Scalars['String']>;
  tokenBalances: CodegenWalletTokenBalancesConnection;
  tokenEvents: CodegenWalletTokenEventsConnection;
  /** Returns a list of transactions this wallet is associated with. Ordered by block number and index. */
  transactions: CodegenWalletTransactionsConnection;
  walletCollection?: Maybe<CodegenWalletCollection>;
  walletCollections: CodegenWalletWalletCollectionsConnection;
  walletNFT?: Maybe<CodegenWalletNFT>;
  walletNFTs: CodegenWalletWalletNFTsConnection;
};


export type CodegenWalletCodegentokenBalancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletTokenBalanceOrder>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenWalletCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTokenEventOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenWalletCodegentransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenWalletCodegenwalletCollectionArgs = {
  collectionAddress: Scalars['String'];
};


export type CodegenWalletCodegenwalletCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenWalletCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletCollectionOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};


export type CodegenWalletCodegenwalletNFTArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


export type CodegenWalletCodegenwalletNFTsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenWalletNFTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletNFTsOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCollection = {
  collection?: Maybe<CodegenCollection>;
  /** The address of the collection */
  collectionAddress?: Maybe<Scalars['String']>;
  /** The number of NFTs from this collection within the wallet */
  nftsCount: Scalars['BigInt'];
};

export type CodegenWalletCollectionOrderBy =
  | 'DATE_ACQUIRED'
  | 'NAME';

/** Filter of collections in a wallet */
export type CodegenWalletCollectionsFilterInput = {
  /** The name of the collection */
  collectionName?: InputMaybe<CodegenStringInput>;
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

export type CodegenWalletNFT = {
  nft?: Maybe<CodegenNFT>;
  /** The number of NFTs from this collection within the wallet */
  nftsCount?: Maybe<Scalars['Int']>;
};

/** Filter of nfts in a wallet by contract address and optional token id. Results are returned if any of the conditions are matched. */
export type CodegenWalletNFTsContractTokenFilterInput = {
  contractAddress: Scalars['String'];
  tokenId?: InputMaybe<Scalars['String']>;
};

/** Filter of nfts in a wallet */
export type CodegenWalletNFTsFilterInput = {
  contractTokens?: InputMaybe<Array<CodegenWalletNFTsContractTokenFilterInput>>;
  /** The name of the nft */
  nftName?: InputMaybe<CodegenStringInput>;
};

export type CodegenWalletNFTsOrderBy =
  | 'DATE_ACQUIRED'
  | 'NAME';

export type CodegenWalletTokenBalance = {
  contract?: Maybe<CodegenTokenContract>;
  /** The address of the token */
  contractAddress: Scalars['String'];
  /** The total balance of the token */
  totalBalance: Scalars['BigInt'];
};

/** Sort wallet token balance */
export type CodegenWalletTokenBalanceOrder =
  | 'CONTRACT_ADDRESS'
  | 'NAME'
  | 'SYMBOL'
  | 'TOTAL_BALANCE';

export type CodegenWalletTokenBalancesConnection = {
  edges: Array<CodegenWalletTokenBalancesConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletTokenBalancesConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenWalletTokenBalance;
};

export type CodegenWalletTokenEventsConnection = {
  edges: Array<CodegenWalletTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletTokenEventsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenWalletTransactionsConnection = {
  edges: Array<CodegenWalletTransactionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletTransactionsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenTransaction;
};

export type CodegenWalletWalletCollectionsConnection = {
  edges: Array<CodegenWalletWalletCollectionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletWalletCollectionsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenWalletCollection;
};

export type CodegenWalletWalletNFTsConnection = {
  edges: Array<CodegenWalletWalletNFTsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletWalletNFTsConnectionEdge = {
  cursor: Scalars['String'];
  node: CodegenWalletNFT;
};

export type CodegenEthMainnetContractDetailsQueryVariables = Exact<{
  contractAddress: Scalars['String'];
}>;


export type CodegenEthMainnetContractDetailsQuery = { ethereum: CodegenContractDetailsFragment };

export type CodegenEthereumMainnetEventsGetAllQueryVariables = Exact<{
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type CodegenEthereumMainnetEventsGetAllQuery = { ethereum: CodegenEventsGetAllFragment };

export type CodegenEthereumMainnetEventsByContractQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type CodegenEthereumMainnetEventsByContractQuery = { ethereum: CodegenEventsByContractFragment };

export type CodegenEthMainnetEventsByCollectionQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type CodegenEthMainnetEventsByCollectionQuery = { ethereum: CodegenCollectionEventsFragmentFragment };

export type CodegenEthereumMainnetEventsByNftQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type CodegenEthereumMainnetEventsByNftQuery = { ethereum: CodegenNftEventsFragmentFragment };

export type CodegenEthMainnetWalletNFTsByContractAddressQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type CodegenEthMainnetWalletNFTsByContractAddressQuery = { ethereum: CodegenNftsByContractAddressFragmentFragment };

export type CodegenEthMainnetWalletNFTsByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CodegenWalletNFTsFilterInput>;
}>;


export type CodegenEthMainnetWalletNFTsByAddressQuery = { ethereum: CodegenWalletByAddressFragmentFragment };

export type CodegenEthMainnetWalletNFTsByEnsQueryVariables = Exact<{
  ensName: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CodegenWalletNFTsFilterInput>;
}>;


export type CodegenEthMainnetWalletNFTsByEnsQuery = { ethereum: CodegenWalletByEnsFragmentFragment };

export type CodegenEthMainnetNFTDetailsQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
}>;


export type CodegenEthMainnetNFTDetailsQuery = { ethereum: CodegenNftDetailsFragment };

export type CodegenEthMainnetNftCollectionDetailsQueryVariables = Exact<{
  contractAddress: Scalars['String'];
}>;


export type CodegenEthMainnetNftCollectionDetailsQuery = { ethereum: CodegenNftCollectionInfoFragment };

export type CodegenEthMainnetTrendingCollectionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type CodegenEthMainnetTrendingCollectionsQuery = { ethereum: CodegenNftTrendingCollectionsFragment };

export type CodegenEthMainnetVerifyOwnershipByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  filter?: InputMaybe<CodegenWalletNFTsFilterInput>;
}>;


export type CodegenEthMainnetVerifyOwnershipByAddressQuery = { ethereum: CodegenVerifyOwnershipInfoFragment };

export type CodegenEthMainnetVerifyOwnershipByENSQueryVariables = Exact<{
  ensName: Scalars['String'];
  filter?: InputMaybe<CodegenWalletNFTsFilterInput>;
}>;


export type CodegenEthMainnetVerifyOwnershipByENSQuery = { ethereum: CodegenVerifyOwnershipInfoByENSFragment };

export type CodegenEthMainnetBalancesByWalletAddressQueryVariables = Exact<{
  address: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type CodegenEthMainnetBalancesByWalletAddressQuery = { ethereum: CodegenGetBalancesByWalletAddressFragmentFragment };

export type CodegenEthMainnetBalancesByWalletENSQueryVariables = Exact<{
  ensName: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type CodegenEthMainnetBalancesByWalletENSQuery = { ethereum: CodegenGetBalancesByWalletENSFragmentFragment };

export type CodegenEthMainnetTransactionsByHashQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type CodegenEthMainnetTransactionsByHashQuery = { ethereum: CodegenTransactionsByHashFragment };

export type CodegenEthMainnetTransactionsBySearchQueryVariables = Exact<{
  filter?: InputMaybe<CodegenTransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type CodegenEthMainnetTransactionsBySearchQuery = { ethereum: CodegenTransactionsBySearchFragment };

export type CodegenEthMainnetTransactionsByWalletAddressQueryVariables = Exact<{
  address: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type CodegenEthMainnetTransactionsByWalletAddressQuery = { ethereum: CodegenTransactionsByWalletAddressFragment };

export type CodegenEthMainnetTransactionsByWalletENSQueryVariables = Exact<{
  ensName: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type CodegenEthMainnetTransactionsByWalletENSQuery = { ethereum: CodegenTransactionsByWalletENSFragment };

export type CodegenEthMainnetGasPricesQueryVariables = Exact<{
  filter?: InputMaybe<CodegenGasPriceFilterInput>;
}>;


export type CodegenEthMainnetGasPricesQuery = { ethereum: CodegenGasPriceFragment };

export type CodegenCollectionEventsFragmentFragment = { collection?: { address: string, tokenEvents: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }> } } | { address: string, tokenEvents: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }> } } | null };

export type CodegenEventsByContractFragment = { contract?: { tokenEvents: { edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }>, pageInfo: CodegenPaginationFragment } } | { tokenEvents: { edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }>, pageInfo: CodegenPaginationFragment } } | { tokenEvents: { edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }>, pageInfo: CodegenPaginationFragment } } | null };

export type CodegenNftEventsFragmentFragment = { nft?: { contractAddress: string, tokenId: any, tokenEvents: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }> } } | { contractAddress: string, tokenId: any, tokenEvents: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }> } } | null };

export type CodegenEventsGetAllFragment = { tokenEvents: { edges: Array<{ node: CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment }>, pageInfo: CodegenPaginationFragment } };

export type CodegenGasPriceFragment = { gasPrices?: Array<CodegenGasPriceInfoFragment> | null };

export type CodegenNftCollectionInfoFragment = { collection?: { address: string, baseTokenUri?: string | null, circulatingSupply?: any | null, description?: string | null, externalUrl?: string | null, name?: string | null, slug?: string | null, symbol?: string | null, totalSupply?: any | null, twitterUsername?: string | null, bannerImage?: Array<{ height?: number | null, mimeType?: string | null, url: string, width?: number | null }> | null, contract?: { address: string, isVerified?: boolean | null, name?: string | null, symbol?: string | null, supportedErcInterfaces?: Array<string> | null } | null, image?: Array<{ height?: number | null, mimeType?: string | null, url: string, width?: number | null }> | null, ohlcvChart?: Array<{ average?: number | null, close?: number | null, count: number, high?: number | null, low?: number | null, open?: number | null, volume?: number | null, timestamp: any }> | null, openseaMetadata?: { isHidden?: boolean | null, isVerified?: boolean | null, unsafeSlug?: string | null } | null } | { address: string, baseTokenUri?: string | null, circulatingSupply?: any | null, description?: string | null, externalUrl?: string | null, name?: string | null, slug?: string | null, symbol?: string | null, totalSupply?: any | null, twitterUsername?: string | null, bannerImage?: Array<{ height?: number | null, mimeType?: string | null, url: string, width?: number | null }> | null, contract?: { address: string, isVerified?: boolean | null, name?: string | null, symbol?: string | null, supportedErcInterfaces?: Array<string> | null } | null, image?: Array<{ height?: number | null, mimeType?: string | null, url: string, width?: number | null }> | null, ohlcvChart?: Array<{ average?: number | null, close?: number | null, count: number, high?: number | null, low?: number | null, open?: number | null, volume?: number | null, timestamp: any }> | null, openseaMetadata?: { isHidden?: boolean | null, isVerified?: boolean | null, unsafeSlug?: string | null } | null } | null };

export type CodegenVerifyOwnershipInfoFragment = { walletByAddress?: { walletNFTs: { edges: Array<{ node: CodegenVerifyOwnershipNFTDetailsFragment }> } } | null };

export type CodegenVerifyOwnershipInfoByENSFragment = { walletByENS?: { walletNFTs: { edges: Array<{ node: CodegenVerifyOwnershipNFTDetailsFragment }> } } | null };

export type CodegenVerifyOwnershipNFTDetailsFragment = { nft?: { contractAddress: string, tokenId: any } | { contractAddress: string, tokenId: any } | null };

export type CodegenContractDetailsFragment = { contract?: CodegenContractInfo_CodegenNFTContract_CodegenFragment | CodegenContractInfo_CodegenTokenContract_CodegenFragment | CodegenContractInfo_CodegenUnclassifiedContract_CodegenFragment | null };

export type CodegenGetBalancesByWalletAddressFragmentFragment = { walletByAddress?: { address: string, ensName?: string | null, tokenBalances: { edges: Array<{ node: CodegenTokenBalanceNodeFragment }>, pageInfo: CodegenPaginationFragment } } | null };

export type CodegenGetBalancesByWalletENSFragmentFragment = { walletByENS?: { address: string, ensName?: string | null, tokenBalances: { edges: Array<{ node: CodegenTokenBalanceNodeFragment }>, pageInfo: CodegenPaginationFragment } } | null };

export type CodegenTransactionsByHashFragment = { transaction?: CodegenTransactionsNodeFragment | null };

export type CodegenTransactionsBySearchFragment = { transactions?: { edges: Array<{ node: CodegenTransactionsNodeFragment }>, pageInfo: CodegenPaginationFragment } | null };

export type CodegenNftDetailsFragment = { nft?: { __typename: 'ERC721NFT', animationUrl?: string | null, collectionSlug?: string | null, contractAddress: string, description?: string | null, externalUrl?: string | null, metadata?: any | null, name?: string | null, tokenId: any, wallet?: { address: string, ensName?: string | null } | null } | { __typename: 'ERC1155NFT', animationUrl?: string | null, collectionSlug?: string | null, contractAddress: string, description?: string | null, externalUrl?: string | null, metadata?: any | null, name?: string | null, tokenId: any, wallets: { edges: Array<{ node: { address: string, ensName?: string | null } }> } } | null };

export type CodegenNftTrendingCollectionsFragment = { trendingCollections: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: { collection?: CodegenTrendingCollectionInfo_CodegenERC721Collection_CodegenFragment | CodegenTrendingCollectionInfo_CodegenERC1155Collection_CodegenFragment | null } }> } };

export type CodegenNftsByContractAddressFragmentFragment = { collection?: { __typename: 'ERC721Collection', address: string, nfts: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenERC721NFTNodeFragment }> } } | { __typename: 'ERC1155Collection', address: string, nfts: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenERC1155NFTNodeFragment }> } } | null };

export type CodegenWalletByAddressFragmentFragment = { walletByAddress?: { address: string, ensName?: string | null, walletNFTs: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenWalletNFTNodeFragment }> } } | null };

export type CodegenWalletByEnsFragmentFragment = { walletByENS?: { address: string, ensName?: string | null, walletNFTs: { pageInfo: CodegenPaginationFragment, edges: Array<{ node: CodegenWalletNFTNodeFragment }> } } | null };

export type CodegenERC1155NFTNodeFragment = { __typename: 'ERC1155NFT', animationUrl?: string | null, collectionSlug?: string | null, contractAddress: string, description?: string | null, externalUrl?: string | null, metadata?: any | null, name?: string | null, tokenId: any, wallets: { edges: Array<{ node: { address: string, ensName?: string | null } }> } };

export type CodegenERC721NFTNodeFragment = { __typename: 'ERC721NFT', animationUrl?: string | null, collectionSlug?: string | null, contractAddress: string, description?: string | null, externalUrl?: string | null, metadata?: any | null, name?: string | null, tokenId: any, attributes?: Array<{ name: string, value: string }> | null, wallet?: { address: string, ensName?: string | null } | null };

export type CodegenTransactionsNodeFragment = { blockNumber: number, blockTimestamp: any, contractAddress?: string | null, fromAddress: string, cumulativeGasUsed: any, effectiveGasPrice?: any | null, gas?: any | null, gasPrice?: any | null, gasUsed: any, hash: string, maxFeePerGas?: any | null, maxPriorityFeePerGas?: any | null, toAddress?: string | null, type?: string | null, input?: string | null, transactionIndex: number, value?: any | null };

export type CodegenTrendingCollectionInfo_CodegenERC721Collection_CodegenFragment = { address: string, baseTokenUri?: string | null, circulatingSupply?: any | null, description?: string | null, externalUrl?: string | null, name?: string | null, symbol?: string | null, totalSupply?: any | null, twitterUsername?: string | null, image?: Array<{ height?: number | null, mimeType?: string | null, url: string, width?: number | null }> | null, openseaMetadata?: { isHidden?: boolean | null, isVerified?: boolean | null, unsafeSlug?: string | null } | null };

export type CodegenTrendingCollectionInfo_CodegenERC1155Collection_CodegenFragment = { address: string, baseTokenUri?: string | null, circulatingSupply?: any | null, description?: string | null, externalUrl?: string | null, name?: string | null, symbol?: string | null, totalSupply?: any | null, twitterUsername?: string | null, image?: Array<{ height?: number | null, mimeType?: string | null, url: string, width?: number | null }> | null, openseaMetadata?: { isHidden?: boolean | null, isVerified?: boolean | null, unsafeSlug?: string | null } | null };

export type CodegenTrendingCollectionInfoFragment = CodegenTrendingCollectionInfo_CodegenERC721Collection_CodegenFragment | CodegenTrendingCollectionInfo_CodegenERC1155Collection_CodegenFragment;

export type CodegenWalletNFTNodeFragment = { nft?: { animationUrl?: string | null, collectionSlug?: string | null, contractAddress: string, description?: string | null, externalUrl?: string | null, metadata?: any | null, name?: string | null, tokenId: any } | { animationUrl?: string | null, collectionSlug?: string | null, contractAddress: string, description?: string | null, externalUrl?: string | null, metadata?: any | null, name?: string | null, tokenId: any } | null };

export type CodegenContractInfo_CodegenNFTContract_CodegenFragment = { __typename: 'NFTContract', abi?: any | null, address: string, isVerified?: boolean | null, name?: string | null, supportedErcInterfaces?: Array<string> | null, symbol?: string | null };

export type CodegenContractInfo_CodegenTokenContract_CodegenFragment = { __typename: 'TokenContract', decimals?: any | null, abi?: any | null, address: string, isVerified?: boolean | null, name?: string | null, supportedErcInterfaces?: Array<string> | null, symbol?: string | null };

export type CodegenContractInfo_CodegenUnclassifiedContract_CodegenFragment = { __typename: 'UnclassifiedContract', abi?: any | null, address: string, isVerified?: boolean | null, name?: string | null, supportedErcInterfaces?: Array<string> | null, symbol?: string | null };

export type CodegenContractInfoFragment = CodegenContractInfo_CodegenNFTContract_CodegenFragment | CodegenContractInfo_CodegenTokenContract_CodegenFragment | CodegenContractInfo_CodegenUnclassifiedContract_CodegenFragment;

export type CodegenGasPriceInfoFragment = { blockNumber: number, total: number, average: number, ceiling: number, floor: number, median: number };

export type CodegenTokenBalanceNodeFragment = { totalBalance: any, contract?: { address: string, decimals?: any | null, name?: string | null, symbol?: string | null } | null };

export type CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment = { __typename: 'TokenBurnEvent', tokenId?: any | null, tokenQuantity: any, blockNumber: number, fromAddress: string, timestamp: any, toAddress: string, transactionHash?: string | null, transferIndex: number, type: CodegenTokenTransferType };

export type CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment = { __typename: 'TokenMintEvent', tokenQuantity: any, blockNumber: number, fromAddress: string, timestamp: any, toAddress: string, transactionHash?: string | null, transferIndex: number, type: CodegenTokenTransferType };

export type CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment = { __typename: 'TokenSaleEvent', marketplace?: CodegenMarketplace | null, receivedTokenContractAddress?: string | null, receivedTokenId?: any | null, sentTokenId?: any | null, blockNumber: number, fromAddress: string, timestamp: any, toAddress: string, transactionHash?: string | null, transferIndex: number, type: CodegenTokenTransferType };

export type CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment = { __typename: 'TokenSwapEvent', blockNumber: number, fromAddress: string, timestamp: any, toAddress: string, transactionHash?: string | null, transferIndex: number, type: CodegenTokenTransferType };

export type CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment = { __typename: 'TokenTransferEvent', tokenId?: any | null, contractAddress: string, tokenQuantity: any, blockNumber: number, fromAddress: string, timestamp: any, toAddress: string, transactionHash?: string | null, transferIndex: number, type: CodegenTokenTransferType };

export type CodegenTokenEventInfoFragment = CodegenTokenEventInfo_CodegenTokenBurnEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenMintEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSaleEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenSwapEvent_CodegenFragment | CodegenTokenEventInfo_CodegenTokenTransferEvent_CodegenFragment;

export type CodegenPaginationFragment = { endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null };

export type CodegenTransactionsByWalletAddressFragment = { walletByAddress?: { address: string, ensName?: string | null, transactions: { edges: Array<{ node: CodegenTransactionsNodeFragment }>, pageInfo: CodegenPaginationFragment } } | null };

export type CodegenTransactionsByWalletENSFragment = { walletByENS?: { address: string, ensName?: string | null, transactions: { edges: Array<{ node: CodegenTransactionsNodeFragment }>, pageInfo: CodegenPaginationFragment } } | null };

export const CodegenPaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenPaginationFragment, unknown>;
export const CodegenTokenEventInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenTokenEventInfoFragment, unknown>;
export const CodegenCollectionEventsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CollectionEventsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenCollectionEventsFragmentFragment, unknown>;
export const CodegenEventsByContractFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventsByContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenEventsByContractFragment, unknown>;
export const CodegenNftEventsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftEventsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenNftEventsFragmentFragment, unknown>;
export const CodegenEventsGetAllFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventsGetAll"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenEventsGetAllFragment, unknown>;
export const CodegenGasPriceInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GasPriceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GasPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"ceiling"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"median"}}]}}]} as unknown as DocumentNode<CodegenGasPriceInfoFragment, unknown>;
export const CodegenGasPriceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GasPrice"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gasPrices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GasPriceInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GasPriceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GasPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"ceiling"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"median"}}]}}]} as unknown as DocumentNode<CodegenGasPriceFragment, unknown>;
export const CodegenNftCollectionInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftCollectionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseTokenUri"}},{"kind":"Field","name":{"kind":"Name","value":"circulatingSupply"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"supportedErcInterfaces"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ohlcvChart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"close"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"high"}},{"kind":"Field","name":{"kind":"Name","value":"low"}},{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"openseaMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"unsafeSlug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}}]}}]}}]} as unknown as DocumentNode<CodegenNftCollectionInfoFragment, unknown>;
export const CodegenVerifyOwnershipNFTDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenVerifyOwnershipNFTDetailsFragment, unknown>;
export const CodegenVerifyOwnershipInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenVerifyOwnershipInfoFragment, unknown>;
export const CodegenVerifyOwnershipInfoByENSFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipInfoByENS"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenVerifyOwnershipInfoByENSFragment, unknown>;
export const CodegenContractInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContractInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"abi"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"supportedErcInterfaces"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}}]}}]} as unknown as DocumentNode<CodegenContractInfoFragment, unknown>;
export const CodegenContractDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContractDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContractInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContractInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"abi"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"supportedErcInterfaces"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}}]}}]} as unknown as DocumentNode<CodegenContractDetailsFragment, unknown>;
export const CodegenTokenBalanceNodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenBalanceNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletTokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}}]} as unknown as DocumentNode<CodegenTokenBalanceNodeFragment, unknown>;
export const CodegenGetBalancesByWalletAddressFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetBalancesByWalletAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"tokenBalances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenBalanceNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenBalanceNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletTokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenGetBalancesByWalletAddressFragmentFragment, unknown>;
export const CodegenGetBalancesByWalletENSFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetBalancesByWalletENSFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"tokenBalances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenBalanceNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenBalanceNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletTokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenGetBalancesByWalletENSFragmentFragment, unknown>;
export const CodegenTransactionsNodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<CodegenTransactionsNodeFragment, unknown>;
export const CodegenTransactionsByHashFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsByHash"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<CodegenTransactionsByHashFragment, unknown>;
export const CodegenTransactionsBySearchFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsBySearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenTransactionsBySearchFragment, unknown>;
export const CodegenNftDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC1155NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenNftDetailsFragment, unknown>;
export const CodegenTrendingCollectionInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TrendingCollectionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"baseTokenUri"}},{"kind":"Field","name":{"kind":"Name","value":"circulatingSupply"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"openseaMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"unsafeSlug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}}]}}]} as unknown as DocumentNode<CodegenTrendingCollectionInfoFragment, unknown>;
export const CodegenNftTrendingCollectionsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftTrendingCollections"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trendingCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrendingCollectionInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TrendingCollectionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"baseTokenUri"}},{"kind":"Field","name":{"kind":"Name","value":"circulatingSupply"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"openseaMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"unsafeSlug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}}]}}]} as unknown as DocumentNode<CodegenNftTrendingCollectionsFragment, unknown>;
export const CodegenERC1155NFTNodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ERC1155NFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC1155NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenERC1155NFTNodeFragment, unknown>;
export const CodegenERC721NFTNodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ERC721NFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]} as unknown as DocumentNode<CodegenERC721NFTNodeFragment, unknown>;
export const CodegenNftsByContractAddressFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftsByContractAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC1155Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ERC1155NFTNode"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ERC721NFTNode"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ERC1155NFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC1155NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ERC721NFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]} as unknown as DocumentNode<CodegenNftsByContractAddressFragmentFragment, unknown>;
export const CodegenWalletNFTNodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletNFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenWalletNFTNodeFragment, unknown>;
export const CodegenWalletByAddressFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletByAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WalletNFTNode"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletNFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenWalletByAddressFragmentFragment, unknown>;
export const CodegenWalletByEnsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletByEnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WalletNFTNode"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletNFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]} as unknown as DocumentNode<CodegenWalletByEnsFragmentFragment, unknown>;
export const CodegenTransactionsByWalletAddressFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsByWalletAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenTransactionsByWalletAddressFragment, unknown>;
export const CodegenTransactionsByWalletENSFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsByWalletENS"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<CodegenTransactionsByWalletENSFragment, unknown>;
export const CodegenEthMainnetContractDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetContractDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContractDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContractInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"abi"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"supportedErcInterfaces"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContractDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContractInfo"}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetContractDetailsQuery, CodegenEthMainnetContractDetailsQueryVariables>;
export const CodegenEthereumMainnetEventsGetAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthereumMainnetEventsGetAll"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEventsFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventsGetAll"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventsGetAll"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthereumMainnetEventsGetAllQuery, CodegenEthereumMainnetEventsGetAllQueryVariables>;
export const CodegenEthereumMainnetEventsByContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthereumMainnetEventsByContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEventsFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventsByContract"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventsByContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthereumMainnetEventsByContractQuery, CodegenEthereumMainnetEventsByContractQueryVariables>;
export const CodegenEthMainnetEventsByCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetEventsByCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEventsFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CollectionEventsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CollectionEventsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetEventsByCollectionQuery, CodegenEthMainnetEventsByCollectionQueryVariables>;
export const CodegenEthereumMainnetEventsByNftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthereumMainnetEventsByNft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEventsFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftEventsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenEventInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"transferIndex"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBurnEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenTransferEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMintEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenQuantity"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSaleEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receivedTokenId"}},{"kind":"Field","name":{"kind":"Name","value":"sentTokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftEventsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenEventInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthereumMainnetEventsByNftQuery, CodegenEthereumMainnetEventsByNftQueryVariables>;
export const CodegenEthMainnetWalletNFTsByContractAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetWalletNFTsByContractAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftsByContractAddressFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ERC1155NFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC1155NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ERC721NFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftsByContractAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC1155Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ERC1155NFTNode"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ERC721NFTNode"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetWalletNFTsByContractAddressQuery, CodegenEthMainnetWalletNFTsByContractAddressQueryVariables>;
export const CodegenEthMainnetWalletNFTsByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetWalletNFTsByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFTsFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WalletByAddressFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletNFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletByAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WalletNFTNode"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetWalletNFTsByAddressQuery, CodegenEthMainnetWalletNFTsByAddressQueryVariables>;
export const CodegenEthMainnetWalletNFTsByEnsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetWalletNFTsByEns"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFTsFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WalletByEnsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletNFTNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WalletByEnsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WalletNFTNode"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetWalletNFTsByEnsQuery, CodegenEthMainnetWalletNFTsByEnsQueryVariables>;
export const CodegenEthMainnetNFTDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetNFTDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"collectionSlug"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC1155NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721NFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetNFTDetailsQuery, CodegenEthMainnetNFTDetailsQueryVariables>;
export const CodegenEthMainnetNftCollectionDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetNftCollectionDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftCollectionInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftCollectionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseTokenUri"}},{"kind":"Field","name":{"kind":"Name","value":"circulatingSupply"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"supportedErcInterfaces"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ohlcvChart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"close"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"high"}},{"kind":"Field","name":{"kind":"Name","value":"low"}},{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"openseaMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"unsafeSlug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetNftCollectionDetailsQuery, CodegenEthMainnetNftCollectionDetailsQueryVariables>;
export const CodegenEthMainnetTrendingCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetTrendingCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftTrendingCollections"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TrendingCollectionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"baseTokenUri"}},{"kind":"Field","name":{"kind":"Name","value":"circulatingSupply"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"externalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"openseaMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"unsafeSlug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftTrendingCollections"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trendingCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrendingCollectionInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetTrendingCollectionsQuery, CodegenEthMainnetTrendingCollectionsQueryVariables>;
export const CodegenEthMainnetVerifyOwnershipByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetVerifyOwnershipByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFTsFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VerifyOwnershipInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetVerifyOwnershipByAddressQuery, CodegenEthMainnetVerifyOwnershipByAddressQueryVariables>;
export const CodegenEthMainnetVerifyOwnershipByENSDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetVerifyOwnershipByENS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFTsFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VerifyOwnershipInfoByENS"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletNFT"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VerifyOwnershipInfoByENS"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VerifyOwnershipNFTDetails"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetVerifyOwnershipByENSQuery, CodegenEthMainnetVerifyOwnershipByENSQueryVariables>;
export const CodegenEthMainnetBalancesByWalletAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetBalancesByWalletAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetBalancesByWalletAddressFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenBalanceNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletTokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetBalancesByWalletAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"tokenBalances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenBalanceNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetBalancesByWalletAddressQuery, CodegenEthMainnetBalancesByWalletAddressQueryVariables>;
export const CodegenEthMainnetBalancesByWalletENSDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetBalancesByWalletENS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetBalancesByWalletENSFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenBalanceNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WalletTokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetBalancesByWalletENSFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"tokenBalances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenBalanceNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetBalancesByWalletENSQuery, CodegenEthMainnetBalancesByWalletENSQueryVariables>;
export const CodegenEthMainnetTransactionsByHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetTransactionsByHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsByHash"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsByHash"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetTransactionsByHashQuery, CodegenEthMainnetTransactionsByHashQueryVariables>;
export const CodegenEthMainnetTransactionsBySearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetTransactionsBySearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionsFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsBySearch"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsBySearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetTransactionsBySearchQuery, CodegenEthMainnetTransactionsBySearchQueryVariables>;
export const CodegenEthMainnetTransactionsByWalletAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetTransactionsByWalletAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsByWalletAddress"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsByWalletAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetTransactionsByWalletAddressQuery, CodegenEthMainnetTransactionsByWalletAddressQueryVariables>;
export const CodegenEthMainnetTransactionsByWalletENSDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetTransactionsByWalletENS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsByWalletENS"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"fromAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeGasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveGasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gas"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"maxFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"maxPriorityFeePerGas"}},{"kind":"Field","name":{"kind":"Name","value":"toAddress"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"input"}},{"kind":"Field","name":{"kind":"Name","value":"transactionIndex"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionsByWalletENS"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletByENS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ensName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ensName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionsNode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetTransactionsByWalletENSQuery, CodegenEthMainnetTransactionsByWalletENSQueryVariables>;
export const CodegenEthMainnetGasPricesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthMainnetGasPrices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GasPriceFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ethereum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GasPrice"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GasPriceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GasPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"ceiling"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"median"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GasPrice"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMSchemaType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gasPrices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GasPriceInfo"}}]}}]}}]} as unknown as DocumentNode<CodegenEthMainnetGasPricesQuery, CodegenEthMainnetGasPricesQueryVariables>;