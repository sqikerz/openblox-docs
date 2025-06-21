
# updateAsset
Updates an asset.


## Parameters
| Name          | Type  | Description                                                                                           |
| :------------ | :---- | :---------------------------------------------------------------------------------------------------- |
| assetId       | 🤷    | The ID of the asset to update.                                                                        |
| assetType     | 🤷    | The type for the asset. Required if updating the assets file content.                                 |
| displayName   | 🤷    | The display name for the asset.                                                                       |
| description   | 🤷    | The description for the asset.                                                                        |
| file          | 🤷    | The file containing the new asset data.                                                               |
| fileName      | 🤷    | This is required if your `file` argument is a `Buffer`.                                               |
| expectedPrice | 🤷    | Expected asset upload fee in Robux. When the actual price is more than expected, the operation fails. |
| previews      | 🤷    | The thumbnail previews for the asset.                                                                 |



## Example
```ts copy showLineNumbers
const { data: updatedAssetInfo } = await AssetsApi.updateAsset({
  assetId: 18494719558,
  file: "suzanne.fbx",
  assetType: "Model",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "operations/b9682431-3c86-4473-8779-2ae9df9f0c0e",
  operationId: "b9682431-3c86-4473-8779-2ae9df9f0c0e",
  done: true,
  response: {
    path: "assets/18490359719",
    revisionId: "2",
    revisionCreateTime: 2024-07-14T18:02:50.597Z,
    assetId: "18490359719",
    displayName: "Model",
    assetType: "Model",
    creationContext: { creator: { userId: "45348281" } },
    moderationResult: { moderationState: "Approved" },
    state: "Active",
  },
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/assets/{assetId}
```
  