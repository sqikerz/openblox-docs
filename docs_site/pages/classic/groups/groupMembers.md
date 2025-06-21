
# groupMembers
Gets a page of members of a group.


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| groupId    | Identifier            | The id of the group.                             |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results to be returned.            |
| sortOrder? | SortOrder             | The order that the results are sorted in.        |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: members } = await ClassicGroupsApi.groupMembers({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    user: {
      hasVerifiedBadge: false,
      userId: 45348281,
      username: "MightyPart",
      displayName: "MightyPart",
    },
    role: { id: 38353811, name: "NamelessGuy2005 - Scriptor", rank: 255 },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/users
```
  