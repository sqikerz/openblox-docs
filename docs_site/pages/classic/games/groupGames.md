
# groupGames
Gets games made by a particular group.


## Parameters
| Name          | Type                  | Description                                      |
| :------------ | :-------------------- | :----------------------------------------------- |
| groupId       | GroupId               | The ID of the group to get games for.            |
| accessFilter? | 1 \| 2 \| 4           | Filters the returned games by an access filter.  |
| limit?        | 10 \| 25 \| 50 \| 100 | The number of results per request.               |
| sortOrder?    | SortOrder             | The order the results are sorted in.             |
| cursor?       | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: games } = await ClassicGamesApi.groupGames({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 2721703342,
    name: "RoCamping 2",
    description: null,
    creator: { id: 5850082, type: "Group" },
    rootPlace: { id: 7061026197, type: "Place" },
    created: "2021-07-07T18:50:52.77Z",
    updated: 2021-10-09T15:01:02.147Z,
    placeVisits: 189,
  },
  {
    id: 2148864919,
    name: "Nomadic",
    description: null,
    creator: { id: 5850082, type: "Group" },
    rootPlace: { id: 5967892302, type: "Place" },
    created: "2020-11-17T18:17:58.37Z",
    updated: "2020-11-17T18:18:01.38Z",
    placeVisits: 0,
  },
  {
    id: 1864457335,
    name: "RoCamping but it's 100 players",
    description: "NOTE: This is a meme game, we don't really update this game\r\n\r\nALSO NOTE: I sure it'll be chaotic if you play in a full server.\r\n\r\nRoCamping is a fun adventure game where the end-goal is to create the best camp ever. Gather resources, chop down trees, go down caves and much more! Start your journey today!",
    creator: { id: 5850082, type: "Group" },
    rootPlace: { id: 5323662969, type: "Place" },
    created: 2020-07-10T14:59:42.607Z,
    updated: "2020-07-11T01:02:53.91Z",
    placeVisits: 1,
  },
  {
    id: 1840468091,
    name: "RO-FACTOR",
    description: null,
    creator: { id: 5850082, type: "Group" },
    rootPlace: { id: 5255036322, type: "Place" },
    created: "2020-06-29T16:57:48.19Z",
    updated: "2021-10-09T15:00:45.08Z",
    placeVisits: 109,
  },
  {
    id: 1685831367,
    name: "RoCamping",
    description: "RoCamping is a fun adventure game where the end-goal is to create the best camp ever. Gather resources, chop down trees, go down caves and much more! Start your journey today!\r\n\r\nNOTE: RoCamping is still in BETA so expect there to be glitches, if you find a glitch then don't hesitate to join our group and report it there.\r\n\r\nCurrent Version: BETA v3,0\r\n\r\nalvinblox",
    creator: { id: 5850082, type: "Group" },
    rootPlace: { id: 4922741943, type: "Place" },
    created: 2020-04-20T20:36:21.117Z,
    updated: "2022-05-27T16:36:40.1Z",
    placeVisits: 2721,
  },
  {
    id: 1651554338,
    name: "Ninjas Unleashed: Legion",
    description: "No secret projects here\r\nScriptor/Game Designer - NamelessGuy2005\r\nBuilder/Animator - Flaroh\r\n",
    creator: { id: 5850082, type: "Group" },
    rootPlace: { id: 4857762148, type: "Place" },
    created: "2020-04-04T13:17:08.12Z",
    updated: 2020-04-20T15:37:55.803Z,
    placeVisits: 16,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}/games
```
  