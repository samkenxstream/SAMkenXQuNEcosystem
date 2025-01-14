import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('contract.getDetails', () => {
  it('executes correctly', async () => {
    await withPolly(
      { recordingName: 'query-getContractDetails-base', recordIfMissing: true },
      async () => {
        const data = await api.contracts.getDetails({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
        });
        expect(data).toStrictEqual({
          contract: {
            __typename: 'NFTContract',
            abi: [
              {
                inputs: [
                  {
                    internalType: 'string',
                    name: 'name',
                    type: 'string',
                  },
                  {
                    internalType: 'string',
                    name: 'symbol',
                    type: 'string',
                  },
                  {
                    internalType: 'uint256',
                    name: 'maxNftSupply',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'revealTs',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum LoopyDonuts.StorageType',
                    name: 'main',
                    type: 'uint8',
                  },
                  {
                    internalType: 'string',
                    name: 'provenance',
                    type: 'string',
                  },
                  {
                    internalType: 'string',
                    name: 'ipfsBase',
                    type: 'string',
                  },
                  {
                    internalType: 'string',
                    name: 'arweaveBase',
                    type: 'string',
                  },
                  {
                    internalType: 'string',
                    name: 'mysteryDonut',
                    type: 'string',
                  },
                ],
                stateMutability: 'nonpayable',
                type: 'constructor',
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                  },
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'approved',
                    type: 'address',
                  },
                  {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'Approval',
                type: 'event',
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                  },
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'operator',
                    type: 'address',
                  },
                  {
                    indexed: false,
                    internalType: 'bool',
                    name: 'approved',
                    type: 'bool',
                  },
                ],
                name: 'ApprovalForAll',
                type: 'event',
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'previousOwner',
                    type: 'address',
                  },
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                  },
                ],
                name: 'OwnershipTransferred',
                type: 'event',
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                  },
                  {
                    indexed: true,
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                  },
                  {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'Transfer',
                type: 'event',
              },
              {
                inputs: [],
                name: 'ArweaveBaseURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'IpfsBaseURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'MAX_TOKENS',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'PROVENANCE',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'RESERVE',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'REVEAL_TIMESTAMP',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address[]',
                    name: 'addrs',
                    type: 'address[]',
                  },
                ],
                name: 'addToWhitelist',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'approve',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'arweaveTokenURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                  },
                ],
                name: 'balanceOf',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'baseURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'discountPrice1',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'discountPrice2',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'donutPrice',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'flipPresaleState',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'flipSaleState',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'getApproved',
                outputs: [
                  {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'numberOfTokens',
                    type: 'uint256',
                  },
                ],
                name: 'getPricePerUnit',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'getPricingOptions',
                outputs: [
                  {
                    internalType: 'uint256[6]',
                    name: '',
                    type: 'uint256[6]',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                  {
                    internalType: 'enum LoopyDonuts.StorageType',
                    name: 'origin',
                    type: 'uint8',
                  },
                ],
                name: 'getTokenURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'ipfsTokenURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'addr',
                    type: 'address',
                  },
                ],
                name: 'isAddressInWhitelist',
                outputs: [
                  {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'operator',
                    type: 'address',
                  },
                ],
                name: 'isApprovedForAll',
                outputs: [
                  {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'isSenderInWhitelist',
                outputs: [
                  {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'lock',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'locked',
                outputs: [
                  {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'mainStorage',
                outputs: [
                  {
                    internalType: 'enum LoopyDonuts.StorageType',
                    name: '',
                    type: 'uint8',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'manualSetStartingIndexBlock',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'maxDonutPurchase',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'numberOfTokens',
                    type: 'uint256',
                  },
                ],
                name: 'mintDonut',
                outputs: [],
                stateMutability: 'payable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'mysteryDonutURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'name',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'owner',
                outputs: [
                  {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'ownerOf',
                outputs: [
                  {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'presaleIsActive',
                outputs: [
                  {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'numberOfTokens',
                    type: 'uint256',
                  },
                ],
                name: 'presaleMintDonut',
                outputs: [],
                stateMutability: 'payable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'qtyDiscount1',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'qtyDiscount2',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'registerForPresale',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address[]',
                    name: 'addrs',
                    type: 'address[]',
                  },
                ],
                name: 'removeFromWhitelist',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'reserveDonuts',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'safeTransferFrom',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: '_data',
                    type: 'bytes',
                  },
                ],
                name: 'safeTransferFrom',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'saleIsActive',
                outputs: [
                  {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'operator',
                    type: 'address',
                  },
                  {
                    internalType: 'bool',
                    name: 'approved',
                    type: 'bool',
                  },
                ],
                name: 'setApprovalForAll',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'string',
                    name: 'newURI',
                    type: 'string',
                  },
                ],
                name: 'setArweaveBaseURI',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'qty1',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'qty2',
                    type: 'uint256',
                  },
                ],
                name: 'setDiscountQunatities',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'string',
                    name: 'newURI',
                    type: 'string',
                  },
                ],
                name: 'setIpfsBaseURI',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'enum LoopyDonuts.StorageType',
                    name: 'stype',
                    type: 'uint8',
                  },
                ],
                name: 'setMainStorage',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'string',
                    name: 'mystery',
                    type: 'string',
                  },
                ],
                name: 'setMysteryDonutURI',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'single',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'discount1',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'discount2',
                    type: 'uint256',
                  },
                ],
                name: 'setPrices',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'string',
                    name: 'provenanceHash',
                    type: 'string',
                  },
                ],
                name: 'setProvenanceHash',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'revealTimeStamp',
                    type: 'uint256',
                  },
                ],
                name: 'setRevealTimestamp',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'setStartingIndex',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'startingIndex',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'startingIndexBlock',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'bytes4',
                    name: 'interfaceId',
                    type: 'bytes4',
                  },
                ],
                name: 'supportsInterface',
                outputs: [
                  {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'symbol',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'index',
                    type: 'uint256',
                  },
                ],
                name: 'tokenByIndex',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'index',
                    type: 'uint256',
                  },
                ],
                name: 'tokenOfOwnerByIndex',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'tokenURI',
                outputs: [
                  {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [],
                name: 'totalSupply',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'view',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                  },
                  {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
                ],
                name: 'transferFrom',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                  },
                ],
                name: 'transferOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [],
                name: 'withdraw',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
              },
            ],
            address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            isVerified: true,
            name: 'Loopy Donuts',
            supportedErcInterfaces: ['165', '721'],
            symbol: 'DONUT',
          },
        });
      }
    );
  });

  it('handles missing address', async () => {
    withPolly(
      {
        recordingName: 'query-getContractDetails-missing',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.contracts.getDetails({
          contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aaaa',
        });
        expect(data).toEqual({ contract: null });
      }
    );
  });

  it('throws an error when there is an invalid address', async () => {
    await expect(
      api.contracts.getDetails({
        contractAddress: '0x2106c00ac7da0a3430ae667879139e832307ZZZZ',
      })
    ).rejects.toThrowError(/Not a valid address/);
  });

  it('throws an error when there is an extra param', async () => {
    const input = {
      contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
      notAParam: 'notAParam',
    };
    await expect(api.contracts.getDetails(input)).rejects.toThrowError(
      /Unrecognized key\(s\) in object: 'notAParam'/
    );
  });
});
