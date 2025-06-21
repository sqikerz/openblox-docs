
# placeServerList
Gets the server list for a place.


## Parameters
| Name              | Type                  | Description                                        |
| :---------------- | :-------------------- | :------------------------------------------------- |
| placeId           | Identifier            | The ID of the place to get private servers for.    |
| serverType        | "Friends" \| "Public" | The type of servers to return.                     |
| excludeFullGames? | boolean               | If full games should be omitted from the response. |
| limit?            | 10 \| 25 \| 50 \| 100 | The number of results per request.                 |
| sortOrder?        | SortOrder             | The order the results are sorted in.               |
| cursor?           | string                | The paging cursor for the previous or next page.   |



## Example
```ts copy showLineNumbers
const { data: servers } = await ClassicGamesApi.placeServerList({ placeId: 26838733, serverType: "Public" }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: "1cf0594e-196a-469d-a9f8-ac0c7a1a0c89",
    maxPlayers: 10,
    playing: 6,
    playerTokens: [
      "7532A11338571C5B914711CECB920A9C",
      "576940A121EC4A28EDF1A984FB4D40BA",
      "4AC528DB8689F636EE495A31219B4156",
      "DC41B4724EC46B0D561458B378C52A25",
      "FB9F483ACD1B0C22A916F12F2B8C5EE5",
    ],
    players: [],
    fps: 59.942818,
    ping: 82,
  },
  {
    id: "3a492d51-1b28-4f5b-92f5-ea7f8eb81a05",
    maxPlayers: 10,
    playing: 4,
    playerTokens: [
      "4FA1CB5B5D01574AB7E1A1AEFA683894",
      "DE71FC497ACEA320A57B2E168AF851ED",
      "0B9CB48166467EE29E89564A7A9CCB68",
      "13FCCCF441B16EFF86C938D8440FB9F0",
    ],
    players: [],
    fps: 59.995846,
    ping: 216,
  },
  {
    id: "3333da7e-8a94-464a-b749-9162404c3f71",
    maxPlayers: 10,
    playing: 3,
    playerTokens: [
      "D98666B566AD7834D20A02A7C4554E22",
      "EB2D522809D8F87E41778ABEF349F305",
      "97A0BA814C637D44F2A3E1A8AD190837",
    ],
    players: [],
    fps: 59.955658,
    ping: 138,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/{placeId}/servers/{serverType}
```
  