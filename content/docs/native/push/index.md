---
layout: "fluid/docs_base"
version: "3.10.2"
versionHref: "/docs/native"
path: ""
category: native
id: "push"
title: "Push"
header_sub_title: "Class in module "
doc: "Push"
docType: "class"
---

<h1 class="api-title">Push</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/push/index.ts#L196">
  Improve this doc
</a>






<p>Register and receive push notifications.</p>
<p>Requires Cordova plugin: <code>phonegap-plugin-push</code>. For more info, please see the <a href="https://github.com/phonegap/phonegap-plugin-push">Push plugin docs</a>.</p>
<p>For TypeScript users, see the <a href="https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md">Push plugin docs about using TypeScript for custom notifications</a>.</p>


<p>Repo:
  <a href="https://github.com/phonegap/phonegap-plugin-push">
    https://github.com/phonegap/phonegap-plugin-push
  </a>
</p>


<h2>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXXXXXX
$ npm install --save @ionic-native/push
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>








<h2>Usage</h2>
<pre><code class="lang-typescript">import { Push, PushObject, PushOptions } from &#39;@ionic-native/push&#39;;

constructor(private push: Push) { }

...


// to check if we have permission
this.push.hasPermission()
  .then((res: any) =&gt; {

    if (res.isEnabled) {
      console.log(&#39;We have permission to send push notifications&#39;);
    } else {
      console.log(&#39;We do not have permission to send push notifications&#39;);
    }

  });

// to initialize push notifications

const options: PushOptions = {
   android: {
       senderID: &#39;12345679&#39;
   },
   ios: {
       alert: &#39;true&#39;,
       badge: true,
       sound: &#39;false&#39;
   },
   windows: {}
};

const pushObject: PushObject = this.push.init(options);

pushObject.on(&#39;notification&#39;).subscribe((notification: any) =&gt; console.log(&#39;Received a notification&#39;, notification));

pushObject.on(&#39;registration&#39;).subscribe((registration: any) =&gt; console.log(&#39;Device registered&#39;, registration));

pushObject.on(&#39;error&#39;).subscribe(error =&gt; console.error(&#39;Error with Push plugin&#39;, error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="init" href="#init"></a><code>init(options)</code></h3>

Init push notifications
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      options</td>
    <td>
      <code>PushOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>PushObject</code> 
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission()</code></h3>


Check whether the push notification permission has been granted.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{isEnabled: boolean}&gt;</code> Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
</div>





<h2><a class="anchor" name="RegistrationEventResponse" href="#RegistrationEventResponse"></a>RegistrationEventResponse</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      registrationId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The registration ID provided by the 3rd party remote push service.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NotificationEventResponse" href="#NotificationEventResponse"></a>NotificationEventResponse</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The text of the push message sent from the 3rd party service.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The optional title of the push message sent from the 3rd party service.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      count
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The number of messages to be displayed in the badge iOS or message count in the notification shade in Android.
For windows, it represents the value in the badge notification which could be a number or a status glyph.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sound
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the sound file to be played upon receipt of the notification.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      image
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path of the image file to be displayed in the notification.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      additionalData
    </td>
    <td>
      <code>NotificationEventAdditionalData &amp; any</code>
    </td>
    <td>
      <p>An optional collection of data sent by the 3rd party push service that does not fit in the above properties.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NotificationEventAdditionalData" href="#NotificationEventAdditionalData"></a>NotificationEventAdditionalData</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      foreground
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Whether the notification was received while the app was in the foreground</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      collapse_key
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      coldstart
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      from
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      notId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="IOSPushOptions" href="#IOSPushOptions"></a>IOSPushOptions</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      senderID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Maps to the project number in the Google Developer Console. Setting this
uses GCM for notifications instead of native.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      gcmSandbox
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>Whether to use prod or sandbox GCM setting.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      alert
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true the device shows an alert on receipt of notification.
<strong>Note</strong>: the value you set this option to the first time you call the init
method will be how the application always acts. Once this is set
programmatically in the init method it can only be changed manually by the
user in Settings&gt;Notifications&gt;App Name. This is normal iOS behaviour.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      badge
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true the device sets the badge number on receipt of notification.
<strong>Note</strong>: the value you set this option to the first time you call the init
method will be how the application always acts. Once this is set
programmatically in the init method it can only be changed manually by the
user in Settings&gt;Notifications&gt;App Name. This is normal iOS behaviour.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      sound
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true the device plays a sound on receipt of notification.
<strong>Note</strong>: the value you set this option to the first time you call the init
method will be how the application always acts. Once this is set
programmatically in the init method it can only be changed manually by the
user in Settings&gt;Notifications&gt;App Name. This is normal iOS behaviour.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clearBadge
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true the badge will be cleared on app startup.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      topics
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>If the array contains one or more strings each string will be used to
subscribe to a GcmPubSub topic.
<strong>Note</strong>: only usable in conjunction with <code>senderID</code>.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      categories
    </td>
    <td>
      <code>CategoryArray</code>
    </td>
    <td>
      <p>The data required in order to enable Action Buttons for iOS.
Action Buttons on iOS - <a href="https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md#action-buttons-1">https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md#action-buttons-1</a></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AndroidPushOptions" href="#AndroidPushOptions"></a>AndroidPushOptions</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      senderID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Maps to the project number in the Google Developer Console.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of a drawable resource to use as the small-icon. The name should
not include the extension.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      iconColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sets the background color of the small icon on Android 5.0 and greater.
<a href="http://developer.android.com/intl/ru/reference/android/graphics/Color.html#parseColor(java.lang.String">Supported Formats</a>)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      sound
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true it plays the sound specified in the push data or the default system
sound.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      vibrate
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true the device vibrates on receipt of notification.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clearBadge
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true the icon badge will be cleared on init and before push messages are processed.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clearNotifications
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true the app clears all pending notifications when it is closed.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      forceShow
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>If true will always show a notification, even when the app is on the
foreground.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      topics
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>If the array contains one or more strings each string will be used to
subscribe to a GcmPubSub topic.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PushOptions" href="#PushOptions"></a>PushOptions</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      ios
    </td>
    <td>
      <code>IOSPushOptions</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      android
    </td>
    <td>
      <code>AndroidPushOptions</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      windows
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





