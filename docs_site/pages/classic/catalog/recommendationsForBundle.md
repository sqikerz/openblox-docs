
# recommendationsForBundle
Gets recommendations for a specific bundle.


## Parameters
| Name     | Type       | Description                                               |
| :------- | :--------- | :-------------------------------------------------------- |
| bundleId | Identifier | The ID of the bundle to get recommendations for.          |
| amount?  | number     | The amount of recommendations to return. Can't exceed 50. |



## Example
```ts copy showLineNumbers
const { data: bundles } = await ClassicCatalogApi.recommendationsForBundle({ bundleId: 429, amount: 1 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 598,
    name: "Elemental Crystal Golem",
    description: "The light of an Elemental is controlled by its summoner, so its pretty much like a giant glowing mood ring. ",
    bundleType: "BodyParts",
    items: [
      {
        id: 4504227797,
        name: "Elemental Crystal Golem - Left Arm",
        type: "Asset",
      },
      {
        id: 4504228958,
        name: "Elemental Crystal Golem - Left Leg",
        type: "Asset",
      },
      {
        id: 4504228453,
        name: "Elemental Crystal Golem - Right Arm",
        type: "Asset",
      },
      {
        id: 4504229658,
        name: "Elemental Crystal Golem - Right Leg",
        type: "Asset",
      },
      {
        id: 4504230246,
        name: "Elemental Crystal Golem - Torso",
        type: "Asset",
      },
      {
        id: 4504231783,
        name: "Elemental Crystal Golem - Shoulder Rock",
        type: "Asset",
      },
      { id: 2510235063, name: "Rthro Idle", type: "Asset" },
      { id: 2510230574, name: "Rthro Climb", type: "Asset" },
      { id: 2510233257, name: "Rthro Fall", type: "Asset" },
      { id: 2510236649, name: "Rthro Jump", type: "Asset" },
      { id: 2510238627, name: "Rthro Run", type: "Asset" },
      { id: 2510240941, name: "Rthro Swim", type: "Asset" },
      { id: 2510242378, name: "Rthro Walk", type: "Asset" },
      {
        id: 1791810588,
        name: "Elemental Crystal Golem",
        type: "UserOutfit",
      },
      {
        id: 15057738572,
        name: "Elemental Crystal Golem - Head",
        type: "Asset",
      },
      { id: 11573370910, name: "Anime - Mood", type: "Asset" },
      {
        id: 23452708388,
        name: "Elemental Crystal Golem - Head",
        type: "UserOutfit",
      },
    ],
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
    product: {
      id: 1066235020906534,
      type: "productType",
      isPublicDomain: false,
      isForSale: true,
      priceInRobux: 400,
      isFree: false,
      noPriceText: null,
    },
    collectibleItemDetail: {
      collectibleItemId: "5529c928-ca35-4fba-91d8-9b63f81a1ae2",
      collectibleProductId: null,
      price: 400,
      lowestPrice: 400,
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
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/bundles/{bundleId}/recommendations
```
  