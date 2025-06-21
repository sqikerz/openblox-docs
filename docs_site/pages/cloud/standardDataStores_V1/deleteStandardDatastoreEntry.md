
# deleteStandardDatastoreEntry
Returns the value and metadata associated with an entry.


## Parameters
| Name          | Type       | Description                                                                |
| :------------ | :--------- | :------------------------------------------------------------------------- |
| universeId    | Identifier | The identifier of the experience with data stores that you want to access. |
| datastoreName | string     | The name of the data store.                                                |
| entryKey      | string     | The key identifying the entry.                                             |
| scope?        | string     | The value is global by default.                                            |



## Example
```ts copy showLineNumbers
const { data: success } = await StandardDataStoresApi_V1.deleteStandardDatastoreEntry({
  universeId: 5097539509,
  datastoreName: "InventoryStore",
  entryKey: "user/45348281",
}); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores/datastore/entries/entry
```
  