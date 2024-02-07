---
title: Storedge
description: Discover the unparalleled capabilities of Storedge, the ultimate headless e-commerce CMS tailored for modern online retail. Engineered with a GraphQL-first approach, Storedge offers an innovative, decoupled platform that empowers merchants with full control over their digital storefronts. This blog post will guide you through the advantages of adopting a headless CMS for e-commerce, showcasing how GraphQL enhances your store's performance, and exploring the distinct features that elevate Storedge above the competition. With its modular architecture, Storedge ensures effortless customization and seamless integration with existing systems, making it an ideal solution for developers and merchants alike. Learn how Storedge can transform your online business, providing a flexible, scalable, and efficient e-commerce experience. Whether you're looking to migrate to a headless architecture or enhance your store's capabilities, this post will provide you with a comprehensive understanding of Storedge's potential to revolutionize your e-commerce strategy.
image.src: /images/projects/storedge/thumbnail.webp
image.alt: Preview of the Storedge project
to: https://storedge.suiram.dev/
github: https://github.com/suiramdev/storedge-core
releasedAt: 2024
---

In today's digital age, e-commerce has become an increasingly important part of our lives. With the rise of online shopping, businesses are looking for innovative ways to differentiate themselves and provide their customers with the best possible user experience. One such way is by using a headless e-commerce CMS.

## What and why

When I needed to develop an e-commerce site, I searched for a CMS that would be affordable and fit my requirements. Although there are many e-commerce CMS options available, I couldn't find one that matched my needs. [Shopify](https://shopify.com/), for example, is a popular e-commerce CMS, but it's not really headless and its $30/month price point was too high for my client's budget. Meanwhile, [WooCommerce](https://woocommerce.com/) is open source and free to use, but it's designed to work with [Wordpress](https://wordpress.org/) and not as React-friendly as I'd hoped.

Then I discovered [Saleor](https://saleor.io/), a headless e-commerce CMS that is both React-friendly and open source. This was exactly what I was looking for and I decided to use it for my mother's e-commerce site. In fact, my experience with [Saleor](https://saleor.io/) inspired me to build my own headless e-commerce CMS. It's been a great exercise and I'm excited to share the results.

## Choosing the Right Technologies

Before I started coding my e-commerce solution, I wanted to ensure that I was using the best technologies for **maintenance** and **scalability**. To make the right choices, I looked for the market leaders and identified their current weaknesses with the help of [my trusty ChatGPT friend](/blog/chatgpt-ai-future-potential).

As a result, I decided to build my API using a **GraphQL-first** approach. This query language offers great flexibility and efficiency, and is well-suited for my needs. I drew inspiration from **Saleor**, that has adopted this approach. By providing a complete and understandable description of the data in your API, GraphQL eliminates the need for the back-end to interact directly with the front-end developers. To implement my GraphQL API, I will use Apollo Server, Typescript, TypeGraphQL, and Prisma. These tools will enable me to easily switch between API query languages or databases, and communicate with PostgreSQL databases, a standard SQL database that offers great flexibility despite being slower than MySQL. I will also include a built-in backoffice, but the platform will be headless, giving users the freedom to create their own.

![Project's architecture](/images/projects/storedge/architecture.webp)

## Staying Organized

Organizing your tasks is a crucial part of any software development project, especially when it comes to building an e-commerce CMS. With numerous components involved, it's easy to lose track of important tasks or issues, which could delay the project's completion.

Thankfully, I found an effective solution to manage my project, Github's project board feature. This powerful tool provided me with a virtual whiteboard to monitor tasks, issues, and progress in real-time. With this feature, I was able to stay focused, on track, and maintain organization throughout the project. The visual layout of the board helped me track what needed to be done, what was in progress, and what had already been completed.

## First lines of code
