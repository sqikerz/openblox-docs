
# primaryGroupForUser
Gets a user's primary group.


## Parameters
| Name   | Type       | Description                                      |
| :----- | :--------- | :----------------------------------------------- |
| userId | Identifier | The id of the user to get the primary group for. |



## Example
```ts copy showLineNumbers
const { data: primaryGroup } = await ClassicGroupsApi.primaryGroupForUser({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{
  group: {
    id: 5850082,
    name: "MightyPart Games",
    description: "Welcome to my amazing group",
    owner: {
      hasVerifiedBadge: false,
      userId: 45348281,
      username: "MightyPart",
      displayName: "MightyPart",
    },
    shout: null,
    isBuildersClubOnly: false,
    publicEntryAllowed: true,
    hasVerifiedBadge: false,
  },
  role: { id: 38353811, name: "NamelessGuy2005 - Scriptor", rank: 255 },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/groups/primary/role
```
  