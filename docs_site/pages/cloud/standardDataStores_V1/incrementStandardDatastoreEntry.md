
# incrementStandardDatastoreEntry
Increments the value for an entry by a given amount, or create a new entry with that amount.


## Parameters
| Name             | Type                       | Description                                                                                                              |
| :--------------- | :------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| universeId       | Identifier                 | The identifier of the experience with data stores that you want to access.                                               |
| datastoreName    | string                     | The name of the data store.                                                                                              |
| entryKey         | string                     | The key identifying the entry.                                                                                           |
| incrementBy      | number                     | The amount by which the entry should be incremented, or the starting value if it doesn't exist.                          |
| scope?           | string                     | The value is global by default.                                                                                          |
| entryAttributes? | Record<string, Identifier> | Attributes to be associated with new version of the entry. If not provided, existing attributes are cleared.             |
| entryUserIds?    | Identifier[]               | A comma-separated list of Roblox user IDs that the entry is tagged with. If not provided, existing user IDs are cleared. |



## Example
```ts copy showLineNumbers
const { data: incrementedEntry } = await StandardDataStoresApi_V1.incrementStandardDatastoreEntry({
  universeId: 5097539509,
  datastoreName: "LoremIpsum",
  entryKey: "user/45348281",
  incrementBy: 1,
  entryUserIds: [45348281],
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores/datastore/entries/entry/increment
```
  