
# assetFavoritesCount
Gets favorites count for an asset.


## Parameters
| Name    | Type       | Description                                     |
| :------ | :--------- | :---------------------------------------------- |
| assetId | Identifier | The ID of the asset to get favorites count for. |



## Example
```ts copy showLineNumbers
const { data: favoritesCount } = await ClassicCatalogApi.assetFavoritesCount({ assetId: 2608539495 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/favorites/assets/{assetId}/count
```
  