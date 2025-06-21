
# authedUserPrivateServersForPlace
Gets a list of private server for a particular universe that the authenticated user can access.


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| placeId    | Identifier            | The ID of the place to get private servers for.  |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results per request.               |
| sortOrder? | SortOrder             | The order the results are sorted in.             |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: privateServers } = await ClassicGamesApi.authedUserPrivateServersForPlace({ placeId: 26838733 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    maxPlayers: 10,
    playerTokens: [],
    players: [],
    name: "TAG GANG",
    vipServerId: 10262938,
    owner: {
      hasVerifiedBadge: false,
      id: 45348281,
      name: "MightyPart",
      displayName: "Mighty",
    },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/{placeId}/private-servers
```
  