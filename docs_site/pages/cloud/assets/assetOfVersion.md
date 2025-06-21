
# assetOfVersion
Gets an asset of a specific version.


## Parameters
| Name    | Type    | Description                      |
| :------ | :------ | :------------------------------- |
| assetId | AssetId | The ID of the asset to get.      |
| version | Version | The version of the asset to get. |



## Example
```ts copy showLineNumbers
const { data: assetInfo } = await AssetsApi.assetOfVersion({ assetId: 18508967120, version: 1 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "assets/18508967120/versions/1",
  creationContext: { creator: { userId: "45348281" } },
  moderationResult: { moderationState: "Approved" },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/assets/{assetId}/versions/{version}
```
  