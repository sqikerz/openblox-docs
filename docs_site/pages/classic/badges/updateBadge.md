
# updateBadge
Updates a badge.


## Parameters
| Name         | Type       | Description                        |
| :----------- | :--------- | :--------------------------------- |
| badgeId      | Identifier | The ID of the badge to update.     |
| name?        | string     | The new name for the badge.        |
| description? | string     | The new description for the badge. |
| enabled?     | boolean    | If the badge is to enabled.        |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicBadgesApi.updateBadge({ badgeId: 2124533401, description: "hello" }); 
```



## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/badges/{badgeId}
```
  