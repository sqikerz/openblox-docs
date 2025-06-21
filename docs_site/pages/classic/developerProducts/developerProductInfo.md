
# developerProductInfo
Gets information about a particular developer product.


## Parameters
| Name               | Type               | Description                                       |
| :----------------- | :----------------- | :------------------------------------------------ |
| developerProductId | DeveloperProductId | The ID (not product ID) of the developer product. |



## Example
```ts copy showLineNumbers
const { data: product } = await ClassicDeveloperProductsApi.developerProductInfo({ developerProductId: 3848620 }); 
```


## Example Data
```ts copy showLineNumbers
{
  productId: 995087849,
  productTypeId: 4,
  isPublicDomain: false,
  isForSale: true,
  priceInRobux: 95,
  premiumPriceInRobux: null,
  robloxProductId: null,
  targetId: 3848620,
  assetTypeId: null,
  creatorId: 1536374574,
  assetGenres: 0,
  assetCategories: 0,
  affiliateFeePercentage: null,
  isNew: false,
  created: "2020-05-29T11:49:09.08Z",
  updated: 2024-07-22T05:33:16.827Z,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/developer-products/{developerProductId}
```
  