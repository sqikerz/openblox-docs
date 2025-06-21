
# placeInfo
Gets information about a universes place.


## Parameters
| Name       | Type       | Description                                            |
| :--------- | :--------- | :----------------------------------------------------- |
| universeId | UniverseId | The id of the universe to get place information about. |
| placeId    | PlaceId    | The id of the place to get information about.          |



## Example
```ts copy showLineNumbers
const { data: placeInfo } = await ExperiencesApi.placeInfo({ universeId: 5795192361, placeId: 16866553538 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/16866553538",
  createTime: 2024-03-25T10:42:46.297Z,
  updateTime: 2024-03-26T16:50:19.023Z,
  displayName: "MightyPart's Place Number: 201",
  description: "",
  serverSize: 50,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/{placeId}
```
  