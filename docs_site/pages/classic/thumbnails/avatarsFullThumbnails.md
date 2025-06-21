
# avatarsFullThumbnails
Gets full avatar thumbnail for multiple users.


## Parameters
| Name        | Type                         | Description                                                 |
| :---------- | :--------------------------- | :---------------------------------------------------------- |
| userIds     | ArrayNonEmptyIfConst<UserId> | The ids of the users to get thumbnails for.                 |
| size?       | AvatarsFullThumbnailsSize    | The avatar thumbnails size (formatted as {width}x{height}). |
| format?     | ThumbnailFormat              | Specifies the format of the thumbnails.                     |
| isCircular? | boolean                      | Dictates if the thumbnails should be masked by a circle.    |



## Example
```ts copy showLineNumbers
const { data: avatarsFullThumbnails } = await ClassicThumbnailsApi.avatarsFullThumbnails({
  userIds: [45348281],
  size: "150x150",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  "45348281": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/b91cd7a2d531a50be786e08c7739c56a/150/150/Avatar/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/avatar
```
  