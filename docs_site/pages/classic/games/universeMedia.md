
# universeMedia
Gets media for a particular universe.


## Parameters
| Name       | Type       | Description                              |
| :--------- | :--------- | :--------------------------------------- |
| universeId | Identifier | The ID of the universe to get media for. |



## Example
```ts copy showLineNumbers
const { data: media } = await ClassicGamesApi.universeMedia({ universeId: 1685831367 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    assetTypeId: 1,
    assetType: "Image",
    imageId: 5130624799,
    videoHash: null,
    videoTitle: null,
    approved: true,
    altText: null,
  },
  {
    assetTypeId: 1,
    assetType: "Image",
    imageId: 5030792576,
    videoHash: null,
    videoTitle: null,
    approved: true,
    altText: null,
  },
  {
    assetTypeId: 1,
    assetType: "Image",
    imageId: 5030792559,
    videoHash: null,
    videoTitle: null,
    approved: true,
    altText: null,
  },
  {
    assetTypeId: 1,
    assetType: "Image",
    imageId: 5055393500,
    videoHash: null,
    videoTitle: null,
    approved: true,
    altText: null,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/games/{universeId}/media
```
  