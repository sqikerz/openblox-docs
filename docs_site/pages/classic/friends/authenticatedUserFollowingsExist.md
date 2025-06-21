
# authenticatedUserFollowingsExist
Returns whether or not the current user is following each userId in a list of userIds


## Parameters
| Name    | Type                         | Description                                |
| :------ | :--------------------------- | :----------------------------------------- |
| userIds | ArrayNonEmptyIfConst<UserId> | The userIds to get following statuses for. |



## Example
```ts copy showLineNumbers
const { data: followings } = await ClassicFriendsApi.authenticatedUserFollowingsExist({ userIds: [2655994471] }); 
```


## Example Data
```ts copy showLineNumbers
{ "2655994471": { isFollowing: false, isFollowed: false } } 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/user/following-exists
```
  