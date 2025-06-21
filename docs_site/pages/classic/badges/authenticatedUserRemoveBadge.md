
# authenticatedUserRemoveBadge
Removes a specific badge from the authenticated user.


## Parameters
| Name    | Type       | Description                                                |
| :------ | :--------- | :--------------------------------------------------------- |
| badgeId | Identifier | The ID of the badge to remove from the authenticated user. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicBadgesApi.authenticatedUserRemoveBadge({ badgeId: 2124533401 }); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/user/badges/{badgeId}
```
  