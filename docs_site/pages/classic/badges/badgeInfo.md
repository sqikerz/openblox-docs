
# badgeInfo
Gets information for a badge.


## Parameters
| Name    | Type    | Description                                 |
| :------ | :------ | :------------------------------------------ |
| badgeId | BadgeId | The ID of the badge to get information for. |



## Example
```ts copy showLineNumbers
const { data: badgeInfo } = await ClassicBadgesApi.badgeInfo({ badgeId: 2124533401 }); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 2124533401,
  name: "Tutorial Done",
  description: "Tutorial Lol",
  displayName: "Tutorial Done",
  displayDescription: "Tutorial Lol",
  enabled: true,
  iconImageId: 5316501478,
  displayIconImageId: 5316501478,
  created: 2020-05-05T08:20:10.653Z,
  updated: 2023-08-26T12:43:15.280Z,
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
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/badges/{badgeId}
```
  