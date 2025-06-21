
# createEvent
Creates a virtual event.


## Parameters
| Name               | Type              | Description                                                                           |
| :----------------- | :---------------- | :------------------------------------------------------------------------------------ |
| title              | Title             | The title of the event.                                                               |
| description        | Description       | The description of the event.                                                         |
| startTime          | StartTime         | The start time of the event.                                                          |
| endTime            | EndTime           | The end time of the event.                                                            |
| universeId         | UniverseId        | The ID of the universe to create the event in.                                        |
| groupId            | GroupId           | The ID of the group to create the event in. The universe must be owned by this group. |
| primaryCategory?   | PrimaryCategory   | The primary purpose/category of this event.                                           |
| secondaryCategory? | SecondaryCategory | The secondary purpose/category of this event.                                         |
| thumbnailIds?      | ThumbnailIds      | An array of thumbnailIds to be used for this event.                                   |



## Example
```ts copy showLineNumbers
const { data: createdEvent } = await ClassicVirtualEventsApi.createEvent({
  title: "Event Name",
  description: "Description",
  startTime: "2024-08-14T00:46:54.000Z",
  endTime: "2024-08-14T01:46:54.000Z",
  universeId: 6255645791,
  groupId: 15842838,
  primaryCategory: "contentUpdate",
  secondaryCategory: "activity",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  id: "6533473338141704368",
  title: "Event Name",
  displayTitle: null,
  description: "Description",
  displayDescription: null,
  eventTime: {
    startUtc: 2024-08-14T00:46:54.000Z,
    endUtc: 2024-08-14T01:46:54.000Z,
  },
  host: {
    hostName: "Bloxfolio",
    hasVerifiedBadge: false,
    hostType: "group",
    hostId: 15842838,
  },
  universeId: 6255645791,
  eventStatus: "unpublished",
  createdUtc: 2024-07-14T00:35:35.487Z,
  updatedUtc: 2024-07-14T00:35:35.487Z,
  eventCategories: [
    { category: "contentUpdate", rank: 0 },
    { category: "activity", rank: 1 },
  ],
  thumbnails: null,
  allThumbnailsCreated: false,
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/virtual-events/create
```
  