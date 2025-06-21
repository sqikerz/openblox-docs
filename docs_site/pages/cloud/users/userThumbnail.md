
# userThumbnail
Gets a users avatar.


## Parameters
| Name    | Type                | Description                                  |
| :------ | :------------------ | :------------------------------------------- |
| userId  | UserId              | The id of the user to get the thumbnail for. |
| size?   | UserThumbnailSize   | The size of the thumbnail to be returned.    |
| format? | "PNG" \| "JPEG"     | The format of the thumbnail to be returned.  |
| shape?  | "ROUND" \| "SQUARE" | The shape of the thumbnail to be returned.   |



## Example
```ts copy showLineNumbers
const { data: userInfo } = await UsersApi.userInfo({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "users/45348281/operations/eyJOb25jZSI6ImM5ZGZmN2E3OTQ1ZTQxYTc4M2E3OGY4Nzk2ZTYwOTczIiwiVHlwZSI6IkdlbmVyYXRlVXNlclRodW1ibmFpbFJlcXVlc3QiLCJQYXRoIjoidXNlcnMvNDUzNDgyODEiLCJTaXplIjoiMCIsIkZvcm1hdCI6IjAiLCJTaGFwZSI6IjAifQ==",
  done: true,
  response: {
    "@type": "apis.roblox.com/roblox.open_cloud.cloud.v2.GenerateUserThumbnailResponse",
    imageUri: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-8D297BB79DBA963A48A765F78DFC5D1B-Png/420/420/AvatarHeadshot/Png/isCircular",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/users/{userId}:generateThumbnail
```
  