---
title: 'Create Podcast PWA as an Open Source Project'
description: 'Thinking of creating a Podcast app as a PWA. I wonder if any designers or developers interested?'
coverImage: '/posts/podcast-blog.jpeg'
tags: 'Web'
date: '2022-10-10T12:30:07.322Z'
updateDate: '2022-10-10T12:30:07.322Z'
author: Jerry Gagliano
picture: ''
---

In recent months I been using Google Podcasts and overall it's been great. I been finding most of the podcasts I'm interested in and usually listen on the web platform while working or mobile version while I'm on the go.

But their isn't any podcast developed as a PWA and most of the other podcast apps are all native. So why not create an open source podcast as PWA. Here are some ideas!

## Tech Stack

I came across [Listen Notes](https://www.listennotes.com/) which is a podcast search engine and they supply a free api with limited requests. They also provide webhooks [Webhooks](https://www.listennotes.help/article/49-how-to-use-webhooks-of-podcast-api) listening to new triggered events. Never implement any webhooks endpoint and would like to get my hands dirty.

For frontend development I would propbably aim for Ionic and Angular. If see more React.js response, I don't mind going with React. But Angular is usually my go to frontend framework.

## UI/UX

Google podcasts UI seems outdated. Hasn't been any new updates and not sure if any new designs are in the works. The UX does what it needs to do. I am sure other UX designers out there can do something much better.

## Notifications

I'm subscribed to a few podcasts and don't get any notifications when a new episode is released. When I open the app thats when I see a dot notification on the subscriber. Here is a good opportunity to use web notifications with Firebase Cloud Messaging.

## History Not Synced

When listening to a podcast on my laptop and then jumping on my phone, the current podcast is not synced and can't continue where I left off. It seems to save history locally on the device. I would implement Firebase Firestore database to save the current eposide or all previous ones that was listened too which then can be syned through user's devices.

## Final Thoughts

I think this can be an interesting project to open souce. This can allow developers and designers let their minds be more creative and development features. Who knows maybe it can give Google Podcast a run for their money!

If anyone has any ideas what they would want to join the open source project, contact me and we can discuss. I haven't started anything but if I do will update this post.