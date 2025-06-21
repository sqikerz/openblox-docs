
# groupAuditLogs
Gets audit log entries for a group.


## Parameters
| Name        | Type                    | Description                                                                                     |
| :---------- | :---------------------- | :---------------------------------------------------------------------------------------------- |
| groupId     | Identifier              | The id of the group.                                                                            |
| actionType? | GroupAuditLogActionType | The action to filter the audit logs by. (no filter will be applied if actionType is undefined). |
| userId?     | Identifier              | Filter for specific user by their id.                                                           |
| limit?      | 10 \| 25 \| 50 \| 100   | The number of results to be returned.                                                           |
| sortOrder?  | SortOrder               | The order that the results are sorted in.                                                       |
| cursor?     | string                  | The paging cursor for the previous or next page.                                                |



## Example
```ts copy showLineNumbers
const { data: auditLog } = await ClassicGroupsApi.groupAuditLogs({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{
  previousPageCursor: null,
  nextPageCursor: null,
  data: [
    {
      actor: {
        user: {
          hasVerifiedBadge: false,
          userId: 45348281,
          username: "MightyPart",
          displayName: "MightyPart",
        },
        role: {
          id: 38353811,
          name: "NamelessGuy2005 - Scriptor",
          rank: 255,
        },
      },
      actionType: "Accept Ally Request",
      description: {
        TargetGroupId: 6333562,
        TargetGroupName: "Mine Ways Talk Show",
      },
      created: "2020-05-18T12:06:34Z",
    },
    {
      actor: {
        user: {
          hasVerifiedBadge: false,
          userId: 45348281,
          username: "MightyPart",
          displayName: "MightyPart",
        },
        role: {
          id: 38353811,
          name: "NamelessGuy2005 - Scriptor",
          rank: 255,
        },
      },
      actionType: "Accept Ally Request",
      description: {
        TargetGroupId: 5257567,
        TargetGroupName: "The X1 Team",
      },
      created: "2020-05-13T13:52:57Z",
    },
    {
      actor: {
        user: {
          hasVerifiedBadge: false,
          userId: 45348281,
          username: "MightyPart",
          displayName: "MightyPart",
        },
        role: {
          id: 38353811,
          name: "NamelessGuy2005 - Scriptor",
          rank: 255,
        },
      },
      actionType: "Accept Ally Request",
      description: {
        TargetGroupId: 5894486,
        TargetGroupName: "Sky-Blox Studio",
      },
      created: "2020-05-13T13:52:56Z",
    },
  ],
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/audit-log
```
  