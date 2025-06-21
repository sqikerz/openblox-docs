
# userFollowingsCount
Gets the number of followings a user has.


## Parameters
| Name   | Type       | Description                                     |
| :----- | :--------- | :---------------------------------------------- |
| userId | Identifier | The ID of the user to get followings count for. |



## Example
```ts copy showLineNumbers
const { data: followingsCount } = await ClassicFriendsApi.userFollowingsCount({ userId: 45348281 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/followings/count
```
  