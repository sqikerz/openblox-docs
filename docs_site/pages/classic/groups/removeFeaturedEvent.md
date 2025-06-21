
# removeFeaturedEvent
Removes a featured event for a group.


## Parameters
| Name    | Type       | Description                                   |
| :------ | :--------- | :-------------------------------------------- |
| groupId | Identifier | The ID of the group to remove the event from. |
| eventId | EventId    | The ID of the event to remove.                |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicGroupsApi.removeFeaturedEvent({
  groupId: 15842838,
  eventId: "5904751593700196492",
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/featured-content/event
```
  