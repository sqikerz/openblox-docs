
# removeBadgeFromUser
Removes a specific badge from a specific user.


## Parameters
| Name    | Type       | Description                                  |
| :------ | :--------- | :------------------------------------------- |
| badgeId | Identifier | The ID of the badge to remove from the user. |
| userId  | Identifier | The ID of the user to remove the badge from. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicBadgesApi.removeBadgeFromUser({ badgeId: 2124533401, userId: 45348281 }); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/user/{userId}/badges/{badgeId}
```
  