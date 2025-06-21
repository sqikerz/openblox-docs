
# groupWallPosts_V2
Gets a list of group wall posts.


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| groupId    | Identifier            | The id of the group to get wall posts for.       |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results to be returned.            |
| sortOrder? | SortOrder             | The order that the results are sorted in.        |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: wallPosts } = await ClassicGroupsApi.groupWallPosts_V2({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 2724986278,
    poster: {
      user: {
        hasVerifiedBadge: false,
        userId: 45348281,
        username: "MightyPart",
        displayName: "MightyPart",
      },
      role: { id: 38353813, name: "Mighty Member", rank: 1 },
    },
    body: "Lorem ipsum dolor sit amet.",
    created: 2022-11-19T16:30:38.197Z,
    updated: 2022-11-19T16:30:38.197Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}/wall/posts
```
  