
# listRestrictionLogs
Gets a list of restriction logs from a specific universe.


## Parameters
| Name       | Type       | Description                                         |
| :--------- | :--------- | :-------------------------------------------------- |
| universeId | UniverseId | The ID of the universe to get restriction logs for. |
| placeId?   | PlaceId    | The ID of the place to get restriction logs for.    |
| userId?    | UserId     | The ID of the uset to get restriction logs to get.  |
| limit?     | number     | The maximum number of items to return.              |
| cursor?    | string     | Provide to request the next set of data.            |



## Example
```ts copy showLineNumbers
const { data: logs } = await UserRestrictionsApi.listRestrictionLogs({
  universeId: 5795192361,
  placeId: 18210254887,
  userId: 6193495014,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    user: "users/6193495014",
    place: "18210254887",
    moderator: { robloxUser: "45348281" },
    createTime: 2024-06-25T22:56:58.873Z,
    active: true,
    startTime: 2024-06-25T22:56:58.873Z,
    duration: "31540000s",
    privateReason: "Being a meanie :/",
    displayReason: "Annoying other players.",
    excludeAltAccounts: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/user-restrictions:listLogs
```
  