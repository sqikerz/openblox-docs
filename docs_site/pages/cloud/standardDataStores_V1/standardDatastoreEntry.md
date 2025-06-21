
# standardDatastoreEntry
Returns the value and metadata associated with an entry. Depending on the runtime, `Bun.CryptoHasher` or `node:crypto` is used to calculate the md5 checksum.


## Parameters
| Name          | Type       | Description                                                                |
| :------------ | :--------- | :------------------------------------------------------------------------- |
| universeId    | Identifier | The identifier of the experience with data stores that you want to access. |
| datastoreName | string     | The name of the data store.                                                |
| entryKey      | string     | The key identifying the entry.                                             |
| scope?        | string     | The value is global by default.                                            |



## Example
```ts copy showLineNumbers
type InventorySchema = { Iron?: number; Gold?: number; Copper?: number; Stone?: number; Wood?: number };
const { data: entryInfo } = await StandardDataStoresApi_V1.standardDatastoreEntry<InventorySchema>({
  universeId: 5097539509,
  datastoreName: "InventoryStore",
  entryKey: "user/45348281",
});
if (!entryInfo.checksumsMatch) console.log("checksums do not match, data may be invalid!");
else console.log("checksums match! ->", entryInfo.entry); 
```


## Example Data
```ts copy showLineNumbers
{
  entry: { Gold: 6, Iron: 57 },
  checksumsMatch: true,
  metadata: {
    contentMD5: "hGwoaGwduF4bOhexREYGkA==",
    entryVersion: "08DBB6A47FDE6132.0000000016.08DBB782CEE11766.01",
    entryCreatedTime: 2023-09-16T11:03:03.922Z,
    entryVersionCreatedTime: 2023-09-17T13:34:24.754Z,
    entryAttributes: null,
    entryUserIds: [45348281],
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores/datastore/entries/entry
```
  