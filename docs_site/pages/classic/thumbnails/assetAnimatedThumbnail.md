
# assetAnimatedThumbnail
Gets animated thumbnail for an asset.


## Parameters
| Name    | Type    | Description                                           |
| :------ | :------ | :---------------------------------------------------- |
| assetId | AssetId | The id of the asset to get an animated thumbnail for. |



## Example
```ts copy showLineNumbers
const { data: assetAnimatedData } = await ClassicThumbnailsApi.assetAnimatedThumbnail({ assetId: 6768917255 }); 
```


## Example Data
```ts copy showLineNumbers
{ targetId: 6768917255, state: "Completed", imageUrl: null } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/asset-thumbnail-animated
```
  