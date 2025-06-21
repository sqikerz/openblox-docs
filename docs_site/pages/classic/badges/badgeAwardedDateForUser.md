
# badgeAwardedDateForUser
Gets timestamp for when a single badge was awarded to a user.


## Parameters
| Name    | Type       | Description                                 |
| :------ | :--------- | :------------------------------------------ |
| badgeId | BadgeId    | The ID of the badge to get award date from. |
| userId  | Identifier | The ID of thw user to get award date for.   |



## Example
```ts copy showLineNumbers
const { data: awardDate } = await ClassicBadgesApi.badgeAwardedDateForUser({ badgeId: 2124533401, userId: 45348281 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/badges/{badgeId}/awarded-date
```
  