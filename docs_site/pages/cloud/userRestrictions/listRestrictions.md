
# listRestrictions
Gets restrictions for a user.


## Parameters
| Name       | Type       | Description                                     |
| :--------- | :--------- | :---------------------------------------------- |
| universeId | UniverseId | The ID of the universe to get restrictions for. |
| placeId?   | PlaceId    | The ID of the place to get restrictions for.    |
| userId     | UserId     | The ID of the uset to get restrictions to get.  |



## Example
```ts copy showLineNumbers
const { data: restrictions } = await UserRestrictionsApi.listRestrictions({
  universeId: 5795192361,
  placeId: 18210254887,
  userId: 6193495014,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/18210254887/user-restrictions/6193495014",
  user: "users/6193495014",
  gameJoinRestriction: {
    active: true,
    startTime: 2024-06-25T22:56:58.873Z,
    duration: "31540000s",
    privateReason: "Being a meanie :/",
    displayReason: "Annoying other players.",
    excludeAltAccounts: false,
    inherited: false,
  },
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v2/universes/{universe}/user-restrictions/{user-restriction}
[38;5;216mPATCH[0m[2;33m[0m /v2/universes/{universeId}/places/{placeId}/user-restrictions/{userId}
```
  