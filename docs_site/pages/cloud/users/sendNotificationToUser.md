
# sendNotificationToUser
Sends a notification to a user.


## Parameters
| Name             | Type                                                | Description                                           |
| :--------------- | :-------------------------------------------------- | :---------------------------------------------------- |
| userId           | Identifier                                          | The id of the user send the notification to.          |
| universeId       | Identifier                                          | The id of the universe to send the notification from. |
| notificationData | SendNotificationToUser_NotificationData<Parameters> | The data of the notification.                         |



## Example
```ts copy showLineNumbers
const { data: notification } = await UsersApi.sendNotificationToUser<Parameters>({
  universeId: 1685831367,
  userId: 45348281,
  notificationData: {
    messageId: "f70b6a49-a5e5-a048-b1a4-10f9e930614f",
    parameters: { questsLeft: "15", custom: "lorem ipsum dolor sit amet" },
    launchData: "joined from foobar",
    analyticsCategory: "foobar",
  },
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "users/45348281/notifications/05268fb7-3a73-4d07-9972-65e7a6063892",
  id: "05268fb7-3a73-4d07-9972-65e7a6063892",
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/users/{userId}/notifications
```
  