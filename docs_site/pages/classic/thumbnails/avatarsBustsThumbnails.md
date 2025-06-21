
# avatarsBustsThumbnails
Gets avatar bust thumbnail for multiple users.


## Parameters
| Name        | Type                         | Description                                                 |
| :---------- | :--------------------------- | :---------------------------------------------------------- |
| userIds     | ArrayNonEmptyIfConst<UserId> | The ids of the users to get thumbnails for.                 |
| size?       | AvatarsFullThumbnailsSize    | The avatar thumbnails size (formatted as {width}x{height}). |
| format?     | ThumbnailFormat              | Specifies the format of the thumbnails.                     |
| isCircular? | boolean                      | Dictates if the thumbnails should be masked by a circle.    |



## Example
```ts copy showLineNumbers
const { data: avatarsBustsThumbnails } = await ClassicThumbnailsApi.avatarsBustsThumbnails({
  userIds: [45348281],
  size: "150x150",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  "45348281": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/4b3c0e5b4efdda3bdfd94e77b2850ea5/150/150/AvatarBust/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/avatar-bust
```
  