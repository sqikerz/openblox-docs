
# authenticatedUserGroupsCanManageGamesOrItems
Lists groups that the authenticated user can manage.



## Example
```ts copy showLineNumbers
const { data: groupsCanManage } = await ClassicDevelopApi.authenticatedUserGroupsCanManageGamesOrItems(); 
```


## Example Data
```ts copy showLineNumbers
[{ id: 5850082, name: "MightyPart Games" }] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/user/groups/canmanage
```
  