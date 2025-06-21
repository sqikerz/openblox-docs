
# rollbackAssetVersion
Rolls back a specific version of an asset


## Parameters
| Name    | Type    | Description                           |
| :------ | :------ | :------------------------------------ |
| assetId | AssetId | The ID of the asset to rollback.      |
| version | Version | The version of the asset to rollback. |



## Example
```ts copy showLineNumbers
const { data: rolledBackAssetInfo } = await AssetsApi.rollbackAssetVersion({ assetId: 18494719558, version: 2 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "assets/18494719558/versions/2",
  creationContext: { creator: { userId: "45348281" } },
  moderationResult: { moderationState: "Approved" },
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/assets/{assetId}/versions/{version}:rollback
```
  