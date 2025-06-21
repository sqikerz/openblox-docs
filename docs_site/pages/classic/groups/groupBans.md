
# groupBans
Gets a list of group bans.


## Parameters
| Name       | Type            | Description                                      |
| :--------- | :-------------- | :----------------------------------------------- |
| groupId    | Identifier      | The id of the group to get bans for.             |
| limit?     | number          | The number of results to be returned.            |
| sortOrder? | "Asc" \| "Desc" | The order that the results are sorted in.        |
| cursor?    | string          | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: bans } = await ClassicGroupsApi.groupBans({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
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
      role: {
        id: 38353811,
        name: "NamelessGuy2005 - Scriptor",
        rank: 255,
      },
    },
    created: 2025-05-17T17:04:15.646Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/bans
```
  