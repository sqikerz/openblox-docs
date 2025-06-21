
# pluginsInfo
Gets plugin details by IDs.


## Parameters
| Name      | Type                           | Description                                      |
| :-------- | :----------------------------- | :----------------------------------------------- |
| pluginIds | ArrayNonEmptyIfConst<PluginId> | The IDs of the plugins to get information about. |



## Example
```ts copy showLineNumbers
const { data: pluginsInfo } = await ClassicDevelopApi.pluginsInfo({ pluginIds: [18407509477] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "18407509477": {
    created: 2024-07-09T10:44:37.523Z,
    updated: 2024-07-09T10:44:37.523Z,
    name: "PropertyLab [PRE-ALPHA V0.0.0]",
    description: "A modernised plugin explorer for Roblox.",
    commentsEnabled: false,
    versionId: 24376570646,
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/plugins
```
  