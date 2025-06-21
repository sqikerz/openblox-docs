
# assetsThumbnails
Gets thumbnail for multiple assets.


## Parameters
| Name          | Type                          | Description                                              |
| :------------ | :---------------------------- | :------------------------------------------------------- |
| assetIds      | ArrayNonEmptyIfConst<AssetId> | The ids of the assets to get thumbnails for.             |
| returnPolicy? | ThumbnailReturnPolicy         | The policy to use in selecting the thumbnails to return. |
| size          | AssetSize                     | The thumbnails size (formatted as {width}x{height}).     |
| format?       | ThumbnailFormat               | Specifies the format of the thumbnails.                  |
| isCircular?   | boolean                       | Dictates if the thumbnails should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: assetsThumbnails } = await ClassicThumbnailsApi.assetsThumbnails({
  assetIds: [7229442422],
  size: "420x420",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  "7229442422": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/7da8e78d9e2e303f0122c355f19f66d5/420/420/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/assets
```
  