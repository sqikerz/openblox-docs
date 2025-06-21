
# universeInfo
Gets information about a universe.


## Parameters
| Name       | Type       | Description                                    |
| :--------- | :--------- | :--------------------------------------------- |
| universeId | Identifier | The ID of the universe to get information for. |



## Example
```ts copy showLineNumbers
const { data: universeInfo } = await ClassicDevelopApi.universeInfo({ universeId: 6069031486 }); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 6069031486,
  name: "MightyPart's Place: 06032024_1",
  description: null,
  isArchived: false,
  rootPlaceId: 17718644108,
  isActive: false,
  privacyType: "Private",
  creatorType: "User",
  creatorTargetId: 45348281,
  creatorName: "MightyPart",
  created: 2024-06-03T09:42:56.270Z,
  updated: 2024-06-03T09:42:56.270Z,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}
```
  