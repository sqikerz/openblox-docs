
# incrementStandardDatastoreEntry
Increments an entry in a standard datastore.


## Parameters
| Name        | Type                             | Description                                                                   |
| :---------- | :------------------------------- | :---------------------------------------------------------------------------- |
| universeId  | Identifier                       | The ID of the universe to increment an entry in.                              |
| dataStore   | string                           | the name of the datastore to increment an entry in.                           |
| scope?      | string                           | The optional scope of the dataStore.                                          |
| entryId     | string                           | The ID (key / name) of the entry.                                             |
| value       | 🤷                               | The value (content) of the entry.                                             |
| users?      | ArrayNonEmptyIfConst<Identifier> | Array metadata containing the IDs of the users this entry is affiliated with. |
| attributes? | Record<any, any>                 | Key-Value Pairs metadata containing arbitrary data.                           |



## Example
```ts copy showLineNumbers
const { data: entry } = await StandardDataStoresApi_V2.incrementStandardDatastoreEntry({
  universeId: 5097539509,
  dataStore: "Deaths",
  entryId: "users/45348281",
  amount: 3,
  users: [45348281],
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5097539509/data-stores/Deaths/entries/users:45348281",
  createTime: 2024-07-22T19:46:42.453Z,
  revisionId: "08DCAA8702D435AC.0000000003.08DCAA877D776995.01",
  revisionCreateTime: 2024-07-22T19:46:42.453Z,
  state: "ACTIVE",
  etag: "08DCAA8702D435AC.0000000003.08DCAA877D776995.01",
  value: 9,
  id: "users:45348281",
  users: ["users/45348281"],
  attributes: {},
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/entries/{entryId}:increment
[38;5;117mPOST[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/scopes/{scope}/entries/{entryId}:increment
```
  