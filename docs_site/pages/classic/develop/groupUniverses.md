
# groupUniverses
Gets a list of universes for the given group.


## Parameters
| Name        | Type                  | Description                                             |
| :---------- | :-------------------- | :------------------------------------------------------ |
| groupId     | GroupId               | The ID of the group to get universes from.              |
| isArchived? | boolean               | Whether or not to return archived games.                |
| limit?      | 10 \| 25 \| 50 \| 100 | The number of results per request.                      |
| sortOrder?  | SortOrder             | The order to sort the results in. Sorted by universeId. |
| cursor?     | string                | The paging cursor for the previous or next page.        |



## Example
```ts copy showLineNumbers
const { data: universes } = await ClassicDevelopApi.groupUniverses({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 1651554338,
    name: "Ninjas Unleashed: Legion",
    description: "No secret projects here\r\nScriptor/Game Designer - NamelessGuy2005\r\nBuilder/Animator - Flaroh\r\n",
    isArchived: false,
    rootPlaceId: 4857762148,
    isActive: false,
    privacyType: "Private",
    creatorType: "Group",
    creatorTargetId: 5850082,
    creatorName: "MightyPart Games",
    created: 2020-04-04T13:17:08.120Z,
    updated: 2020-04-20T15:37:55.803Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/universes
```
  