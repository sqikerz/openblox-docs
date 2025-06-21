
# subscriptionsPriceTiersForUniverse
Gets all of the availible price tiers that a universe's subscriptions can have.


## Parameters
| Name       | Type       | Description             |
| :--------- | :--------- | :---------------------- |
| universeId | Identifier | The id of the universe. |



## Example
```ts copy showLineNumbers
const { data: tiers } = await ClassicSubscriptionsApi.subscriptionsPriceTiersForUniverse({ universeId: 5795192361 }); 
```


## Example Data
```ts copy showLineNumbers
{
  "919c5912-7de8-413c-9756-d4265b3cbd3a": "$2.99",
  "c0516080-fc44-42a2-bc23-3c6dbfd0772d": "$4.99",
  "75c782ff-9d8b-4cf0-b3d8-64dd0ec4676a": "$7.99",
  "1adf5d0a-eabb-4d5d-a9e7-d9ab28dcb7c7": "$9.99",
  "790ff0ac-ef4b-490e-9b95-89f9249b8f51": "$14.99",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/experiences/{universeId}/experience-subscriptions/prices
```
  