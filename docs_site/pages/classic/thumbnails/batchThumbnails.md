
# batchThumbnails
Gets thumbnail for multiple things.


## Parameters
| Name     | Type   | Description                       |
| :------- | :----- | :-------------------------------- |
| requests | BReq[] | An array of BatchRequest objects. |



## Example
```ts copy showLineNumbers
const { data: thumbnails } = await ClassicThumbnailsApi.batchThumbnails({
  requests: [
    {
      type: "AvatarHeadShot",
      targetId: 45348281,
      size: "720x720",
      format: "Png",
      isCircular: false,
    },
  ],
}); 
```


## Example Data
```ts copy showLineNumbers
{
  AvatarHeadShot: {
    "45348281": {
      requestId: null,
      errorCode: 0,
      errorMessage: "",
      state: "Completed",
      imageUrl: "https://t0.rbxcdn.com/697567606503f6484a06e8617307d54f",
    },
  },
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/batch
```
  