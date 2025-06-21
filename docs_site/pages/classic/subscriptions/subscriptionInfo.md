
# subscriptionInfo
Gets information about a subscription for a specified universe.


## Parameters
| Name           | Type           | Description                        |
| :------------- | :------------- | :--------------------------------- |
| universeId     | UniverseId     | The id of the universe.            |
| subscriptionId | SubscriptionId | The id of the subscription to get. |



## Example
```ts copy showLineNumbers
const { data: subscription } = await ClassicSubscriptionsApi.subscriptionInfo({
  universeId: 5795192361,
  subscriptionId: "3656348821302804581",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  id: "3656348821302804581",
  universeId: 5795192361,
  name: "Testing",
  description: "Lorem ipsum dolor sit amet.",
  imageAssetId: 17175811135,
  periodType: "Monthly",
  productType: "Consumable",
  productStatusType: 1,
  basePriceId: "919c5912-7de8-413c-9756-d4265b3cbd3a",
  initialActivationTimestampMs: 0,
  createdTimestampMs: 1712783803427,
  updatedTimestampMs: 1713318949692,
  basePrice: "$2.99",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/experiences/{universeId}/experience-subscriptions/{subscriptionId}
```
  