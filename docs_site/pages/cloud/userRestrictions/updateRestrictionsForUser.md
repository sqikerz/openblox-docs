
# updateRestrictionsForUser
Updates restrctions for a user.


## Parameters
| Name            | Type                | Description                                                                                                                                                                                                    |
| :-------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId      | UniverseId          | The ID of the universe to set restrictions for.                                                                                                                                                                |
| placeId?        | PlaceId             | The ID of the place to set restrictions for.                                                                                                                                                                   |
| userId          | UserId              | The ID of the uset to set restrictions to get.                                                                                                                                                                 |
| updatedData     | UpdatedData         | The new restrictions.                                                                                                                                                                                          |
| idempotencyKey? | string              | The unique key to use for idempotency.                                                                                                                                                                         |
| firstSent?      | Date \| ISODateTime | The timestamp at which the first request was sent. If this is further in the past than the lifetime of the idempotency key (which may exceed the annotated minimum lifetime), the server must return an error. |



## Example
```ts copy showLineNumbers
import { v4 as uuidv4 } from "uuid";
const idempotencyKey = uuidv4(),
  firstSent = new Date();

const { data: updatedRestrictions } = await UserRestrictionsApi.updateRestrictionsForUser({
  universeId: 5795192361,
  placeId: 18210254887,
  userId: 6193495014,
  idempotencyKey,
  firstSent,
  updatedData: {
    gameJoinRestriction: {
      active: true,
      duration: "31540000s", // 1 year.
      privateReason: "Being a meanie :/",
      displayReason: "Annoying other players.",
      excludeAltAccounts: false,
    },
  },
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/18210254887/user-restrictions/6193495014",
  user: "users/6193495014",
  gameJoinRestriction: {
    active: true,
    startTime: 2024-06-25T22:54:39.245Z,
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
  