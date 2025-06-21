
# groupSettings
Gets settings for a group.


## Parameters
| Name    | Type       | Description                              |
| :------ | :--------- | :--------------------------------------- |
| groupId | Identifier | The id of the group to get settings for. |



## Example
```ts copy showLineNumbers
const { data: settings } = await ClassicGroupsApi.groupSettings({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{
  isApprovalRequired: true,
  isBuildersClubRequired: false,
  areEnemiesAllowed: true,
  areGroupFundsVisible: false,
  areGroupGamesVisible: true,
  isGroupNameChangeEnabled: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/settings
```
  