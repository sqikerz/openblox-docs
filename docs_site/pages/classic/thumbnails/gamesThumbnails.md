
# gamesThumbnails


## Parameters
| Name         | Type                             | Description                                                   |
| :----------- | :------------------------------- | :------------------------------------------------------------ |
| universeIds  | ArrayNonEmptyIfConst<UniverseId> | The ids of the universes to get the thumbnail icons from.     |
| returnPolicy | 🤷                               | The policy to use in selecting the thumbnail icons to return. |
| size?        | GameThumbnailSize                | The thumbnail icons size (formatted as {width}x{height}).     |
| format?      | ThumbnailFormat                  | Specifies the format of the thumbnail icons.                  |
| isCircular?  | boolean                          | Dictates if the thumbnail icons should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: gamesIcons } = await ClassicThumbnailsApi.gamesIcons({ universeIds: [1685831367] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "1685831367": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/7c1bf96fefde7b761e7b86bedf6fdca3/512/512/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/icons
```
  