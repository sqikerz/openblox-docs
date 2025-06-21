
# deleteOrderedDataStoreEntry
Deletes an entry from an ordered data store.


## Parameters
| Name        | Type        | Description                                               |
| :---------- | :---------- | :-------------------------------------------------------- |
| universeId  | UniverseId  | The ID of the universe to delete the entry from.          |
| dataStoreId | DataStoreId | The ID (name) of the data store to delete the entry from. |
| scope       | Scope       | The scope of the data store entry to delete.              |
| entryId     | EntryId     | the ID (name) of the entry to delete.                     |



## Example
```ts copy showLineNumbers
const { data: success } = await OrderedDataStoresApi_V2.deleteOrderedDataStoreEntry({
  universeId: 5097539509,
  dataStoreId: "PointsStore",
  scope: "global",
  entryId: "45348281",
}); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v2/universes/{universeId}/ordered-data-stores/{dataStoreId}/scopes/{scope}/entries
```
  