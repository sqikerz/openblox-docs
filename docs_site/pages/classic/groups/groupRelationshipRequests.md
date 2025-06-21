
# groupRelationshipRequests
Gets relationship requests.


## Parameters
| Name                  | Type                  | Description                                                            |
| :-------------------- | :-------------------- | :--------------------------------------------------------------------- |
| groupId               | Identifier            | The id of the group.                                                   |
| groupRelationshipType | GroupRelationshipType | The group relationship type, "Enemies" or "Allies".                    |
| maxRows?              | number                | The maximum number of rows for the page request, should be at least 1. |
| startRowIndex?        | number                | The start index of the page request.                                   |



## Example
```ts copy showLineNumbers
const { data: relationshipRequests, cursors } = await ClassicGroupsApi.groupRelationshipRequests({
  groupId: 5850082,
  groupRelationshipType: "Allies",
  maxRows: 1,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  groupId: 5850082,
  relationshipType: "Allies",
  totalGroupCount: 2,
  relatedGroups: [
    {
      id: 50,
      name: "Lorem Ipsum",
      description: "Hello World",
      owner: {
        hasVerifiedBadge: false,
        userId: 45348281,
        username: "MightyPart",
        displayName: "MightyPart",
      },
      shout: null,
      memberCount: 38,
      isBuildersClubOnly: false,
      publicEntryAllowed: true,
      hasVerifiedBadge: false,
    },
  ],
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/relationships/{groupRelationshipType}/requests
```
  