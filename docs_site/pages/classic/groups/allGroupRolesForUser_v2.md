
# allGroupRolesForUser_v2
Gets a list of all roles for every group that the specified user is in.


## Parameters
| Name   | Type       | Description                          |
| :----- | :--------- | :----------------------------------- |
| userId | Identifier | The id of the user to get roles for. |



## Example
```ts copy showLineNumbers
const { data: groups } = await ClassicGroupsApi.allGroupRolesForUser_v2({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    group: {
      id: 5850082,
      name: "MightyPart Games",
      memberCount: 108,
      hasVerifiedBadge: false,
    },
    role: { id: 5850082, name: "Mighty Member", rank: 100 },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/users/{userId}/groups/roles
```
  