
# avatarsHeadshotsThumbnails
Gets avatar headshot thumbnail for multiple users.


## Parameters
| Name        | Type                         | Description                                                 |
| :---------- | :--------------------------- | :---------------------------------------------------------- |
| userIds     | ArrayNonEmptyIfConst<UserId> | The ids of the users to get thumbnails for.                 |
| size?       | AvatarsFullThumbnailsSize    | The avatar thumbnails size (formatted as {width}x{height}). |
| format?     | ThumbnailFormat              | Specifies the format of the thumbnails.                     |
| isCircular? | boolean                      | Dictates if the thumbnails should be masked by a circle.    |



## Example
```ts copy showLineNumbers
const { data: avatarsHeadshotsThumbnails } = await ClassicThumbnailsApi.avatarsHeadshotsThumbnails({
  userIds: [45348281],
  size: "720x720",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  "45348281": {
    state: "Completed",
    imageUrl: "https://t0.rbxcdn.com/697567606503f6484a06e8617307d54f",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/avatar-headshot
```
  