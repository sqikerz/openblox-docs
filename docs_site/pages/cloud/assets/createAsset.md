
# createAsset
Creates a new asset.


## Parameters
| Name          | Type  | Description                                                                                           |
| :------------ | :---- | :---------------------------------------------------------------------------------------------------- |
| displayName   | 🤷    | The display name for the asset.                                                                       |
| description   | 🤷    | The description for the asset.                                                                        |
| userId        | 🤷    | Define a userId to create the asset under the user.                                                   |
| groupId       | 🤷    | Define a groupId to create the asset under the group.                                                 |
| assetType     | 🤷    | The type for the asset.                                                                               |
| file          | 🤷    | The file containing the asset data.                                                                   |
| fileName      | 🤷    | This is required if your `file` argument is a `Buffer`.                                               |
| expectedPrice | 🤷    | Expected asset upload fee in Robux. When the actual price is more than expected, the operation fails. |
| previews      | 🤷    | The thumbnail previews for the asset.                                                                 |



## Example
```ts copy showLineNumbers
const { data: createdAssetInfo } = await AssetsApi.createAsset({
  assetType: "Model",
  displayName: "Model",
  userId: 45348281,
  file: "suzanne.fbx",
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
    revisionId: "1",
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
[38;5;117mPOST[0m[2;33m[0m /v1/assets
```
  