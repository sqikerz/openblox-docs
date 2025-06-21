
# groupInfo
Gets information about a group.


## Parameters
| Name    | Type    | Description          |
| :------ | :------ | :------------------- |
| groupId | GroupId | The id of the group. |



## Example
```ts copy showLineNumbers
const { data: groupInfo } = await ClassicGroupsApi.groupInfo({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 5850082,
  name: "MightyPart Games",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
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
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}
```
  