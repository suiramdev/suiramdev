---
title: My Internship Experience at Feldrise
description: Are you interested in pursuing a career in full-stack mobile and web development? In this blog post, I share my experience interning at Feldrise, a company that provides full-stack development services to other businesses. I discuss the projects I worked on and the challenges I faced, providing insight into what it's really like to intern in the tech industry. Whether you're a student looking to gain hands-on experience in full-stack development or a professional considering a new opportunity, this post is a must-read. Get an inside look at my internship experience at Feldrise and see what it takes to succeed in the world of full-stack mobile and web development for clients.
publishedAt: 2022-04-08
---

## Context

As part of my school curriculum, I completed an internship at a freelancing company thanks to my connection with Victor. My internship at the company allowed me to gain hands-on experience in the field of freelancing, which had been a career interest of mine for some time.

### Who's Feldrise?

Feldrise is a small digital agency managed by Victor Denis, who started his career as a freelancer. Through his experience overseeing interns and expanding his knowledge, Victor has grown Feldrise into a successful agency serving clients in need of help developing their ideas. Currently, Feldrise offers two audit services, which [I invite you to look at!](https://www.feldrise.com)

## Content

### MyDemenageur

During my internship, I had the opportunity to work on the final stages of a project called MyDemenageur. MyDemenageur is a platform that allows users to find and compare moving services, as well as to offer their own services. The platform has since expanded to include additional services such as cleaning.

![A screenshot of the MyDemenageur homepage.](https://s3.eu-west-3.amazonaws.com/suiram.dev/assets/internship-at-feldrise/mydemenageur_website.png)

MyDemenageur was originally developed using PHP, but the team recently hired developers to migrate the platform to Next.js, a powerful framework that has become increasingly crucial in web development. The move to Next.js has allowed MyDemenageur to take advantage of the latest technologies and provide a seamless user experience.

During my internship, I had the chance to observe and fully understand the inner workings of a small team composed of freelancers and a work-study student. Victor, the CTO and my internship mentor, was responsible for managing and organizing everything to ensure the best possible outcomes for the developers and the mobile app developer.

#### Organization

Unlike other projects I'll discuss later, this project was somewhat disorganized when I arrived. We were under a tight deadline to finish the project for the thousands of users waiting for it, and we had neglected to track issues on a board. Instead, we had been documenting them on Discord, the messaging app we were using. However, with Victor's guidance, we were able to resolve the issues and reorganize ourselves using a GitHub project board with tickets.

![A screenshot of the project board](https://s3.eu-west-3.amazonaws.com/suiram.dev/assets/internship-at-feldrise/mydemenageur_orga.png)

In addition to tracking issues on a GitHub project board, we held daily review calls at the end of each day to discuss the work that had been completed. The front-end of the website was also well-organized, as it had been designed on Figma before development began.

![A screenshot of MyDemenageur template's designed on Figma](https://s3.eu-west-3.amazonaws.com/suiram.dev/assets/internship-at-feldrise/mydemenageur_figma.png)

#### Messaging app

As part of my work on the website, I was responsible for developing the messaging feature. On the old platform, users were able to send messages to negotiate prices, schedule meetings, and more. To implement this feature, we decided to use a WebSocket server and store the data in a MongoDB database. This is a common and reliable structure used by many social media platforms and chat apps.

![Schema illustrating how the messaging app will work](https://s3.eu-west-3.amazonaws.com/suiram.dev/assets/internship-at-feldrise/mydemenageur_schema.png)

Initially, we tried to use the WS package, but we encountered compatibility issues with our desired outcomes. As a result, we switched to Socket.IO, a reliable library for WebSocket services. Socket.IO allows for multiple events and dedicated events, which is useful for targeting specific sockets or rooms with messages rather than sending them to all sockets and sorting through them. However, we found it challenging to implement Socket.IO in React due to its lack of compatibility with React's state management.

## Feldrise's website

Towards the end of my internship, I had the chance to start working on Feldrise's website. Feldrise needed a website to showcase their work and services to potential clients and partners. The website would serve as a promotional tool to attract new business and expand their reach.

### Organization

On this particular project, I was the only developer working on it, although I still received support and guidance from Feldrise. I felt more comfortable working solo, as I was able to develop everything on my own without having to adapt to other people's coding habits. In contrast to MyDemenageur, we used the SCRUM method for this project.

![A schema explaining the SCRUM method](https://s3.eu-west-3.amazonaws.com/suiram.dev/assets/internship-at-feldrise/scrum.png)

### Search Engine Optimization

Before beginning development, I had to decide on the technology to use for the project. In a professional context, it's important to consider factors such as efficiency and search engine optimization (SEO). Google, the most widely used search engine, has a robot that scans pages and assigns a ranking score, called a "referencement score," based on the content of the page. However, the robot only considers the content on the first page it encounters.

There are two main methods for rendering content: client-side rendering and server-side rendering. With client-side rendering, the data is gathered after the initial render, so Google's robot may not consider dynamically imported content. In contrast, with server-side rendering, the server gathers the data and sends a fully populated page to the client on the initial render.

![A small schema explaining client-side and server-side rendering in few drawins](https://s3.eu-west-3.amazonaws.com/suiram.dev/assets/internship-at-feldrise/svcl_rendering.png)

Given these considerations, I chose the NextJS framework for this project. NextJS allows for server-side rendering by default, which can be beneficial for SEO. _This was a different approach than the one taken with MyDemenageur, which resulted in SEO issues._

Client-side rendering and server-side rendering can also be used together, and this is often the case because server-side rendering is not always appropriate. For example, during user interaction, the page is already loaded, but we may need to collect data. In this situation, we would use client-side rendering to gather the data.

There is also a third rendering method called static rendering, which collects data during the build phase of the site rather than at each rendering. This method is typically used for specific types of websites, such as blogs.

As an example, I did not use static rendering for my portfolio website because I wanted to be able to write and publish blog posts on a Amazon S3 server and have them automatically update on my website.

## Conclusion

This internship was a significant milestone in my career development. It allowed me to launch my career as a freelancer and gain valuable skills. Additionally, it solidified my preference for working independently on projects, as I found that even with the guidance of tools like ESLint, working with others can sometimes lead to conflicting coding habits. This experience has made me consider the possibility of taking the next big step in my career and launching my own company in the future. Who knows.
