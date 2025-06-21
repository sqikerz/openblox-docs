
# outfitsThumbnails
Gets outfit thumbnail for multiple outfits.


## Parameters
| Name        | Type                           | Description                                              |
| :---------- | :----------------------------- | :------------------------------------------------------- |
| outfitIds   | ArrayNonEmptyIfConst<OutfitId> | The ids of the outfits to get thumbnails for.            |
| size?       | OutfitSize                     | The thumbnails size (formatted as {width}x{height}).     |
| format?     | ThumbnailFormat                | Specifies the format of the thumbnails.                  |
| isCircular? | boolean                        | Dictates if the thumbnails should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: outfitsThumbnails } = await ClassicThumbnailsApi.outfitsThumbnails({ outfitIds: [110540093] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "110540093": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/41b9a3552f17cc2d7bca01b37be25d40/420/420/Avatar/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/outfits
```
  