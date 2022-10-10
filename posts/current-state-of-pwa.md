---
title: 'Current State of Progressive Web Apps'
description: 'Some valid tips how PWA are progressing in the community'
coverImage: '/posts/pwa-logo.jpeg'
tags: 'Web'
date: '2022-10-10T12:30:07.322Z'
updateDate: '2022-10-10T12:30:07.322Z'
author: Jerry Gagliano
picture: ''
---

PWAs and the coummunity are growing strong and it's a perfect time to be part of it.
The web is an incredible free platform helping developers solving problems 
and creating tools for the web. PWAs in particular are driving the web to the next level.

Actually PWAs are not a new concept. Steve Jobs first introduced the concept of Progressive Web Apps back in 2007. Google eventually refined the name as 'Progressive Web Apps' and enbraced the technology.

## What are Progressive Web Apps?
Here's an article from web.dev [What are Progressive Web Apps?](https://web.dev/what-are-pwas/)

> "Progressive Web Apps (PWA) are built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device with a single codebase."

In a nutshell PWAs allows web apps to open as a standalone app providing the native mobile experience. What makes a PWA, is a manifest.json, service worker file with a https secure protocol. By providing these steps you allow the app to be installable without experiencing the Apple or Google Play store. Check screenshots below of an example installing the Twitter app within the Chrome browser.

![PWA Install](/posts/install-pwa.png)
*First screen option to install pwa app. Second screen a preview
of the app before installing*

PWAs also embraces features:

 - WebRTC (Video Chat)
 - Push notifications 
 - Access hardware connected via USB, serial port, or bluetooth
 - Interact with data stored on your device, such as contacts and calendar events

## Companies Using PWA?

Of course! Here are some of the companies released PWAs:

- Instagram
- Uber
- Starbucks
- Twitter
- Spotify
- Pinterest
- Tinder
- Amazon

Twitter has seen increase in their activity for example:
> "65% increase in pages per session, 75% more Tweets, and a 20% decrease in bounce rate, all while reducing the size of their app by over 97%"

## What's the Advantage?

PWAs are all web based and can use any javascript framework to develop a PWA without the need for plugins with having ONE code base to maintain. PWA are smaller in size that take less space on the user's device.

Huge advantage is that PWAs don't need to go through the Apple or Google store as we saw above. PWAs are dependanted on the web, which anyone can find easily on a mobile or desktop device. Revenue or subscription fees for businesses won't be shared with the big boys (Apple Or Google).

## Support on Browsers?

Google, Microsoft and Apple are all supporting PWA apps in their browsers (Chrome, Safari & Edge). PWAs can be installed on a Windows desktop, Android and MacOS or iOS. Unfortuntaly Safari on iOS Apple (iOS) are missing some key features that held back for attaction for development for PWAs. Here are the two main features.

- Push Notifications
- Installable Prompt

My opinion, Apple for not supporting these delayed the community releasing PWA apps on iOS as
notifications are usually a key feature to engage users. If Apple did release web notifications it would have been a different ball game, with more PWAs on iOS devices. Apple's target plan to release this feature are in 2023. [iOS Upcoming Features](https://www.apple.com/ios/ios-16/features/) Let's cross our fingers!

If push notifications are the major draw back then you can always use [Capacitor](https://capacitorjs.com/) that helps you wrap your PWA app and release it on the Apple store.

## How's the Community?

Recently I came across a site called [PWABuilder](https://www.pwabuilder.com/). It's actually backed and funded by Microsoft. Site show various of other companies how PWAs increased traffice and conversion rates.

PWABuilder also helps developers start new PWA apps. They provide dev tools for your VSCode editor and help package your PWA apps for iOS, Windows and Android devices. Not sure what's the difference yet between packaging a PWA with PWABuilder or Capacitor. It's a technology I want to try and write about in the future.

## Final Thoughts

Progressive web apps are definitly heading in the right direction. Communities are growing and the big tech guys are supporting, releasing new features with updates. Better dev tools for editors, chrome dev tools are available making it easier for developers to debug and create apps. 

Will it slow down the native app market? Don't think so, but it will definitly be one of decisions for developers or companies to take in consideration when releasing a new product on the web.

