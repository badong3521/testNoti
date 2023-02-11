import PushNotification, {Importance} from 'react-native-push-notification';

const CHANNEL_NOTIFICATION = 'channel-notification-local';

PushNotification.configure({
  onNotification: notification => {
    console.log('Local Push Notification', notification);
  },

  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: CHANNEL_NOTIFICATION, // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: CHANNEL_NOTIFICATION,
    channelName: 'BA Dong channel',
    autoCancel: true,
    bigText: 'This is a big text , show when expanded',
    subText: 'sub text Notification',
    title: 'title here',
    message: 'Vinh triem',
    playSound: true,
    soundName: 'default',
    importance: 10,
    vibrate: true, // rung
    vibration: 1000, // time vibrate
  });
};
