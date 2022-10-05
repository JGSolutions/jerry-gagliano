---
title: 'Current State of Progressive Web Apps(PWA)'
description: 'PWAs still alive continue focusing on developing Progressive Web Apps (PWAs)'
coverImage: '/posts/pwa-logo.jpeg'
tags: 'Web'
date: '2022-10-04T12:30:07.322Z'
updateDate: '2022-10-04T12:30:07.322Z'
author: Jerry Gagliano
picture: ''
---

The web is an incredible free platform helping developers solving problems and creating tools for the web. PWAs in particular are driving the web to the next level and catching up to mobile platforms

Actually PWAs are not a new concept. Steve Jobs first introduced the concept of Progressive Web Apps back in 2007. Google eventually refined the name as 'Progressive Web Apps' and enbraced the technology very well but not iOS as I will get into more details below.
## What is a Progressive Web App exactly?
Here's an article from web.dev [What are Progressive Web Apps?](https://web.dev/what-are-pwas/)

> "Progressive Web Apps (PWA) are built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device with a single codebase."

In a nutshell PWAs allows web apps to open up as it's own standalone app giving that native mobile or app experience. To enhance a PWA web app it requires a manifest.json, service worker javascript file and a https secure protocal. By setting up these files you allow the app to be installable without proceeding the Apple store or Google Play. 

The way it works is when a user visits your site the browser will provide a installable notification prompt. If they accept, an icon will be displayed on the homescreen just like a native app. 

PWAs embraces features like

 - WebRTC (Video Chat)
 - Geolocation
 - Push notifications 
 - Access hardware connected via USB, serial port, or bluetooth
 - Interact with data stored on your device, such as contacts and calendar events
 - Reduced size of app

## 1. Any companies using the PWA?

Of course! Here are some of the companies are developing PWAs apps like Instagram, Uber, Starbucks, Twitter, Spotify, Pinterest, Tinder and Amazon. Twitter has seen increase in their activity for example:
> "65% increase in pages per session, 75% more Tweets, and a 20% decrease in bounce rate, all while reducing the size of their app by over 97%"


## 2. What's the Advantage

PWAs are all web based and you can use any currently javascript framework to develop a PWA without  any extra plugins needed. Your app will contain one code base and you may push updates or releases anytime as users will get updates on the fly.

![PWA Install](/posts/install-pwa.png)
*First screen option to install pwa app. Second screen a preview
of the app before installing*


## 3. Is it Supported All Browsers or Devices?

Unfortuntaly not 100%, yet! iOS has compatiablity issues. It does support a manifest file and service worker but some other important features that iOS is lacking:

- Push Notifications
- Installable Prompt
- Loading Current State

Of course Apple is Apple and they always want to be different. Since the Apple
store are the major profit share having less apps released to the store can
hurt them abit.

Every app needs mobile notifications which allows your users to engage with your app. IOS annouced they will be releasing this feature in 2023. [iOS Upcoming Features](https://www.apple.com/ios/ios-16/features/)

The second point, if no installable prompt appears for yours how will they know about installing the app and take advantage of the PWA features?

Third issue which was an issue I came across where user will loose the current state of your app. FOr example they load your app, they open another app or close the phone and then when navigating back to your app, it will log them off or go back to the default view of the app.

There are hackable solutions out there for these particular issues but Google just handles these issues perfectly.


## Final Thoughts

Progressive web apps are not 100% perfect but it's heading in the right ddirection as safari and chrome are supporting the standards. As more developers build PWAs and demand it more

