
# authedUserEconomyMetadata
Gets economy metadata for the authenticated user.



## Example
```ts copy showLineNumbers
const { data: metadata } = await ClassicEconomyApi.authedUserEconomyMetadata(); 
```


## Example Data
```ts copy showLineNumbers
{
  isMarketPlaceEnabled: true,
  isItemsXchangeEnabled: true,
  isGroupSalesAmountTooltipEnabled: true,
  isTransactionsRecordsDownloadEnabled: true,
  transactionRecordsDownloadEarliestYearDiff: 2,
  isCommissionRecordsDownloadEnabled: false,
  isGroupCommissionsPageEnabled: true,
  isPublishingAdvanceRebatePageEnabled: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/metadata
```
  