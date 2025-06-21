
# assetVersions
Lists versions of a specific asset.


## Parameters
| Name    | Type    | Description                                                                                                          |
| :------ | :------ | :------------------------------------------------------------------------------------------------------------------- |
| assetId | AssetId | The ID of the asset to get asset versions for.                                                                       |
| limit?  | number  | The maximum amount of games to return. Valid values range from 1 to 50 (inclusive). Defaults to 8 when not provided. |
| cursor? | string  | the paging cursor for the previous or next page.                                                                     |



## Example
```ts copy showLineNumbers
const { data: versions } = await AssetsApi.assetVersions({ assetId: 18508967120 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "assets/18494719558/versions/2",
    creationContext: { creator: { userId: "45348281" } },
    moderationResult: { moderationState: "Approved" },
  },
  {
    path: "assets/18494719558/versions/1",
    creationContext: { creator: { userId: "45348281" } },
    moderationResult: { moderationState: "Approved" },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/assets/{assetId}/versions
```
  