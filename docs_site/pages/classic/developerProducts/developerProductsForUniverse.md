
# developerProductsForUniverse
Gets developer products for a particular universe.


## Parameters
| Name        | Type       | Description                                            |
| :---------- | :--------- | :----------------------------------------------------- |
| universeId  | Identifier | The ID of the universe to get developer products from. |
| limit?      | number     | The number of results per request.                     |
| pageNumber? | number     | The number for the previous or next page.              |



## Example
```ts copy showLineNumbers
const { data: products } = await ClassicDeveloperProductsApi.developerProductsForUniverse({ universeId: 1685831367 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 3616380,
    name: "Buy $100 CamperCoins",
    description: null,
    shopId: 1685930453,
    iconImageAssetId: 4922956503,
  },
  {
    id: 3616418,
    name: "Buy $1000 CamperCoins",
    description: null,
    shopId: 1685930453,
    iconImageAssetId: 4922970743,
  },
  {
    id: 3616413,
    name: "Buy $500 CamperCoins",
    description: null,
    shopId: 1685930453,
    iconImageAssetId: 4922969199,
  },
  {
    id: 3616425,
    name: "CamperCoins",
    description: null,
    shopId: 1685930453,
    iconImageAssetId: 18760547825,
  },
  {
    id: 3848620,
    name: "Starterpackk",
    description: null,
    shopId: 1685930453,
    iconImageAssetId: 5106354357,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/developerproducts
```
  