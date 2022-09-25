---
title: 'Learn How to Pre-render Pages Using Static Generation with Next.js'
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis'
coverImage: 'https://www.freecodecamp.org/news/content/images/size/w2000/2019/10/react-vs-angular.png'
tags: 'CSS'
date: '2020-03-16T05:35:07.322Z'
updateDate: '2022-03-16T05:35:07.322Z'
author: Jerry Gagliano
picture: ''
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js let's you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.