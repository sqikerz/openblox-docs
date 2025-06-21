
# groupsThatUsersFriendsAreIn
Gets a list of all groups the specified users' friends are in.


## Parameters
| Name   | Type       | Description                                   |
| :----- | :--------- | :-------------------------------------------- |
| userId | Identifier | The id of the user to get friends groups for. |



## Example
```ts copy showLineNumbers
const { data: groupsThatUsersFriendsAreIn } = await ClassicGroupsApi.groupsThatUsersFriendsAreIn({ userId: 45348281 }); 
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
    groups: [
      {
        group: {
          id: 5850082,
          name: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet.",
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
        role: { id: 45348281, name: "MightyPart", rank: 1 },
      },
    ],
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/friends/groups/roles
```
  