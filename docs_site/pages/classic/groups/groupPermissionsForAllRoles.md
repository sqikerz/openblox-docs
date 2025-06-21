
# groupPermissionsForAllRoles
Gets permissions for all roles in a group.


## Parameters
| Name    | Type    | Description          |
| :------ | :------ | :------------------- |
| groupId | GroupId | The id of the group. |



## Example
```ts copy showLineNumbers
const { data: allPerms } = await ClassicGroupsApi.groupPermissionsForAllRoles({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    groupId: 5850082,
    role: {
      id: 38353814,
      name: "Guest",
      description: "A non-group member.",
      rank: 0,
    },
    permissions: {
      groupPostsPermissions: {
        viewWall: true,
        postToWall: false,
        deleteFromWall: false,
        viewStatus: false,
        postToStatus: false,
      },
      groupMembershipPermissions: {
        changeRank: false,
        inviteMembers: false,
        removeMembers: false,
      },
      groupManagementPermissions: {
        manageRelationships: false,
        manageClan: false,
        viewAuditLogs: false,
      },
      groupEconomyPermissions: {
        spendGroupFunds: false,
        advertiseGroup: false,
        createItems: false,
        manageItems: false,
        addGroupPlaces: false,
        manageGroupGames: false,
        viewGroupPayouts: false,
        viewAnalytics: false,
      },
      groupOpenCloudPermissions: {
        useCloudAuthentication: false,
        administerCloudAuthentication: false,
      },
    },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/roles/permissions
```
  