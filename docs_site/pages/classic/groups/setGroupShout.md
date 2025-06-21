
# setGroupShout
Sets group shout (status).


## Parameters
| Name    | Type       | Description                               |
| :------ | :--------- | :---------------------------------------- |
| groupId | Identifier | The id of the group to set the shout for. |
| message | 🤷         | The content of the new shout.             |



## Example
```ts copy showLineNumbers
const { data: newShout } = await ClassicGroupsApi.setGroupShout({ groupId: 5850082, newShout: "Hello World!" }); 
```


## Example Data
```ts copy showLineNumbers
{
  body: "Hello World!",
  poster: {
    hasVerifiedBadge: false,
    userId: 45348281,
    username: "MightyPart",
    displayName: "MightyPart",
  },
  created: 2020-03-31T18:36:51.607Z,
  updated: 2023-09-15T16:21:00.272Z,
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/groups/{groupId}/status
```
  