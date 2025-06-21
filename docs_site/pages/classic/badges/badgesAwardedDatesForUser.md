
# badgesAwardedDatesForUser
Gets timestamp for when multiple badges were awarded to a user.


## Parameters
| Name     | Type                          | Description                                    |
| :------- | :---------------------------- | :--------------------------------------------- |
| badgeIds | ArrayNonEmptyIfConst<BadgeId> | The IDs of the badges to get award dates from. |
| userId   | Identifier                    | The ID of thw user to get award date for.      |



## Example
```ts copy showLineNumbers
const { data: awardDates } = await ClassicBadgesApi.badgesAwardedDatesForUser({
  badgeIds: [2124533401],
  userId: 45348281,
}); 
```


## Example Data
```ts copy showLineNumbers
{ "2124533401": 2020-11-15T18:51:30.604Z } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/badges/awarded-dates
```
  