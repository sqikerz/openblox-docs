
# setStandardDatastoreEntry
Sets the value, metadata and user IDs associated with an entry.


## Parameters
| Name             | Type                       | Description                                                                                                  |
| :--------------- | :------------------------- | :----------------------------------------------------------------------------------------------------------- |
| universeId       | Identifier                 | The identifier of the experience with data stores that you want to access.                                   |
| datastoreName    | string                     | The name of the data store.                                                                                  |
| entryKey         | string                     | The key identifying the entry.                                                                               |
| scope?           | string                     | The value is global by default.                                                                              |
| matchVersion?    | string                     | Provide to update only if the current version matches this.                                                  |
| exclusiveCreate? | boolean                    | Create the entry only if it does not exist.                                                                  |
| entryAttributes? | Record<string, Identifier> | Attributes to be associated with new version of the entry. If not provided, existing attributes are cleared. |
| entryUserIds?    | Identifier[]               | An array of Roblox user IDs tagged with the entry. If not provided, existing user IDs are cleared.           |



## Example
```ts copy showLineNumbers
type InventorySchema = { Iron?: number; Gold?: number; Copper?: number; Stone?: number; Wood?: number };
const { data: response } = await StandardDataStoresApi_V1.setStandardDatastoreEntry<InventorySchema>({
  universeId: 5097539509,
  datastoreName: "InventoryStore",
  entryKey: "user/45348281",
  entryValue: { Gold: 6 },
  entryUserIds: [45348281],
}); 
```


## Example Data
```ts copy showLineNumbers
{
  version: "08DBB6A47FDE6132.000000000E.08DBB780C616DF0C.01",
  deleted: false,
  contentLength: 20,
  createdTime: 2023-09-17T13:19:51.014Z,
  objectCreatedTime: 2023-09-16T11:03:03.922Z,
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores/datastore/entries/entry
```
  