
# updatePlace
Updates a places information.


## Parameters
| Name         | Type        | Description                                             |
| :----------- | :---------- | :------------------------------------------------------ |
| universeId   | UniverseId  | The id of the universe to update place information for. |
| placeId      | PlaceId     | The id of the place to update.                          |
| displayName? | DisplayName | The new display name for the place.                     |
| description? | Description | The new description for the place.                      |
| serverSize?  | ServerSize  | The new server size for the place.                      |



## Example
```ts copy showLineNumbers
const { data: updatedInfo } = await ExperiencesApi.updatePlace({
  universeId: 5795192361,
  placeId: 16866553538,
  displayName: "Hello World",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/16866553538",
  createTime: 2024-03-25T10:42:46.297Z,
  updateTime: 2024-05-13T10:21:20.247Z,
  displayName: "Hello World",
  description: "",
  serverSize: 50,
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{PlaceId}
```
  