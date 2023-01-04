---
title: 'Featured Project - FitVitFitness.com'
description: 'A fitness blog about weight training and tips for a healthy life style from a personal trainer.'
coverImage: '/posts/blog.jpeg'
tags: 'Projects'
date: '2023-01-04T12:30:07.322Z'
updateDate: '2023-01-04T12:30:07.322Z'
author: Jerry Gagliano
picture: ''
path: '/posts/fitvitfitness-portfolio'
---

Website: [FitVit](https://fitvitfitness.com/)

![PWA Install](/posts/fitvit/fitvit-screen.jpg)
*Screen shot of homepage*

A side web project launched in December of 2022 called FitVit which stands for 'Fitness and Vitality'. I developed the site with a personal trainer named Chris Daoud, providing fitness workout programs and tips.

Fitness has been one of my passionate hobbies in recent years. I got excited to develop this project with Chris, who is also passionate about fitness. He's much more experienced, knowledgeable than I am which he persued a trainer certification. If your curious about Chris check him out [here](https://fitvitfitness.com/about/).

## Overview & Goal

The goal of the site is to provide tips and workout programs to help people staying fit especially with busy lifestyles. People tend to lose motivation as they want to avoid living at the gym or paying for a costly membership but still want the healthy lifestyle. Overall, the pandemic has affected people where and how they train as less gym facilities being used. 

This is our opinion and what Chris has been discovering. People want to stay fit by receiving information and easier ways of training which can keep them motivated or even how to begin.

Eventually, in the future, a mobile app will be developed which will allow users to track their workout progress from their own device.

## My Role of the Project

I was the solo developer and created the site from the ground up.

I began designing the desktop & mobile mockups using Figma. Brainstorming up some mockups with color schemes and UI elements. This is how I usually go about getting all the UI layouts organised, so I have a clear vision how to architect the components with pixel perfect styling.

Once that was done, I decided upon on the proper framework for this type of project and began developing the actual components and archtecture of the website. I won't get into all the technical details which will be described below which framework I choose.

## Web Framework Stack

I decided to develop the site using [Next.js](https://nextjs.org/) which is based on React.js. I do have knowlegeable experience and worked with React.js in the past in previous companies. React.js allows you to easily create resuable components through the site for example the header component, footer component and buttons etc. Next.js is a full fledge framework that handles routing and gives you building blocks to create fast web site or app.

My goal was to use Next.js as a static page website with a blog section. Next.js provided an easy way to integrate using Markdown (MDX) as each file is generated as a static page which is not rendered by the server dynamically or using some database to store the article like Wordpress.

Performance was taken into consideration as static web pages are much more performant and important for SEO purposes. Static websites are served from a CDN server which load times are faster and Firebase hosting provides this solution. Other cloud services do provide this solution but Firebase is one all platform that offers other services which I willl needed in the future, for example, Firestore and Authentication.

As mentioned above Next.js framework also takes SEO practices into account, helping you implement SEO technical requirements.

For my repository I use GitHub which includes all my other projects. I setup a GitHub action to automatically deploy updates to the site. The process of creating a new blog, I create a new markdown file. Action automatically builds it and deploys it.

## Conclusion

So here is a quick run down of tech stack and tools I used:

- Figma
- Next.js (React.js)
- CSS (not sass)
- Typescript
- GitHub with CI Deployments using Actions
- Firebase Hosting

We are currently in the progress of creating more blogs and adding more content. Also tweeking SEO technical impprovments and keeping eye on Google Analytics. We are planning newsletter section integration with Mailchimp, storing all future client emails that we want to manage.

Will keep you updated in the future for more improvements and features. Also if you do like this site and find it useful please let us know. Thanks for reading!
