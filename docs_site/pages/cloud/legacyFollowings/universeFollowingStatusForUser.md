
# universeFollowingStatusForUser
Gets the following status between a user and a universe.


## Parameters
| Name       | Type       | Description                                         |
| :--------- | :--------- | :-------------------------------------------------- |
| universeId | UniverseId | The ID of the universe to get following status for. |
| userId     | UserId     | The ID of the user to get following status for.     |



## Example
```ts copy showLineNumbers
const { data: status } = await LegacyFollowingsApi.universeFollowingStatusForUser({
  universeId: 4922741943,
  userId: 45348281,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  universeId: 4922741943,
  userId: 45348281,
  canFollow: true,
  isFollowing: false,
  followingCountByType: 44,
  followingLimitByType: 200,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/universes/{universeId}/status
```
  