
# groupInfo
Gets information about a user from their id.


## Parameters
| Name    | Type    | Description                            |
| :------ | :------ | :------------------------------------- |
| groupId | GroupId | The id of the group to get info about. |



## Example
```ts copy showLineNumbers
const { data: groupInfo } = await GroupsApi.groupInfo({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "groups/5850082",
  createTime: 2020-03-29T18:15:20.100Z,
  updateTime: 2024-05-12T13:17:41.639Z,
  id: "5850082",
  displayName: "MightyPart Games",
  description: "Hello World!",
  owner: "users/45348281",
  memberCount: 99,
  publicEntryAllowed: true,
  locked: false,
  verified: false,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}
```
  