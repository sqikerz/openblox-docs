
# createStandardDataStoreEntry
Creates an entry in a standard datastore.


## Parameters
| Name        | Type                             | Description                                                                   |
| :---------- | :------------------------------- | :---------------------------------------------------------------------------- |
| universeId  | Identifier                       | The ID of the universe to create the entry in.                                |
| dataStore   | string                           | the name of the datastore to create the entry in.                             |
| scope?      | string                           | The optional scope for the dataStore.                                         |
| entryId     | string                           | The ID (key / name) for the entry.                                            |
| value       | Schema                           | The value (content) for the entry.                                            |
| users?      | ArrayNonEmptyIfConst<Identifier> | Array metadata containing the IDs of the users this entry is affiliated with. |
| attributes? | Record<any, any>                 | Key-Value Pairs metadata containing arbitrary data.                           |



## Example
```ts copy showLineNumbers
type InventorySchema = { Iron?: number; Gold?: number; Copper?: number; Stone?: number; Wood?: number };
const { data: entry } = await StandardDataStoresApi_V2.createStandardDataStoreEntry<InventorySchema>({
  universeId: 5097539509,
  dataStore: "InventoryStore",
  entryId: "users/45348281",
  value: { Iron: 50 },
  users: [45348281],
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5097539509/data-stores/InventoryStore/entries/users:45348281",
  createTime: 2024-07-22T19:06:55.829Z,
  revisionId: "08DCAA81744A406E.0000000001.08DCAA81744A406E.01",
  revisionCreateTime: 2024-07-22T19:06:55.829Z,
  state: "ACTIVE",
  etag: "08DCAA81744A406E.0000000001.08DCAA81744A406E.01",
  value: { Iron: 50 },
  id: "users:45348281",
  users: ["users/45348281"],
  attributes: {},
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/entries
[38;5;117mPOST[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/scopes/{scope}/entries
```
  