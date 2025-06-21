
# authenticatedUserDeclineFriendRequest
Accepts a friend request from a specific user for the authenticated user.


## Parameters
| Name            | Type       | Description                                        |
| :-------------- | :--------- | :------------------------------------------------- |
| requesterUserId | Identifier | The id of the user to decline friend request from. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicFriendsApi.authenticatedUserDeclineFriendRequest({
  requesterUserId: 2655994471,
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/users/{requesterUserId}/decline-friend-request
```
  