
# developerProductsThumbnails
Gets thumbnail for multiple developer products.


## Parameters
| Name                | Type                                     | Description                                              |
| :------------------ | :--------------------------------------- | :------------------------------------------------------- |
| developerProductIds | ArrayNonEmptyIfConst<DeveloperProductId> | The ids of the developer products to get thumbnails for. |
| size?               | DeveloperProductSize                     | The thumbnails size (formatted as {width}x{height}).     |
| format?             | ThumbnailFormat                          | Specifies the format of the thumbnails.                  |
| isCircular?         | boolean                                  | Dictates if the thumbnails should be masked by a circle. |



## Example
```ts copy showLineNumbers
const { data: developerProductsThumbnails } = await ClassicThumbnailsApi.developerProductsThumbnails({
  developerProductIds: [3616425],
}); 
```


## Example Data
```ts copy showLineNumbers
{
  "3616425": {
    state: "Completed",
    imageUrl: "https://tr.rbxcdn.com/3e495c43b44b85cd3dd1afee9df3636b/420/420/Image/Png",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/developer-products/icons
```
  