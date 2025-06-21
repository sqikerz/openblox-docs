
# listStandardDataStoreEntryRevisions
Lists revisions for a standard datastores entries.


## Parameters
| Name           | Type                | Description                                                                                                                                                                               |
| :------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId     | UniverseId          | The ID of the universe to get data store entry revisions for.                                                                                                                             |
| dataStore      | DataStore           | The name of the data store to get entry revisions for,                                                                                                                                    |
| scope?         | Scope               | The optional scope for the dataStore.                                                                                                                                                     |
| entryId        | EntryId             | The ID (key / name) for the entry.                                                                                                                                                        |
| createdBefore? | ISODateTime \| Date | Only include revisions made before (inclusive), this filter is combined with createdAfter.                                                                                                |
| createdAfter?  | ISODateTime \| Date | Only include revisions made after (inclusive), this filter is combined with createdBefore.                                                                                                |
| limit?         | number              | The service might return fewer than the maximum number of revisions. If unspecified, at most 10 revisions are returned. The maximum value is 100 values and higher values are set to 100. |
| cursor?        | string              | The paging cursor for the previous or next page.                                                                                                                                          |



## Example
```ts copy showLineNumbers
const { data: entries } = await StandardDataStoresApi_V2.listStandardDataStoreEntryRevisions({
  universeId: 5097539509,
  dataStore: "Deaths",
  entryId: "users/45348281",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "universes/5097539509/data-stores/Deaths/entries/users:45348281@08DCAA8702D435AC.0000000003.08DCAA877D776995.01",
    createTime: 2024-07-22T19:46:42.453Z,
    revisionId: "08DCAA8702D435AC.0000000003.08DCAA877D776995.01",
    revisionCreateTime: 2024-07-22T19:46:42.453Z,
    state: "ACTIVE",
    etag: "08DCAA8702D435AC.0000000003.08DCAA877D776995.01",
    id: "users:45348281@08DCAA8702D435AC.0000000003.08DCAA877D776995.01",
  },
  {
    path: "universes/5097539509/data-stores/Deaths/entries/users:45348281@08DCAA8702D435AC.0000000002.08DCAA87672B76A8.01",
    createTime: 2024-07-22T19:46:42.453Z,
    revisionId: "08DCAA8702D435AC.0000000002.08DCAA87672B76A8.01",
    revisionCreateTime: 2024-07-22T19:46:42.453Z,
    state: "ACTIVE",
    etag: "08DCAA8702D435AC.0000000002.08DCAA87672B76A8.01",
    id: "users:45348281@08DCAA8702D435AC.0000000002.08DCAA87672B76A8.01",
  },
  {
    path: "universes/5097539509/data-stores/Deaths/entries/users:45348281@08DCAA8702D435AC.0000000001.08DCAA8702D435AC.01",
    createTime: 2024-07-22T19:46:42.453Z,
    revisionId: "08DCAA8702D435AC.0000000001.08DCAA8702D435AC.01",
    revisionCreateTime: 2024-07-22T19:46:42.453Z,
    state: "ACTIVE",
    etag: "08DCAA8702D435AC.0000000001.08DCAA8702D435AC.01",
    id: "users:45348281@08DCAA8702D435AC.0000000001.08DCAA8702D435AC.01",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/entries/{entryId}:listRevisions
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/scopes/{scope}/entries/{entryId}:listRevisions
```
  