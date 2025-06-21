
# friendsStatuses
Gets the friend statuses between a user and multiple related user ids.


## Parameters
| Name           | Type                                | Description                                                  |
| :------------- | :---------------------------------- | :----------------------------------------------------------- |
| userId         | Identifier                          | The id of the user to get friends statuses for.              |
| relatedUserIds | ArrayNonEmptyIfConst<RelatedUserId> | An array of the related userIds to get friends statuses for. |



## Example
```ts copy showLineNumbers
const { data: statuses } = await ClassicFriendsApi.friendsStatuses({ userId: 45348281, relatedUserIds: [2655994471] }); 
```


## Example Data
```ts copy showLineNumbers
{ "2655994471": "Friends" } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/friends/search
```
  