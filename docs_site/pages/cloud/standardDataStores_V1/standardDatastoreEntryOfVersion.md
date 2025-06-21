
# standardDatastoreEntryOfVersion
Returns the value and metadata of a specific version of an entry.


## Parameters
| Name          | Type       | Description                                                                |
| :------------ | :--------- | :------------------------------------------------------------------------- |
| universeId    | Identifier | The identifier of the experience with data stores that you want to access. |
| datastoreName | string     | The name of the data store.                                                |
| entryKey      | string     | The key identifying the entry.                                             |
| versionId     | string     | The version to inspect.                                                    |
| scope?        | string     | The value is global by default.                                            |



## Example
```ts copy showLineNumbers
type InventorySchema = { Iron?: number; Gold?: number; Copper?: number; Stone?: number; Wood?: number };
const { data: entry } = await StandardDataStoresApi_V1.standardDatastoreEntryOfVersion({
  universeId: 5097539509,
  datastoreName: "LoremIpsum",
  entryKey: "user/45348281",
  versionId: "08DC7742E4BD78AF.0000000001.08DC7742E4BD78AF.01",
}); 
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
[38;5;117mPOST[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores/datastore/entries/entry/versions/version
```
  