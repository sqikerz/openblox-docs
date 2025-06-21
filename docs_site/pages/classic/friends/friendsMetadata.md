
# friendsMetadata
Gets friends metadata.



## Example
```ts copy showLineNumbers
const { data: metadata } = await ClassicFriendsApi.friendsMetadata(); 
```


## Example Data
```ts copy showLineNumbers
{
  isFriendsFilterBarEnabled: true,
  isFriendsPageSortExperimentEnabled: false,
  isFriendsUserDataStoreCacheEnabled: true,
  frequentFriendSortRollout: 0,
  userName: null,
  displayName: null,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/metadata
```
  