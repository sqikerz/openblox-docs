
# groupJoinRequests
Gets join requests for a group.


## Parameters
| Name    | Type                   | Description                                                                                                                                                                                                                |
| :------ | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| groupId | GroupId                | The id of the group to get join requests for.                                                                                                                                                                              |
| limit?  | number                 | The maximum number of group join requests to return. The service might return fewer than this value. If unspecified, at most 10 group join requests are returned. The maximum value is 20 and higher values are set to 20. |
| filter? | { userId: Identifier } | This field may be set in order to filter the resources returned.                                                                                                                                                           |
| cursor? | string                 | A page token, received from a previous call, to retrieve a subsequent page.                                                                                                                                                |



## Example
```ts copy showLineNumbers
const { data: joinRequests } = await GroupsApi.groupJoinRequests({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "groups/5850082/join-requests/2655994471",
    createTime: 2024-05-12T16:32:46.841Z,
    user: "users/2655994471",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}/join-requests
```
  