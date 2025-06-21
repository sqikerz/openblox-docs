
# userGames
Gets a list of games made by a specific user.


## Parameters
| Name       | Type           | Description                                      |
| :--------- | :------------- | :----------------------------------------------- |
| userId     | Identifier     | The id of the user to get games for.             |
| limit?     | 10 \| 25 \| 50 | The maximum amount of games to return.           |
| sortOrder? | SortOrder      | The order the results are sorted it.             |
| cursor?    | string         | the paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: games } = await ClassicGamesApi.userGames({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 6430220996,
    name: "Get Id",
    description: "",
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 18980972074, type: "Place" },
    created: 2024-08-17T12:47:01.458Z,
    updated: 2024-08-17T12:48:42.181Z,
    placeVisits: 0,
  },
  {
    id: 6041794959,
    name: "Octree Terrain",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 17642363611, type: "Place" },
    created: 2024-05-28T03:10:40.847Z,
    updated: 2024-08-14T09:24:03.800Z,
    placeVisits: 0,
  },
  {
    id: 5638577595,
    name: "New name!",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 16349154726, type: "Place" },
    created: 2024-02-13T02:39:58.590Z,
    updated: 2024-07-17T23:48:51.577Z,
    placeVisits: 7,
  },
  {
    id: 5587129688,
    name: "InventorySystem",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 16175332793, type: "Place" },
    created: 2024-01-30T14:49:01.037Z,
    updated: 2024-01-30T14:58:18.877Z,
    placeVisits: 0,
  },
  {
    id: 5529979812,
    name: "ChunkLoader",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 15995287896, type: "Place" },
    created: 2024-01-15T16:42:51.047Z,
    updated: 2024-01-16T17:27:36.540Z,
    placeVisits: 0,
  },
  {
    id: 5411380627,
    name: "Tiny Glade Recreation",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 15666536580, type: "Place" },
    created: 2023-12-17T19:16:33.380Z,
    updated: 2023-12-19T19:00:58.817Z,
    placeVisits: 6,
  },
  {
    id: 5243131845,
    name: "Test Game",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 15208361152, type: "Place" },
    created: 2023-10-29T16:03:43.603Z,
    updated: 2023-10-29T16:04:15.920Z,
    placeVisits: 0,
  },
  {
    id: 5097539509,
    name: "DatastoreTest1",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 14790444893, type: "Place" },
    created: 2023-09-16T10:55:13.767Z,
    updated: 2023-09-19T09:51:54.117Z,
    placeVisits: 0,
  },
  {
    id: 5076006380,
    name: "DynamicTerrain",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 14724555168, type: "Place" },
    created: 2023-09-09T06:54:43.173Z,
    updated: 2023-09-20T19:28:02.660Z,
    placeVisits: 0,
  },
  {
    id: 4621449053,
    name: "TerrainGen15",
    description: null,
    creator: { id: 45348281, type: "User" },
    rootPlace: { id: 13257759048, type: "Place" },
    created: 2023-04-26T12:48:16.137Z,
    updated: 2023-05-20T21:33:10.770Z,
    placeVisits: 0,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/users/{userId}/games
```
  