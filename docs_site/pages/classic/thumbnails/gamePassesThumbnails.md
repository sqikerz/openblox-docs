
# gamePassesThumbnails
Gets thumbnail for multiple game passes.


## Parameters
| Name        | Type                             | Description                                              |
| :---------- | :------------------------------- | :------------------------------------------------------- |
| gamePassIds | ArrayNonEmptyIfConst<GamePassId> | The ids of the game passes to get thumbnails for.        |
| format?     | ThumbnailFormat                  | Specifies the format of the thumbnails.                  |
| isCircular? | boolean                          | Dictates if the thumbnails should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: gamePassesThumbnails } = await ClassicThumbnailsApi.gamePassesThumbnails({ gamePassIds: [9063647] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "9063647": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/4464935a3f7b124ba0a315cb3ff8113d/150/150/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/game-passes
```
  