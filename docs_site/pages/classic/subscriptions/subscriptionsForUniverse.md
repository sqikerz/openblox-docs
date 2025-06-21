
# subscriptionsForUniverse
Lists subscriptions for a specified universe.


## Parameters
| Name            | Type       | Description                                          |
| :-------------- | :--------- | :--------------------------------------------------- |
| universeId      | UniverseId | The id of the universe to create a subscription for. |
| resultsPerPage? | number     | The number of results to show per page.              |
| cursor?         | string     | A pagination cursor for the next or previous page.   |



## Example
```ts copy showLineNumbers
undefined 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: "3656348821302804581",
    universeId: 5795192361,
    name: "Testing",
    description: "Lorem ipsum dolor sit amet.",
    imageAssetId: 17095512680,
    periodType: "Monthly",
    productType: "Consumable",
    productStatusType: 1,
    basePriceId: "919c5912-7de8-413c-9756-d4265b3cbd3a",
    initialActivationTimestampMs: 0,
    createdTimestampMs: 1712783803427,
    updatedTimestampMs: 1712783804047,
    basePrice: "$2.99",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/experiences/{universeId}/experience-subscriptions
```
  