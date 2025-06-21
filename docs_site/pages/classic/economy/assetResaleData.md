
# assetResaleData
Gets resale data for a particular asset.


## Parameters
| Name    | Type       | Description                                 |
| :------ | :--------- | :------------------------------------------ |
| assetId | Identifier | The ID of the asset to get resale data for. |



## Example
```ts copy showLineNumbers
const { data: resaleData } = await ClassicEconomyApi.assetResaleData({ assetId: 1365767 }); 
```


## Example Data
```ts copy showLineNumbers
{
  assetStock: null,
  sales: 11412,
  numberRemaining: null,
  recentAveragePrice: 261565,
  originalPrice: null,
  priceDataPoints: [{ value: 271997, date: "2024-07-30T00:00:00Z" }],
  volumeDataPoints: [{ value: 2, date: "2024-07-30T00:00:00Z" }],
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/assets/{assetId}/resale-data
```
  