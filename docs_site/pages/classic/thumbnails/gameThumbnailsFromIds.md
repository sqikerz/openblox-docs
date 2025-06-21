
# gameThumbnailsFromIds
Gets thumbnail for multiple thumbnail ids that belong to a specified universe.


## Parameters
| Name         | Type                              | Description                                              |
| :----------- | :-------------------------------- | :------------------------------------------------------- |
| universeId   | Identifier                        | The id of the universe to get the thumbnails from.       |
| thumbnailIds | ArrayNonEmptyIfConst<ThumbnailId> | The ids of the thumbnails.                               |
| size?        | GameThumbnailSize                 | The thumbnails size (formatted as {width}x{height}).     |
| format?      | ThumbnailFormat                   | Specifies the format of the thumbnails.                  |
| isCircular?  | boolean                           | Dictates if the thumbnails should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: gameThumbnails } = await ClassicThumbnailsApi.gameThumbnailsFromIds({
  universeId: 1685831367,
  thumbnailIds: [5030792576],
}); 
```


## Example Data
```ts copy showLineNumbers
{
  "5030792576": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/e997db8b4e41b08acb49b9d2bb021b23/768/432/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/{universeId}/thumbnails
```
  