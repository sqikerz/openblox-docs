
# authenticatedUserEvents
Gets events that the authenticated user has edit access to from a group.


## Parameters
| Name       | Type                             | Description                                          |
| :--------- | :------------------------------- | :--------------------------------------------------- |
| groupId    | GroupId                          | The ID of the group to get events from.              |
| filterBy?  | "upcoming" \| "past" \| "drafts" | Filter the events by different criterias.            |
| sortOrder? | "desc" \| "asc"                  | The order that the results are sorted in.            |
| sortBy?    | "startUtc" \| "createdUtc"       | The criteria used to sort the results.               |
| fromUtc?   | Date \| ISODateTime              | Only include events during or after a specific time. |
| limit?     | number                           | The number of results to be returned.                |
| cursor?    | number                           | The paging cursor for the previous or next page.     |



## Example
```ts copy showLineNumbers
const { data: myEvents } = await ClassicVirtualEventsApi.authenticatedUserEvents({ groupId: 15842838 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: "5904751593700196492",
    title: "My Cool Event Of Epic Awesomeness",
    displayTitle: null,
    description: "hello",
    displayDescription: null,
    eventTime: {
      startUtc: 2024-07-12T19:18:00.000Z,
      endUtc: 2024-07-13T20:30:00.000Z,
    },
    host: {
      hostName: "Bloxfolio",
      hasVerifiedBadge: false,
      hostType: "group",
      hostId: 15842838,
    },
    universeId: 6255645791,
    eventStatus: "active",
    createdUtc: 2024-07-12T19:01:41.661Z,
    updatedUtc: 2024-07-13T20:29:50.734Z,
    eventCategories: null,
    thumbnails: [{ mediaId: 18459197740, rank: 0 }],
    allThumbnailsCreated: false,
  },
  {
    id: "3425484122702479513",
    title: "Test",
    displayTitle: null,
    description: "lol",
    displayDescription: null,
    eventTime: {
      startUtc: 2024-07-13T21:27:32.656Z,
      endUtc: 2024-07-13T22:27:32.656Z,
    },
    host: {
      hostName: "Bloxfolio",
      hasVerifiedBadge: false,
      hostType: "group",
      hostId: 15842838,
    },
    universeId: 6255645791,
    eventStatus: "active",
    createdUtc: 2024-07-13T20:27:52.493Z,
    updatedUtc: 2024-07-13T20:27:52.967Z,
    eventCategories: null,
    thumbnails: null,
    allThumbnailsCreated: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/virtual-events/my-events
```
  