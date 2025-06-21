
# updateDeveloperProduct
Updates a developer product


## Parameters
| Name               | Type       | Description                                              |
| :----------------- | :--------- | :------------------------------------------------------- |
| universeId         | Identifier | The ID of the universe to update a developer product in. |
| developerProductId | Identifier | The ID of the developer product to update.               |
| name?              | string     | The new name for the developer product.                  |
| description?       | string     | The new description for the developer product.           |
| priceInRobux?      | number     | The new price in robux for the developer product.        |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicDeveloperProductsApi.updateDeveloperProduct({
  universeId: 1685831367,
  developerProductId: 975462435,
  name: "CamperCoins",
}); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/developerproducts/{developerProductId}/update
```
  