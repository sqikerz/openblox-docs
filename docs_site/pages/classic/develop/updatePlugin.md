
# updatePlugin
Updates a plugin.


## Parameters
| Name             | Type       | Description                                   |
| :--------------- | :--------- | :-------------------------------------------- |
| pluginId         | Identifier | The ID of the plugin to update.               |
| name?            | string     | The new name for the plugin.                  |
| description?     | string     | The new description for the plugin.           |
| commentsEnabled? | boolean    | If comments should be enabled for the plugin. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicDevelopApi.updatePlugin({ pluginId: 18407509477, name: "My New Plugin Name" }); 
```



## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/plugins/{pluginId}
```
  