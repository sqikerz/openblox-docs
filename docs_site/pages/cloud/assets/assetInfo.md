
# assetInfo
Gets information for a specific asset.


## Parameters
| Name    | Type    | Description                                                             |
| :------ | :------ | :---------------------------------------------------------------------- |
| assetId | AssetId | The ID of the asset to get information for.                             |
| fields? | Field[] | The specific fields to get (if omitted then all fields will be gotten). |



## Example
```ts copy showLineNumbers
const { data: assetInfo } = await AssetsApi.assetInfo({ assetId: 16989283104 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "assets/16989283104",
  revisionId: "1",
  revisionCreateTime: 2024-04-02T22:57:45.953Z,
  assetId: "16989283104",
  displayName: "suzanne",
  assetType: "Model",
  creationContext: { creator: { userId: "45348281" } },
  moderationResult: { moderationState: "Approved" },
  previews: [],
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/assets/{assetId}
```
  