
# catalogBatchInfo
Gets batch information about specific assets and bundles.


## Parameters
| Name      | Type  | Description                               |
| :-------- | :---- | :---------------------------------------- |
| assetIds  | 🤷    | The IDs of the assets to get info about.  |
| bundleIds | 🤷    | The IDs of the bundles to get info about. |



## Example
```ts copy showLineNumbers
const { data: items } = await ClassicCatalogApi.catalogBatchInfo({ assetIds: [2608538559], bundleIds: [429] }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 429,
    itemType: "Bundle",
    bundleType: 1,
    name: "Magma Fiend",
    description: "He's got hot blood, with a temperature of nine hundred and three.",
    productId: 7219806593957530,
    itemStatus: [],
    itemRestrictions: [],
    creatorHasVerifiedBadge: true,
    creatorType: "User",
    creatorTargetId: 1,
    creatorName: "Roblox",
    price: 300,
    lowestPrice: 300,
    lowestResalePrice: 0,
    unitsAvailableForConsumption: 0,
    purchaseCount: 0,
    favoriteCount: 520324,
    offSaleDeadline: null,
    collectibleItemId: "e036077b-ed8d-4bf1-9193-4e64bbc86978",
    totalQuantity: 0,
    saleLocationType: "ShopAndAllExperiences",
    hasResellers: false,
  },
  {
    id: 2608538559,
    itemType: "Asset",
    assetType: 31,
    name: "Magma Fiend - Right Leg",
    description: "He's got hot blood, with a temperature of nine hundred and three.",
    productId: 427839098,
    itemStatus: [],
    itemRestrictions: [],
    creatorHasVerifiedBadge: true,
    creatorType: "User",
    creatorTargetId: 1,
    creatorName: "Roblox",
    priceStatus: "Off Sale",
    purchaseCount: 0,
    favoriteCount: 9887,
    offSaleDeadline: null,
    saleLocationType: "NotApplicable",
    isOffSale: true,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/catalog/items/details
```
  