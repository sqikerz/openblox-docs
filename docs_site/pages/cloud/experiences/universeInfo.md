
# universeInfo
Gets information about a universe.


## Parameters
| Name       | Type       | Description                                      |
| :--------- | :--------- | :----------------------------------------------- |
| universeId | UniverseId | The id of the universe to get information about. |



## Example
```ts copy showLineNumbers
const { data: universeInfo } = await ExperiencesApi.universeInfo({ universeId: 5795192361 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361",
  createTime: 2024-03-25T10:42:46.360Z,
  updateTime: 2024-03-25T10:42:46.360Z,
  displayName: "MightyPart's Place Number: 201",
  description: "",
  user: "users/45348281",
  visibility: "PRIVATE",
  voiceChatEnabled: false,
  ageRating: "AGE_RATING_UNSPECIFIED",
  desktopEnabled: true,
  mobileEnabled: true,
  tabletEnabled: true,
  consoleEnabled: false,
  vrEnabled: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}
```
  