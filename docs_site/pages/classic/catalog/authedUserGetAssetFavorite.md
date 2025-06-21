
# authedUserGetAssetFavorite
Gets the authenticated users favorite for a specific asset.


## Parameters
| Name    | Type    | Description                              |
| :------ | :------ | :--------------------------------------- |
| userId  | UserId  | The ID of the authenticated user.        |
| assetId | AssetId | The ID of the asset to get favorite for. |



## Example
```ts copy showLineNumbers
const { data: favorite } = await ClassicCatalogApi.authedUserGetAssetFavorite({
  userId: 45348281,
  assetId: 2608539495,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  assetId: 2608539495,
  userId: 45348281,
  created: 2024-07-30T15:00:39.540Z,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/favorites/users/{userId}/assets/{assetId}/favorite
```
  