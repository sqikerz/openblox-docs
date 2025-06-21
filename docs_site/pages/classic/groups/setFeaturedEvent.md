
# setFeaturedEvent
Sets a featured event for a group.


## Parameters
| Name    | Type       | Description                               |
| :------ | :--------- | :---------------------------------------- |
| groupId | Identifier | The ID of the group to set the event for. |
| eventId | EventId    | The ID of the event to set.               |



## Example
```ts copy showLineNumbers
const { data: eventId } = await ClassicGroupsApi.setFeaturedEvent({
  groupId: 15842838,
  eventId: "5904751593700196492",
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/featured-content/event
```
  