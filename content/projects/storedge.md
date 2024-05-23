---
title: Storedge
head.title: Storedge - Reinventing E-commerce with Headless CMS
description: Introducing Storedge, a groundbreaking headless e-commerce CMS designed for the modern digital storefront. Leveraging a GraphQL-first approach, Storedge offers unparalleled flexibility and performance for online retailers. This platform not only enhances store efficiency but also provides a modular architecture for easy customization and integration. Ideal for developers and merchants aiming for a scalable and adaptable e-commerce solution, Storedge represents the pinnacle of full-stack development innovation in creating dynamic, user-centric online experiences.
image.src: /images/projects/storedge/thumbnail.webp
image.alt: Preview of Storedge's built-in dashboard
external: https://storedge.suiram.dev/
github: https://github.com/suiramdev/storedge-core
releasedAt: 2024
---

In today's digital age, e-commerce has become an increasingly important part of our lives. With the rise of online shopping, businesses are looking for innovative ways to differentiate themselves and provide their customers with the best possible user experience. One such way is by using a headless e-commerce CMS.

## What and why

When I needed to develop an e-commerce site, I searched for a CMS that would be affordable and fit my requirements. Although there are many e-commerce CMS options available, I couldn't find one that matched my needs. [Shopify](https://shopify.com/), for example, is a popular e-commerce CMS, but it's not really headless and its $30/month price point was too high for my client's budget. Meanwhile, [WooCommerce](https://woocommerce.com/) is open source and free to use, but it's designed to work with [Wordpress](https://wordpress.org/) and not as React-friendly as I'd hoped.

Then I discovered [Saleor](https://saleor.io/), a headless e-commerce CMS that is both React-friendly and open source. This was exactly what I was looking. All that struggle inspired me to build my own headless e-commerce CMS. It's been a great exercise and I'm excited to share the results.

## Choosing the right technologies

Before I started coding my e-commerce solution, I wanted to **ensure that I was using the best technologies for maintenance and scalability**. To make the right choices, I looked for the market leaders and identified their current weaknesses with the help of [my trusty ChatGPT friend](/blog/chatgpt-ai-future-potential).

As a result, I decided to build my API using a GraphQL-first approach. This query language offers great flexibility and efficiency, and is well-suited for my needs. I drew inspiration from Saleor and Shopify, that has adopted this approach. By providing a complete and understandable description of the data in your API, GraphQL eliminates the need for the front-end team to interact with the back-end developers.

To implement my GraphQL API, I decided to use Apollo Server but combined with TypeGraphQL, which I will pre-generate from my database schema using Prisma.

> Prisma is an ORM that helps you structure your database, switch between databases, and communicate with them securely using type-safety.

I will use PostgreSQL, a standard SQL database that offers great flexibility despite being slower than MySQL. I will also include a built-in backoffice, but the platform will be headless, giving users the freedom to create their own.

![Project's architecture](/images/projects/storedge/architecture.webp)

## Staying organized

**Organizing your tasks is a crucial aspect of any software development project**, particularly when building a CMS. With numerous components involved, it's easy to lose track of important tasks or issues, potentially causing delays in project completion.

Fortunately, I discovered an effective solution for managing my project: GitHub's project board. This feature enabled me to stay focused, remain on track, and uphold organization throughout the project. The visual layout of the board facilitated tracking of pending tasks, works in progress, and completed items.

Other alternatives, notably more comprehensive ones like [Jira](https://www.atlassian.com/software/jira) or [GLPI](https://glpi-project.org/), exist, and I highly recommend exploring them, as they are commonly utilized in most companies.
