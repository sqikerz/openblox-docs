
# outfit3dThumbnail
Gets 3d outfit thumbnail for an outfit.


## Parameters
| Name     | Type     | Description                                     |
| :------- | :------- | :---------------------------------------------- |
| outfitId | OutfitId | The id of the outfit to get a 3d thumbnail for. |



## Example
```ts copy showLineNumbers
const { data: outfit3dData } = await ClassicThumbnailsApi.outfit3dThumbnail({ outfitId: 110540093 }); 
```


## Example Data
```ts copy showLineNumbers
{
  targetId: 110540093,
  state: "Completed",
  imageUrl: "https://t7.rbxcdn.com/24eea0d840fe712230943a3bead4659a",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/outfit-3d
```
  