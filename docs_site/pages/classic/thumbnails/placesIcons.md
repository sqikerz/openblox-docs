
# placesIcons
Gets thumbnail icon for multiple places.


## Parameters
| Name          | Type                          | Description                                                   |
| :------------ | :---------------------------- | :------------------------------------------------------------ |
| placeIds      | ArrayNonEmptyIfConst<PlaceId> | The ids of the places to get thumbnails for.                  |
| returnPolicy? | ThumbnailReturnPolicy         | The policy to use in selecting the thumbnail icons to return. |
| size?         | GamesIconSize                 | The thumbnails size (formatted as {width}x{height}).          |
| format?       | ThumbnailFormat               | Specifies the format of the thumbnails.                       |
| isCircular?   | boolean                       | Dictates if the thumbnails should be masked by a circle.      |



## Example
```ts copy showLineNumbers
const { data: placesIconsThumbnails } = await ClassicThumbnailsApi.placesIcons([4922741943]); 
```


## Example Data
```ts copy showLineNumbers
{
  "4922741943": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/7c1bf96fefde7b761e7b86bedf6fdca3/512/512/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/places/gameicons
```
  