
# groupMembers
Gets members for a group.


## Parameters
| Name    | Type    | Description                                                                                                                                                                                                              |
| :------ | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| groupId | GroupId | The id of the group to get join requests for.                                                                                                                                                                            |
| limit?  | UserId  | The maximum number of group memberships to return. The service might return fewer than this value. If unspecified, at most 10 group memberships are returned. The maximum value is 100 and higher values are set to 100. |
| filter? | Filter  | This field may be set in order to filter the resources returned.                                                                                                                                                         |
| cursor? | string  | A page token, received from a previous call, to retrieve a subsequent page.                                                                                                                                              |



## Example
```ts copy showLineNumbers
const { data: members } = await GroupsApi.groupMembers({ groupId: 5850082, filter: { userId: 45348281 } }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "groups/5850082/memberships/NDUzNDgyODE",
    createTime: 2020-03-29T18:15:20.020Z,
    updateTime: 2023-09-15T07:03:50.583Z,
    user: "users/45348281",
    role: "groups/5850082/roles/38353811",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}/memberships
```
  