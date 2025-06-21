
# authedUserUniverseVoteStatus
Gets the authenticated users vote status for a particular universe.


## Parameters
| Name       | Type       | Description                                    |
| :--------- | :--------- | :--------------------------------------------- |
| universeId | Identifier | The ID of the universe to get vote status for. |



## Example
```ts copy showLineNumbers
const { data: voteStatus } = await ClassicGamesApi.authedUserUniverseVoteStatus({ universeId: 1685831367 }); 
```


## Example Data
```ts copy showLineNumbers
{ canVote: false, userVote: true, reasonForNotVoteable: "PlayGame" } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/{universeId}/votes/user
```
  