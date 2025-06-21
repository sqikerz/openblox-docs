
# groupRole
Gets information about a specific role for a group.


## Parameters
| Name    | Type    | Description                                           |
| :------ | :------ | :---------------------------------------------------- |
| groupId | GroupId | The id of the group to get the role information from. |
| roleId  | RoleId  | The id of the role to get information about.          |



## Example
```ts copy showLineNumbers
const { data: role } = await GroupsApi.groupRole({ groupId: 5850082, roleId: 48715304 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}/roles/{roleId}
```
  