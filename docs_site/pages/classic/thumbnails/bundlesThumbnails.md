
# bundlesThumbnails
Gets thumbnail for multiple bundles.


## Parameters
| Name        | Type                           | Description                                              |
| :---------- | :----------------------------- | :------------------------------------------------------- |
| bundleIds   | ArrayNonEmptyIfConst<BundleId> | The ids of the bundles to get thumbnails for.            |
| size?       | BundleSize                     | The thumbnails size (formatted as {width}x{height}).     |
| format?     | ThumbnailFormat                | Specifies the format of the thumbnails.                  |
| isCircular? | boolean                        | Dictates if the thumbnails should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: bundlesThumbnails } = await ClassicThumbnailsApi.bundlesThumbnails({ bundleIds: [181] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "181": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/12ff41b547ee75865bb60d0f3ae5508b/420/420/Avatar/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/bundles/thumbnails
```
  