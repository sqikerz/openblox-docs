
# userSubscriptions
Gets a list of subscriptions for a user. NOTE: Can only get subscriptions for the authenticated user.


## Parameters
| Name   | Type       | Description                                  |
| :----- | :--------- | :------------------------------------------- |
| userId | Identifier | The ID of the user to get subscriptions for. |



## Example
```ts copy showLineNumbers
const { data: subscriptions } = await ClassicPremiumFeaturesApi.userSubscriptions({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{
  subscriptionProductModel: {
    premiumFeatureId: 505,
    subscriptionTypeName: "RobloxPremium450",
    robuxStipendAmount: 450,
    isLifetime: false,
    expiration: 2024-08-15T15:04:28.326Z,
    renewal: 2024-08-12T15:04:28.326Z,
    created: 2014-02-14T16:20:38.117Z,
    purchasePlatform: "isIosApp",
    subscriptionName: "Roblox Premium 450",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/subscriptions
```
  