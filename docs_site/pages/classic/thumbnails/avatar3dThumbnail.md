
# avatar3dThumbnail
Gets 3d avatar thumbnail for multiple users.


## Parameters
| Name   | Type   | Description                                          |
| :----- | :----- | :--------------------------------------------------- |
| userId | UserId | The id of the user to get a 3d avatar thumbnail for. |



## Example
```ts copy showLineNumbers
const { data: avatar3dData } = await ClassicThumbnailsApi.avatar3dThumbnail({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{
  targetId: 45348281,
  state: "Completed",
  imageUrl: "https://t6.rbxcdn.com/7927ecfe11399126171f4cd2939dc511",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/avatar-3d
```
  