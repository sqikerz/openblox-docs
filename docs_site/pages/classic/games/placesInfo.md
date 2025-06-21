
# placesInfo
Gets information for multiple places.


## Parameters
| Name     | Type                          | Description                                   |
| :------- | :---------------------------- | :-------------------------------------------- |
| placeIds | ArrayNonEmptyIfConst<PlaceId> | The IDs of the places to get information for. |



## Example
```ts copy showLineNumbers
const { data: places } = await ClassicGamesApi.placesInfo({ placeIds: [4922741943] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "4922741943": {
    name: "RoCamping",
    description: "RoCamping is a fun adventure game where the end-goal is to create the best camp ever. Gather resources, chop down trees, go down caves and much more! Start your journey today!\r\n\r\nNOTE: RoCamping is still in BETA so expect there to be glitches, if you find a glitch then don't hesitate to join our group and report it there.\r\n\r\nCurrent Version: BETA v3,0\r\n\r\nalvinblox",
    sourceName: "RoCamping",
    sourceDescription: "RoCamping is a fun adventure game where the end-goal is to create the best camp ever. Gather resources, chop down trees, go down caves and much more! Start your journey today!\r\n\r\nNOTE: RoCamping is still in BETA so expect there to be glitches, if you find a glitch then don't hesitate to join our group and report it there.\r\n\r\nCurrent Version: BETA v3,0",
    url: "https://www.roblox.com/games/4922741943/RoCamping",
    builder: "MightyPart Games",
    builderId: 5850082,
    hasVerifiedBadge: false,
    isPlayable: true,
    reasonProhibited: "None",
    universeId: 1685831367,
    universeRootPlaceId: 4922741943,
    price: 0,
    imageToken: "T_4922741943_678b",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/multiget-place-details
```
  