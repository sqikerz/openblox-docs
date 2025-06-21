
# universesProductInfo
Gets product information for multiple games.


## Parameters
| Name        | Type                             | Description                                          |
| :---------- | :------------------------------- | :--------------------------------------------------- |
| universeIds | ArrayNonEmptyIfConst<UniverseId> | The IDs of the games to get product information for. |



## Example
```ts copy showLineNumbers
const { data: products } = await ClassicGamesApi.universesProductInfo({ universeIds: [1685831367] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "1685831367": {
    isForSale: false,
    productId: 0,
    price: null,
    sellerId: 1536374574,
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/games-product-info
```
  