
# updateStandardDataStoreEntry
Updates an entry in a standard datastore.


## Parameters
| Name         | Type                             | Description                                                                           |
| :----------- | :------------------------------- | :------------------------------------------------------------------------------------ |
| universeId   | Identifier                       | The ID of the universe to update an entry in.                                         |
| dataStore    | string                           | the name of the datastore to update an entry in.                                      |
| scope?       | string                           | The optional scope of the dataStore.                                                  |
| entryId      | string                           | The ID (key / name) of the entry.                                                     |
| allowMissing | boolean                          | If set to true, and the data store entry is not found, a data store entry is created. |
| value        | Schema                           | The value (content) of the entry.                                                     |
| users?       | ArrayNonEmptyIfConst<Identifier> | Array metadata containing the IDs of the users this entry is affiliated with.         |
| attributes?  | Record<any, any>                 | Key-Value Pairs metadata containing arbitrary data.                                   |



## Example
```ts copy showLineNumbers
type InventorySchema = { Iron?: number; Gold?: number; Copper?: number; Stone?: number; Wood?: number };
const {
  data,
  response: { body },
} = await StandardDataStoresApi_V2.updateStandardDataStoreEntry<InventorySchema>({
  universeId: 5097539509,
  dataStore: "InventoryStore",
  entryId: "users/453482811",
  value: { Iron: 50, Gold: 26 },
  users: [45348281],
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5097539509/data-stores/InventoryStore/entries/users:453482811",
  createTime: 2024-07-22T19:02:27.811Z,
  revisionId: "08DCAA80D489FD52.0000000003.08DCAA8627CF76E1.01",
  revisionCreateTime: 2024-07-22T19:02:27.811Z,
  state: "ACTIVE",
  etag: "08DCAA80D489FD52.0000000003.08DCAA8627CF76E1.01",
  value: { Iron: 50, Gold: 26 },
  id: "users:453482811",
  users: ["users/45348281"],
  attributes: {},
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/entries/{entryId}
[38;5;216mPATCH[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/scopes/{scope}/entries/{entryId}
```
  