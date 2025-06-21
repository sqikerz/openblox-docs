
# badgesThumbnails
Gets thumbnail for multiple badges.


## Parameters
| Name        | Type                          | Description                                              |
| :---------- | :---------------------------- | :------------------------------------------------------- |
| badgeIds    | ArrayNonEmptyIfConst<BadgeId> | The ids of the badges to get thumbnails for.             |
| format?     | ThumbnailFormat               | Specifies the format of the thumbnailS.                  |
| isCircular? | boolean                       | Dictates if the thumbnails should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: badgesThumbnails } = await ClassicThumbnailsApi.badgesThumbnails({ badgeIds: [2124533401] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "2124533401": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/87105a9a85ea09e7591cfdd3f0825225/150/150/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/badges/icons
```
  