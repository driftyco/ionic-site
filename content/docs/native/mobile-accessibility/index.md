---
layout: "fluid/docs_base"
version: "3.10.2"
versionHref: "/docs/native"
path: ""
category: native
id: "mobile-accessibility"
title: "Mobile Accessibility"
header_sub_title: "Class in module "
doc: "Mobile Accessibility"
docType: "class"
---

<h1 class="api-title">Mobile Accessibility</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/mobile-accessibility/index.ts#L1">
  Improve this doc
</a>






<p>This plugin exposes information on the status of various accessibility features of mobile operating systems, including, for example, whether a screen reader is running, invert colors is enabled, and the preferred scaling for text.
It also allows an application to send a string to be spoken by the screen reader, or a command to stop the screen reader from speaking.</p>


<p>Repo:
  <a href="https://github.com/phonegap/phonegap-mobile-accessibility">
    https://github.com/phonegap/phonegap-mobile-accessibility
  </a>
</p>


<h2>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/phonegap/phonegap-mobile-accessibility.git
$ npm install --save @ionic-native/mobile-accessibility
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { MobileAccessibility } from &#39;ionic-native&#39;;


constructor(private mobileAccessibility: MobileAccessibility) { }

...

if(this.mobileAccessibility.isScreenReaderRunningCallback();
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="MobileAccessibilityNotifications" href="#MobileAccessibilityNotifications"></a><code>MobileAccessibilityNotifications</code></h3>




<h3><a class="anchor" name="isScreenReaderRunning" href="#isScreenReaderRunning"></a><code>isScreenReaderRunning()</code></h3>


Makes an asynchronous call to native MobileAccessibility to determine if a screen reader is running.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
</div><h3><a class="anchor" name="isVoiceOverRunningCallback" href="#isVoiceOverRunningCallback"></a><code>isVoiceOverRunningCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


An iOS-specific proxy for the MobileAccessibility.isScreenReaderRunning method


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
</div><h3><a class="anchor" name="isTalkBackRunningCallback" href="#isTalkBackRunningCallback"></a><code>isTalkBackRunningCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Amazon Fire OS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


An Android/Amazon Fire OS-specific proxy for the MobileAccessibility.isScreenReaderRunning method.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
</div><h3><a class="anchor" name="isChromeVoxActive" href="#isChromeVoxActive"></a><code>isChromeVoxActive()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Amazon Fire OS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


On Android, this method returns true if ChromeVox is active and properly initialized with access to the text to speech API in the WebView.
If TalkBack is running but ChromeVox is not active, this method is useful to alert the user of a potential problem.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isBoldTextEnabledCallback" href="#isBoldTextEnabledCallback"></a><code>isBoldTextEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isClosedCaptioningEnabledCallback" href="#isClosedCaptioningEnabledCallback"></a><code>isClosedCaptioningEnabledCallback()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isDarkerSystemColorsEnabledCallback" href="#isDarkerSystemColorsEnabledCallback"></a><code>isDarkerSystemColorsEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isGrayscaleEnabledCallback" href="#isGrayscaleEnabledCallback"></a><code>isGrayscaleEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isGuidedAccessEnabledCallback" href="#isGuidedAccessEnabledCallback"></a><code>isGuidedAccessEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isInvertColorsEnabledCallback" href="#isInvertColorsEnabledCallback"></a><code>isInvertColorsEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isMonoAudioEnabledCallback" href="#isMonoAudioEnabledCallback"></a><code>isMonoAudioEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isReduceMotionEnabledCallback" href="#isReduceMotionEnabledCallback"></a><code>isReduceMotionEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isReduceTransparencyEnabledCallback" href="#isReduceTransparencyEnabledCallback"></a><code>isReduceTransparencyEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isSpeakScreenEnabledCallback" href="#isSpeakScreenEnabledCallback"></a><code>isSpeakScreenEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isSpeakSelectionEnabledCallback" href="#isSpeakSelectionEnabledCallback"></a><code>isSpeakSelectionEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isSwitchControlRunningCallback" href="#isSwitchControlRunningCallback"></a><code>isSwitchControlRunningCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="isTouchExplorationEnabledCallback" href="#isTouchExplorationEnabledCallback"></a><code>isTouchExplorationEnabledCallback()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Amazon Fire OS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="getTextZoomCallback" href="#getTextZoomCallback"></a><code>getTextZoomCallback()</code></h3>


* @returns {Promise<number>} Returns the result



<h3><a class="anchor" name="setTextZoom" href="#setTextZoom"></a><code>setTextZoom(textZoom)</code></h3>





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
      textZoom</td>
    <td>
      <code>nuber</code>
    </td>
    <td>
      <p>A percentage value by which text in the WebView should be scaled.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="updateTextZoom" href="#updateTextZoom"></a><code>updateTextZoom()</code></h3>








<h3><a class="anchor" name="usePreferredTextZoom" href="#usePreferredTextZoom"></a><code>usePreferredTextZoom(value)</code></h3>




A Boolean value which specifies whether to use the preferred text zoom of a default percent value of 100.
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
      value</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Returns the result</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="postNotification" href="#postNotification"></a><code>postNotification(mobileAccessibilityNotification,&nbsp;value)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Posts a notification with a string for the screen reader to announce if it is running.
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
      mobileAccessibilityNotification</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string to be announced by a screen reader.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns the result
</div><h3><a class="anchor" name="speak" href="#speak"></a><code>speak(value,&nbsp;queueMode,&nbsp;properties)</code></h3>




Speaks a given string through the screenreader. On Android, if ChromeVox is active, it will use the specified queueMode and properties.
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
      value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      queueMode</td>
    <td>
      <code>mumber</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      properties</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>




Stops speech.









