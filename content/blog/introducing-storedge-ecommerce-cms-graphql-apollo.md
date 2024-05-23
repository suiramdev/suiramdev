---
title: Introducing Storedge, A Headless E-commerce CMS GraphQL-first
description: Storedge is a powerful and flexible headless e-commerce CMS that is GraphQL-first. This decoupled platform is designed to give merchants complete control over their online stores, with a modular architecture that allows for easy customization and integration with other systems. In this blog post, we'll introduce you to Storedge and dive into the benefits of using a headless CMS, the power of GraphQL, and the unique features of Storedge that set it apart from other e-commerce solutions. Whether you're a developer or a merchant, this post will give you a clear understanding of what Storedge can do for your business.
pubDate: 2023-02-16
draft: true
---

In today's digital age, e-commerce has become an increasingly important part of our lives. With the rise of online shopping, businesses are looking for innovative ways to differentiate hemselves and provide their customers with the best possible user experience. One such way is by using a headless e-commerce CMS.\
\
In this blog post, we'll explore my project, a headless e-commerce CMS built with a GraphQL-first API using TypeScript. We'll take a deep dive into the architecture of the project, the technologies used, and the benefits of a headless e-commerce CMS. We'll also cover the challenges I faced during the development process and the solutions I implemented to overcome them.\
\
If you're interested in building a headless e-commerce CMS or are just curious about the technology behind it, then this blog post is for you. Let's get started!

# What and why.

When I needed to develop an e-commerce site for my mother, I searched for a CMS that would be affordable and fit my requirements. Although there are many e-commerce CMS options available, I couldn't find one that matched my needs. Shopify, for example, is a popular e-commerce CMS, but it's not really headless and its $30/month price point was too high for my client's budget. Meanwhile, WooCommerce is open source and free to use, but it's designed to work with Wordpress and not as React-friendly as I'd hoped./
\
Then I discovered Saleor, a headless e-commerce CMS that is both React-friendly and open source. This was exactly what I was looking for and I decided to use it for my mother's e-commerce site. In fact, my experience with Saleor inspired me to build my own headless e-commerce CMS. It's been a great exercise and I'm excited to share the results.

# Choosing the Right Technologies

When developing my e-commerce solution, I wanted to ensure that I was using the best technologies for **maintainability** and **scalability**. To make the right choices, I researched the market leaders and identified their current weaknesses with the help of my trusty ChatGPT friend. As a result, I decided to build my API using a **GraphQL-first** approach. This query language offers great flexibility and efficiency, and is well-suited for my needs. I drew inspiration from **Saleor**, that has adopted this approach. By providing a complete and understandable description of the data in your API, GraphQL eliminates the need for the back-end to interact directly with the front-end developers. To implement my GraphQL API, I will use Apollo Server, Typescript, TypeGraphQL, and Prisma. These tools will enable me to easily switch between API query languages or databases, and communicate with PostgreSQL databases, a standard SQL database that offers great flexibility despite being slower than MySQL. I will also include a built-in backoffice, but the platform will be headless, giving users the freedom to create their own.

![Project's architecture](https://s3.eu-west-3.amazonaws.com/suiram.dev/assets/introducing-Storedge-ecommerce-cms-graphql-apollo/architecture.png)

# Staying Organized

Organizing your tasks is a crucial part of any software development project, especially when it comes to building an e-commerce CMS. With numerous components involved, it's easy to lose track of important tasks or issues, which could delay the project's completion.\
\
Thankfully, I found an effective solution to manage my project, Github's project board feature. This powerful tool provided me with a virtual whiteboard to monitor tasks, issues, and progress in real-time. With this feature, I was able to stay focused, on track, and maintain organization throughout the project. The visual layout of the board helped me track what needed to be done, what was in progress, and what had already been completed.

# First template

Now that everything is planned and set up, I had to design a first template before diving into the code. I highly recommend sketching out your design ideas on paper first. It gave me an idea of what I needed in my database and in my API.

[images here]

I am very happy with the design I have done, not only that the colours look good, but also that all the margins have been thought of. For this project I learned how to separate elements logically using rows and columns helpers, thanks to [DesignWithArash](https://youtu.be/gHdcAH1nhiU)'s video, and out of habit, I used [Dribbble](https://dribbble.com/) for inspiration.

# First lines of code
