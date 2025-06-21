
# authenticatedUserEventPermissionsForHost
Gets permissions for all events created by either a user or a group.


## Parameters
| Name    | Type  | Description                                                              |
| :------ | :---- | :----------------------------------------------------------------------- |
| userId  | 🤷    | Define a userId to get permissions for all events created by the user.   |
| groupId | 🤷    | Define a groupId to get permissions for all events created by the group. |



## Example
```ts copy showLineNumbers
const { data: permissions } = await ClassicVirtualEventsApi.authenticatedUserEventPermissionsForHost({
  groupId: 15842838,
}); 
```


## Example Data
```ts copy showLineNumbers
{ maxPermissionLevel: "edit" } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/virtual-events/permissions
```
  