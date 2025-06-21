
# groupRoles
Gets roles for a group.


## Parameters
| Name    | Type    | Description                                                                                                                                                                                                |
| :------ | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| groupId | GroupId | The id of the group to get roles for.                                                                                                                                                                      |
| limit?  | number  | The maximum number of group roles to return. The service might return fewer than this value. If unspecified, at most 10 group roles are returned. The maximum value is 20 and higher values are set to 20. |
| cursor? | string  | A page token, received from a previous call, to retrieve a subsequent page.                                                                                                                                |



## Example
```ts copy showLineNumbers
const { data: roles } = await GroupsApi.groupRoles({ groupId: 5850082, limit: 1 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "groups/5850082/roles/38353811",
    createTime: 2020-03-29T13:15:20.020Z,
    updateTime: 2020-09-20T08:04:35.850Z,
    id: "38353811",
    displayName: "NamelessGuy2005 - Scriptor",
    description: "",
    rank: 255,
    memberCount: 1,
    permissions: {
      viewWallPosts: true,
      createWallPosts: true,
      deleteWallPosts: true,
      viewGroupShout: true,
      createGroupShout: true,
      changeRank: true,
      acceptRequests: true,
      exileMembers: true,
      manageRelationships: true,
      viewAuditLog: true,
      spendGroupFunds: true,
      advertiseGroup: true,
      createAvatarItems: true,
      manageAvatarItems: true,
      manageGroupUniverses: true,
      viewUniverseAnalytics: true,
      createApiKeys: true,
      manageApiKeys: true,
    },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}/roles
```
  