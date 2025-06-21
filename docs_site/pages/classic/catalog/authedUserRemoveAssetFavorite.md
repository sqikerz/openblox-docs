
# authedUserRemoveAssetFavorite
Removes the authenticated users favorite for a specific asset.


## Parameters
| Name    | Type       | Description                        |
| :------ | :--------- | :--------------------------------- |
| userId  | Identifier | The ID of the authenticated user.  |
| assetId | Identifier | The ID of the asset to unfavorite. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicCatalogApi.authedUserRemoveAssetFavorite({
  userId: 45348281,
  assetId: 2608539495,
}); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/favorites/users/{userId}/assets/{assetId}/favorite
```
  