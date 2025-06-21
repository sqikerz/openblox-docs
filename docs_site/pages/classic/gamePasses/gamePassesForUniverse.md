
# gamePassesForUniverse
Gets game passes for a particular universe.


## Parameters
| Name       | Type       | Description                                      |
| :--------- | :--------- | :----------------------------------------------- |
| universeId | Identifier | The ID of the universe to get game passes for.   |
| limit?     | number     | The number of results per request.               |
| cursor?    | string     | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: gamePasses } = await ClassicGamePassesApi.gamePassesForUniverse({ universeId: 1685831367, limit: 1 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    gamePassId: 11546631,
    name: "Donate Pluss",
    description: "nulll",
    isForSale: true,
    iconAssetId: 18759297002,
    placeId: 4922741943,
    createdTimestamp: "2020-09-01T00:15:17.79Z",
    updatedTimestamp: 2024-08-02T00:43:10.541Z,
    priceInformation: {
      defaultPriceInRobux: 250,
      isInActivePriceOptimizationExperiment: false,
      isInActiveDiscountCampaign: false,
      discountPercentage: 0,
    },
    productId: 1084063256,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/game-passes/universes/{universeId}/creator
```
  