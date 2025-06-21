
# authenticatedUserGroupMembershipInfo
Gets group membership info for the currently authenticated user.


## Parameters
| Name    | Type    | Description                                     |
| :------ | :------ | :---------------------------------------------- |
| groupId | GroupId | The id of the group to get membership info for. |



## Example
```ts copy showLineNumbers
const { data: membershipInfo } = await ClassicGroupsApi.authenticatedUserGroupMembershipInfo({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{
  groupId: 5850082,
  isPrimary: false,
  isPendingJoin: false,
  userRole: {
    user: {
      hasVerifiedBadge: false,
      userId: 45348281,
      username: "MightyPart",
      displayName: "MightyPart",
    },
    role: { id: 38353811, name: "NamelessGuy2005 - Scriptor", rank: 255 },
  },
  permissions: {
    groupPostsPermissions: {
      viewWall: true,
      postToWall: true,
      deleteFromWall: true,
      viewStatus: true,
      postToStatus: true,
    },
    groupMembershipPermissions: {
      changeRank: true,
      inviteMembers: true,
      removeMembers: true,
    },
    groupManagementPermissions: {
      manageRelationships: true,
      manageClan: true,
      viewAuditLogs: true,
    },
    groupEconomyPermissions: {
      spendGroupFunds: true,
      advertiseGroup: true,
      createItems: true,
      manageItems: true,
      addGroupPlaces: true,
      manageGroupGames: true,
      viewGroupPayouts: true,
      viewAnalytics: true,
    },
    groupOpenCloudPermissions: {
      useCloudAuthentication: true,
      administerCloudAuthentication: true,
    },
  },
  areGroupGamesVisible: true,
  areGroupFundsVisible: false,
  areEnemiesAllowed: true,
  canConfigure: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/membership
```
  