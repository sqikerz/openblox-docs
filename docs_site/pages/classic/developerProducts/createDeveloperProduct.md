
# createDeveloperProduct
Creates a developer product.


## Parameters
| Name         | Type       | Description                                              |
| :----------- | :--------- | :------------------------------------------------------- |
| universeId   | Identifier | The ID of the universe to create a developer product in. |
| name         | string     | The name for the developer product.                      |
| description  | string     | The description for the developer product.               |
| priceInRobux | number     | The price in robux for the developer product.            |



## Example
```ts copy showLineNumbers
const { data: product } = await ClassicDeveloperProductsApi.createDeveloperProduct({
  universeId: 1685831367,
  name: "50 Coins",
  description: "Lorem Ipsum",
  priceInRobux: 50,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 60558911,
  name: "50 Coins",
  description: "Lorem Ipsum",
  shopId: 1685930453,
  iconImageAssetId: null,
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/universes/{universeId}/developerproducts
```
  