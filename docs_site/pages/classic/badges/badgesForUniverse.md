
# badgesForUniverse
Gets badges for a specific universe.


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| universeId | UniverseId            | The ID of the universe to get badges from.       |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results per request.               |
| sortOrder? | SortOrder             | The order the results are sorted in.             |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: badges } = await ClassicBadgesApi.badgesForUniverse({ universeId: 1685831367 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 2124533401,
    name: "Tutorial Done",
    description: "true",
    displayName: "Tutorial Done",
    displayDescription: "true",
    enabled: true,
    iconImageId: 5316501478,
    displayIconImageId: 5316501478,
    created: 2020-05-05T08:20:10.653Z,
    updated: 2024-07-16T22:34:44.021Z,
    statistics: {
      pastDayAwardedCount: 0,
      awardedCount: 394,
      winRatePercentage: 0,
    },
    awardingUniverse: {
      id: 1685831367,
      name: "RoCamping",
      rootPlaceId: 4922741943,
    },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/badges
```
  