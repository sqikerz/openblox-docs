
# allGroupRolesForUser_V1
Gets a list of all roles for every group that the specified user is in.


## Parameters
| Name   | Type       | Description                          |
| :----- | :--------- | :----------------------------------- |
| userId | Identifier | The id of the user to get roles for. |



## Example
```ts copy showLineNumbers
const { data: allRoles } = await ClassicGroupsApi.allGroupRolesForUser_V1({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    group: {
      id: 5855434,
      name: "MightyPart Games",
      description: "Lorem ipsum dolor sit amet...",
      owner: {
        hasVerifiedBadge: false,
        userId: 45348281,
        username: "MightyPart",
        displayName: "MightyPart",
      },
      shout: null,
      memberCount: 102,
      isBuildersClubOnly: false,
      publicEntryAllowed: true,
      hasVerifiedBadge: false,
    },
    role: { id: 5855434, name: "MightyPart", rank: 1 },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/groups/roles
```
  