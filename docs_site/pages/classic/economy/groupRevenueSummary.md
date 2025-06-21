
# groupRevenueSummary
Gets the revenue summary for a particular group.


## Parameters
| Name      | Type                                 | Description                                         |
| :-------- | :----------------------------------- | :-------------------------------------------------- |
| groupId   | Identifier                           | The ID of the group to get the revenue summary for. |
| timeFrame | "Day" \| "Week" \| "Month" \| "Year" | The timeframe of the summary to get.                |



## Example
```ts copy showLineNumbers
const { data: summary } = await ClassicEconomyApi.groupRevenueSummary({ groupId: 5850082, timeFrame: "Day" }); 
```


## Example Data
```ts copy showLineNumbers
{
  recurringRobuxStipend: 0,
  itemSaleRobux: 0,
  purchasedRobux: 0,
  tradeSystemRobux: 0,
  pendingRobux: 0,
  groupPayoutRobux: 0,
  individualToGroupRobux: 0,
  premiumPayouts: 0,
  groupPremiumPayouts: 0,
  adjustmentRobux: 0,
  immersiveAdPayouts: 0,
  subscriptionPayouts: 0,
  subscriptionClawbacks: 0,
  isShowImmersiveAdPayoutSummaryOnZeroEnabled: false,
  commissionRobux: 0,
  publishingAdvanceRebates: 0,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/revenue/summary/{timeFrame}
```
  