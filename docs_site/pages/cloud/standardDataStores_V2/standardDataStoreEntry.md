
# standardDataStoreEntry
Gets an entry from a standard datastore.


## Parameters
| Name       | Type       | Description                                    |
| :--------- | :--------- | :--------------------------------------------- |
| universeId | Identifier | The ID of the universe to get the entry in.    |
| dataStore  | string     | the name of the datastore to get the entry in. |
| scope?     | string     | The optional scope of the dataStore.           |
| entryId    | string     | The ID (key / name) of the entry.              |



## Example
```ts copy showLineNumbers
type InventorySchema = { Iron?: number; Gold?: number; Copper?: number; Stone?: number; Wood?: number };
const {
  data,
  response: { body },
} = await StandardDataStoresApi_V2.standardDataStoreEntry<InventorySchema>({
  universeId: 5097539509,
  dataStore: "InventoryStore",
  entryId: "users/45348281",
}); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/entries/{entryId}
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/scopes/{scope}/entries/{entryId}
```
  