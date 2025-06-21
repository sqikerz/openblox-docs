
# groupTransactionHistory
Gets transaction history for a particular group.


## Parameters
| Name            | Type                  | Description                                         |
| :-------------- | :-------------------- | :-------------------------------------------------- |
| groupId         | Identifier            | The ID of the group to get transaction history for. |
| transactionType | Type                  | The transaction type to get.                        |
| limit?          | 10 \| 25 \| 50 \| 100 | The number of results per request.                  |
| cursor?         | string                | The paging cursor for the previous or next page.    |



## Example
```ts copy showLineNumbers
const { data: transactions } = await ClassicEconomyApi.groupTransactionHistory({
  groupId: 5850082,
  transactionType: "Sale",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 14289110391,
    idHash: "L1HiwSO1f1e68Xh1d50b91",
    created: 2022-07-09T21:35:43.013Z,
    isPending: false,
    agent: { id: 473747714, type: "User", name: "LoremIpsum" },
    details: {
      id: 1116381,
      name: "Buy 100 Coins",
      type: "DeveloperProduct",
      place: {
        placeId: 1121711941,
        universeId: 8681831361,
        name: "LoremIpsumGame",
      },
    },
    currency: { amount: 0, type: "Robux" },
    purchaseToken: null,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/group/${groupId}/transactions
```
  