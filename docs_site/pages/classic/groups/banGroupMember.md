
# banGroupMember
Bans a member from a group.


## Parameters
| Name    | Type       | Description                               |
| :------ | :--------- | :---------------------------------------- |
| groupId | Identifier | The id of the group to ban a member from. |
| userId  | UserId     | The id of the member to ban.              |



## Example
```ts copy showLineNumbers
const { data: banInfo } = await ClassicGroupsApi.banGroupMember({ groupId: 5850082, userId: 1599940985 }); 
```


## Example Data
```ts copy showLineNumbers
{
  user: {
    hasVerifiedBadge: false,
    userId: 1599940985,
    username: "TheNamelessBot",
    displayName: "TheNamelessBot",
  },
  actingUser: {
    user: {
      hasVerifiedBadge: false,
      userId: 45348281,
      username: "MightyPart",
      displayName: "Mighty",
    },
    role: { id: 38353811, name: "NamelessGuy2005 - Scriptor", rank: 255 },
  },
  created: 2025-05-17T17:04:15.646Z,
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/groups/{groupId}/bans/{userId}
```
  