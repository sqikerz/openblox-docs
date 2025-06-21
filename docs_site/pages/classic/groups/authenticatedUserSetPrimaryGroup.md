
# authenticatedUserSetPrimaryGroup
Sets the authenticated user's primary group.


## Parameters
| Name    | Type       | Description                                      |
| :------ | :--------- | :----------------------------------------------- |
| groupId | Identifier | The id of the group to set as the primary group. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicGroupsApi.authenticatedUserSetPrimaryGroup({ groupId: 5850082 }); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/user/groups/primary
```
  