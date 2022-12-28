---
title: 'Create Podcast PWA as an Open Source Project'
description: 'Thinking of creating a Podcast app as a PWA. I wonder if any designers or developers interested?'
coverImage: '/posts/podcast-blog.jpeg'
tags: 'PWA'
date: '2022-10-15T12:30:07.322Z'
updateDate: '2022-10-15T12:30:07.322Z'
author: Jerry Gagliano
picture: ''
path: '/posts/podcast-pwa'
---

In recent months I been using Google Podcasts and overall it's been great. Most of the time I listen to podcasts are usually on the web platform while working or native mobile app.

There isn't any podcast developed as a PWA, and most other podcast apps are native. So why not create an open source podcast as PWA. Here are some ideas!

## Tech Stack

I came across [Listen Notes](https://www.listennotes.com/) which is a podcast search engine which provide a free api with limited requests. They also provide webhooks [Webhooks](https://www.listennotes.help/article/49-how-to-use-webhooks-of-podcast-api) listening to new triggered events. Never implemented any webhooks endpoint and would like to get my hands dirty.

For frontend framework I would propbably aim for Ionic UI with Angular framework. I don't mind going with React but Angular is usually my go-to frontend framework.

## UI/UX

Google podcasts UI seems outdated. Hasn't been any new updates and not sure if any new designs are in the works. The UX does what it needs to do. I am sure other UX designers out there can be much more creative.

## Pushed Notifications

I'm subscribed to a few podcasts and don't get any notifications when a new episode is released. When I open the app, a dot notification would appear on the subscriber. Here is a good opportunity to use web notifications with Firebase Cloud Messaging.

## History Not Synced

When listening to a podcast on my laptop and then jumping on my phone, the current podcast is not synced and can't continue where I left off. It seems to save history locally on the device. I would implement Firebase Firestore database to save the current eposide or all previous ones that was listened too which then can be syned through user's devices.

## Final Thoughts

I hoping this can be an interesting project to open souce. This should allow developers and designers let their minds be more creative. Who knows maybe it can give Google Podcast a run for their money!

I am not looking to hire by contract. If you contact me asking what is my budget then do not bother. If your passionate about podcasts, feel that you can improve this concept, grow and learn the product then this is for you. 

I will update this blog with a GitHub repo eventually with mockups and will start the launch.