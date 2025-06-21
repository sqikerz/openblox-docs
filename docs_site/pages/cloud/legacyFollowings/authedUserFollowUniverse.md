
# authedUserFollowUniverse
Follows a particular universe as the authenticated user.


## Parameters
| Name       | Type       | Description                       |
| :--------- | :--------- | :-------------------------------- |
| universeId | UniverseId | The ID of the universe to follow. |
| userId     | UserId     | The ID of the authenticated user. |



## Example
```ts copy showLineNumbers
const { data: ids } = await LegacyFollowingsApi.authedUserFollowUniverse({ universeId: 4922741943, userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{ universeId: 4922741943, userId: 45348281 } 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/users/{userId}/universes/{universeId}
```
  