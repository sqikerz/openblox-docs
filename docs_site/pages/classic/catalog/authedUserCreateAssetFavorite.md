
# authedUserCreateAssetFavorite
Favorites a specific asset for the authenticated user.


## Parameters
| Name    | Type    | Description                                 |
| :------ | :------ | :------------------------------------------ |
| userId  | UserId  | The ID of the authenticated user.           |
| assetId | AssetId | The ID of the asset to create favorite for. |



## Example
```ts copy showLineNumbers
const { data: favorite } = await ClassicCatalogApi.authedUserCreateAssetFavorite({
  userId: 45348281,
  assetId: 2608539495,
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/favorites/users/{userId}/assets/{assetId}/favorite
```
  