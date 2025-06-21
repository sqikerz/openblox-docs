
# authedUserSetUniverseUpvote
Sets the upvote status for a particular universe for the authenticated user.


## Parameters
| Name       | Type       | Description                       |
| :--------- | :--------- | :-------------------------------- |
| universeId | Identifier | The ID of the universe to upvote. |
| upvote     | boolean    | If the universe is to be upvoted. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicGamesApi.authedUserSetUniverseUpvote({ universeId: 1685831367, upvote: true }); 
```



## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/games/${universeId}/user-votes
```
  