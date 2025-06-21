
# asset3dThumbnail
Gets 3d thumbnail for an asset.


## Parameters
| Name    | Type    | Description                                    |
| :------ | :------ | :--------------------------------------------- |
| assetId | AssetId | The id of the asset to get a 3d thumbnail for. |



## Example
```ts copy showLineNumbers
const { data: asset3dData } = await ClassicThumbnailsApi.asset3dThumbnail({ assetId: 6768917255 }); 
```


## Example Data
```ts copy showLineNumbers
{
  targetId: 6768917255,
  state: "Completed",
  imageUrl: "https://t2.rbxcdn.com/30ac72dfa05dff91baae9b8c0f9049e3",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/assets-thumbnail-3d
```
  