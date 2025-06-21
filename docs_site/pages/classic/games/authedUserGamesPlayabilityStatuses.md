
# authedUserGamesPlayabilityStatuses
Gets universes playability statuses for the authenticated user.


## Parameters
| Name        | Type                             | Description                                               |
| :---------- | :------------------------------- | :-------------------------------------------------------- |
| universeIds | ArrayNonEmptyIfConst<UniverseId> | The IDs of the universes to get playability statuses for. |



## Example
```ts copy showLineNumbers
const { data: playabilityStatuses } = await ClassicGamesApi.authedUserGamesPlayabilityStatuses({
  universeIds: [1685831367],
}); 
```


## Example Data
```ts copy showLineNumbers
{ "1685831367": { playabilityStatus: "Playable", isPlayable: true } } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/multiget-playability-status
```
  