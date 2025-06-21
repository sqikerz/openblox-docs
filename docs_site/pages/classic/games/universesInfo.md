
# universesInfo
Gets a list of games info from universe ids.


## Parameters
| Name        | Type                             | Description                                  |
| :---------- | :------------------------------- | :------------------------------------------- |
| universeIds | ArrayNonEmptyIfConst<UniverseId> | The IDs of the games to get information for. |



## Example
```ts copy showLineNumbers
const { data: games } = await ClassicGamesApi.universesInfo({ universeIds: [1685831367] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "1685831367": {
    rootPlaceId: 4922741943,
    name: "RoCamping",
    description: "RoCamping is a fun adventure game where the end-goal is to create the best camp ever. Gather resources, chop down trees, go down caves and much more! Start your journey today!\r\n\r\nNOTE: RoCamping is still in BETA so expect there to be glitches, if you find a glitch then don't hesitate to join our group and report it there.\r\n\r\nCurrent Version: BETA v3,0\r\n\r\nalvinblox",
    sourceName: "RoCamping",
    sourceDescription: "RoCamping is a fun adventure game where the end-goal is to create the best camp ever. Gather resources, chop down trees, go down caves and much more! Start your journey today!\r\n\r\nNOTE: RoCamping is still in BETA so expect there to be glitches, if you find a glitch then don't hesitate to join our group and report it there.\r\n\r\nCurrent Version: BETA v3,0\r\n\r\nalvinblox",
    creator: {
      id: 5850082,
      name: "MightyPart Games",
      type: "Group",
      isRNVAccount: false,
      hasVerifiedBadge: false,
    },
    price: null,
    allowedGearGenres: ["Adventure"],
    allowedGearCategories: [],
    isGenreEnforced: true,
    copyingAllowed: false,
    playing: 0,
    visits: 2718,
    maxPlayers: 4,
    created: 2020-04-20T15:36:20.927Z,
    updated: 2024-05-23T20:51:29.867Z,
    studioAccessToApisAllowed: false,
    createVipServersAllowed: false,
    universeAvatarType: "MorphToR15",
    genre: "Adventure",
    isAllGenre: false,
    isFavoritedByUser: true,
    favoritedCount: 97,
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games
```
  