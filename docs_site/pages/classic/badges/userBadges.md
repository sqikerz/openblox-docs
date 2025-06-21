
# userBadges
Gets a list of badges a user has been awarded


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| userId     | Identifier            | The ID of the user to get badges for.            |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results per request.               |
| sortOrder? | SortOrder             | The order the results are sorted in.             |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: badges } = await ClassicBadgesApi.userBadges({ userId: 45348281 }); 
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
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/badges
```
  