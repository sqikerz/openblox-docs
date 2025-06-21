
# groupsEmblems
Gets group emblem thumbnail for multiple groups.


## Parameters
| Name        | Type                          | Description                                                   |
| :---------- | :---------------------------- | :------------------------------------------------------------ |
| groupIds    | ArrayNonEmptyIfConst<GroupId> | The ids of the groups to get the thumbnail icons from.        |
| size?       | GroupEmblemSize               | The thumbnail icons size (formatted as {width}x{height}).     |
| format?     | ThumbnailFormat               | Specifies the format of the thumbnail icons.                  |
| isCircular? | boolean                       | Dictates if the thumbnail icons should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: groupsEmblems } = await ClassicThumbnailsApi.groupsEmblems({ groupIds: [5850082] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "5850082": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/caadbbddbed97108cfcff64fd1258b8f/420/420/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/icons
```
  