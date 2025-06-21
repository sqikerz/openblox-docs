
# authenticatedUserRequestFriendship
Sends a friend request to a specific user.


## Parameters
| Name              | Type                       | Description                                     |
| :---------------- | :------------------------- | :---------------------------------------------- |
| userId            | Identifier                 | The ID of the user to send a friend request to. |
| originSourceType? | FriendshipOriginSourceType | Where the friend request originated from.       |



## Example
```ts copy showLineNumbers
const { data: requestStatus } = await ClassicFriendsApi.authenticatedUserRequestFriendship({
  userId: 2655994471,
  originSourceType: "UserProfile",
}); 
```


## Example Data
```ts copy showLineNumbers
{ success: true, isCaptchaRequired: false } 
```


## Endpoint
```ansi
REST /...
```
  