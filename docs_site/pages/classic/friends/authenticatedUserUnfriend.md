
# authenticatedUserUnfriend
Removes a friend for the authenticated user.


## Parameters
| Name         | Type  | Description                             |
| :----------- | :---- | :-------------------------------------- |
| targetUserId | 🤷    | The id of the user to remove as friend. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicFriendsApi.authenticatedUserUnfriend({ userId: 2655994471 }); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/users/{targetUserId}/unfriend
```
  