
# authenticatedUserPendingGroups
Gets groups that the authenticated user has requested to join.



## Example
```ts copy showLineNumbers
const { data: pendingGroups } = await ClassicGroupsApi.authenticatedUserPendingGroups(); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 5850082,
    name: "lorem ipsum",
    description: "",
    owner: {
      hasVerifiedBadge: false,
      userId: 45348281,
      username: "MightyPart",
      displayName: "MightyPart",
    },
    shout: null,
    isBuildersClubOnly: false,
    publicEntryAllowed: false,
    hasVerifiedBadge: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/user/groups/pending
```
  