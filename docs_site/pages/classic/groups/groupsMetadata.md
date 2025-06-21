
# groupsMetadata
Gets groups metadata.



## Example
```ts copy showLineNumbers
const { data: metadata } = await ClassicGroupsApi.groupsMetadata(); 
```


## Example Data
```ts copy showLineNumbers
{
  groupLimit: 100,
  currentGroupCount: 57,
  groupStatusMaxLength: 255,
  groupPostMaxLength: 500,
  isGroupWallNotificationsEnabled: false,
  groupWallNotificationsSubscribeIntervalInMilliseconds: 60000,
  areProfileGroupsHidden: false,
  isGroupDetailsPolicyEnabled: true,
  showPreviousGroupNames: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/metadata
```
  