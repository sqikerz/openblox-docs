
# bundleInfo
Gets information about a bundle.


## Parameters
| Name     | Type     | Description                                    |
| :------- | :------- | :--------------------------------------------- |
| bundleId | BundleId | The ID of the bundle to get information about. |



## Example
```ts copy showLineNumbers
const { data: bundle } = await ClassicCatalogApi.bundleInfo({ bundleId: 429 }); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 429,
  name: "Magma Fiend",
  description: "He's got hot blood, with a temperature of nine hundred and three.",
  bundleType: "BodyParts",
  items: [
    { id: 2608534881, name: "Magma Fiend - Left Arm", type: "Asset" },
    { id: 2608536258, name: "Magma Fiend - Left Leg", type: "Asset" },
    { id: 2608537440, name: "Magma Fiend - Right Arm", type: "Asset" },
    { id: 2608538559, name: "Magma Fiend - Right Leg", type: "Asset" },
    { id: 2608539495, name: "Magma Fiend - Torso", type: "Asset" },
    { id: 2510230574, name: "Rthro Climb", type: "Asset" },
    { id: 2510233257, name: "Rthro Fall", type: "Asset" },
    { id: 2510235063, name: "Rthro Idle", type: "Asset" },
    { id: 2510236649, name: "Rthro Jump", type: "Asset" },
    { id: 2510238627, name: "Rthro Run", type: "Asset" },
    { id: 2510240941, name: "Rthro Swim", type: "Asset" },
    { id: 2510242378, name: "Rthro Walk", type: "Asset" },
    { id: 474312030, name: "Magma Fiend", type: "UserOutfit" },
    { id: 12726967427, name: "Magma Fiend - Head", type: "Asset" },
    { id: 11573370910, name: "Anime - Mood", type: "Asset" },
    { id: 23452425262, name: "Magma Fiend Head", type: "UserOutfit" },
  ],
  creator: { id: 1, name: "Roblox", type: "User", hasVerifiedBadge: true },
  product: {
    id: 7219806593957530,
    type: "productType",
    isPublicDomain: false,
    isForSale: true,
    priceInRobux: 300,
    isFree: false,
    noPriceText: null,
  },
  collectibleItemDetail: {
    collectibleItemId: "e036077b-ed8d-4bf1-9193-4e64bbc86978",
    collectibleProductId: null,
    price: 300,
    lowestPrice: 300,
    lowestResalePrice: 0,
    totalQuantity: 0,
    unitsAvailable: 0,
    saleLocation: {
      saleLocationType: "ShopAndAllExperiences",
      saleLocationTypeId: 5,
      universeIds: [],
      enabledUniverseIds: [],
    },
    hasResellers: false,
    saleStatus: "OnSale",
    quantityLimitPerUser: null,
    offSaleDeadline: null,
    collectibleItemType: "NonLimited",
    lowestAvailableResaleProductId: null,
    lowestAvailableResaleItemInstanceId: null,
    resaleRestriction: "Disabled",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/bundles/{bundleId}/details
```
  