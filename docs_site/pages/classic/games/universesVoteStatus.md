
# universesVoteStatus
Gets a list of vote statuses for multiple universes.


## Parameters
| Name        | Type                             | Description                                                                            |
| :---------- | :------------------------------- | :------------------------------------------------------------------------------------- |
| universeIds | ArrayNonEmptyIfConst<UniverseId> | The IDs of the universes to get vote statuses for. Cannot exceed a maximum of 100 IDs. |



## Example
```ts copy showLineNumbers
const { data: voteStatuses } = await ClassicGamesApi.universesVoteStatus({ universeIds: [1685831367] }); 
```


## Example Data
```ts copy showLineNumbers
{ "1685831367": { upVotes: 78, downVotes: 14 } } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/votes
```
  