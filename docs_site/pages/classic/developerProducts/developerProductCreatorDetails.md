
# developerProductCreatorDetails
Gets details for the creator about a developer product.


## Parameters
| Name               | Type  | Description                                                                  |
| :----------------- | :---- | :--------------------------------------------------------------------------- |
| developerProductId | 🤷    | The Product-ID (not ID) of the develoepr product to get creator details for. |



## Example
```ts copy showLineNumbers
const { data: productCreatorDetails } = await ClassicDeveloperProductsApi.developerProductCreatorDetails({
  developerProductProductId: 995087849,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  displayName: "Starterpackk",
  displayDescription: null,
  displayIconImageAssetId: 5106354357,
  priceInformation: {
    defaultPriceInRobux: 95,
    isInActivePriceOptimizationExperiment: false,
  },
  targetId: 3848620,
  productType: "Developer Product",
  assetId: 0,
  productId: 995087849,
  name: "Starterpackk",
  description: null,
  assetTypeId: 0,
  creator: { id: 0, name: null, creatorType: null, creatorTargetId: 0 },
  iconImageAssetId: 5106354357,
  created: "2020-05-29T11:49:09.08Z",
  updated: 2024-07-22T05:33:16.827Z,
  priceInRobux: null,
  premiumPriceInRobux: null,
  priceInTickets: null,
  isNew: false,
  isForSale: true,
  isPublicDomain: false,
  isLimited: false,
  isLimitedUnique: false,
  remaining: null,
  sales: null,
  minimumMembershipLevel: 0,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/developer-products/{developerProductId}/creator-details
```
  