---
title: Getting Started with Modding in S&box (Garry's Mod 2), A Beginner's Guide - Part 1
description: Learn how to mod S&box (Garry's Mod 2) with this beginner's guide. In this first part, you'll learn how to set up your development environment, understand the game structure, and create a basic gamemode with walking player movements and basic UI. Perfect for those new to modding and looking to customize their gaming experience
publishedAt: 2023-01-13
draft: true
---

# Introduction

Welcome to the world of modding in S&box (Garry's Mod 2)! In this tutorial series, we'll be taking a deep dive into the modding capabilities of this sandbox game and showing you how to create your own custom gamemodes, entities, and other content. Whether you're new to modding or just looking to expand your skills, this guide will provide you with a solid foundation to start building your own unique mods.

> **Warning**
> Please note that as the time of writing this blog post, S&box is still in early access and is subject to change. As the game continues to evolve, the information and examples provided in this tutorial may become outdated.

This first part of the tutorial will focus on **setting up your development environment** and **understanding the basic structure of the game**. By the end of this tutorial, you'll be able to **create a basic gamemode** with walking player movements and basic UI elements.

It's worth mentioning that this tutorial will not dive into C# coding, it's recommended to follow dedicated courses about it before getting into s&box development.

# Setting up your development environment

Before you can start modding in S&box, you'll need to set up your development environment. This includes installing the necessary software and tools to write and test your mods.

The first step is to install Visual Studio or any other IDE (Integrated Development Environment) that supports C# .NET. Visual Studio is a popular choice among developers and offers a wide range of features to help you write and debug your code. You can download the latest version of Visual Studio from the official website. I will personally use Jetbrains Rider.

Additionally, you will need to install .NET Framework and other C# related tools. This will allow you to use C# as the programming language to mod S&box. You can find many tutorials online that can guide you through the installation process. [See here](https://learn.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2022).

With all these tools set up, you're ready to start modding in S&box!

# Understanding the game structure

> It's worth noting that as of the current state, S&box exists as a combination of both a game engine and a sandbox game, and thus the features provided to modders aim to be user-friendly and beneficial.

From my point of view, S&box is heavily based on Unity, the game engine that Facepunch, the developers of S&box, usually uses to code games with. I recommend taking a look at Unity code and documentation if you find yourself struggling to find more information on S&box. As similarities to Unity, we can see from the game's API code that it is based on Entities, which are similar to Unity's GameObjects. This class also derives from BaseNetworkable, which you could compare to MonoBehaviour from Unity, but with networking capabilities. This means that if you're familiar with Unity, you'll find many similarities in the way the game's code is structured and the concepts used. Understanding these similarities can help you navigate the S&box API and write better mods.
For detailed information on the different functions and classes available in the S&box API, refer to the API reference section on the [official website](https://asset.party/api).

## Classes

As previously mentioned, modding work primarily consists of utilizing the classes provided by the API, with methods and properties. Some of these provided methods and properties are handled by the game engine, and it's where we can attach our custom code to. `Entity` will be a common one and it contains methods that are automatically called by the game such as `Spawn`, a method that is called when the object is created in-game, or a common one, `Simulate`, that is called per player's tick. Understanding these methods and their functionality is crucial for creating effective mods, and you can find more information on them in the API reference and [documentation](https://wiki.facepunch.com/sbox/).

![[Pasted image 20230114035758.png]]

For instance, here is a piece of code that illustrates the basic structure of an Entity in S&box:

```csharp
class CustomEntity : Entity
{
	/*
	 * Entity's spawn method is virtual, so we can override it, replacing its
	 * behaviour with our following code:
	 * Here, it will set our Entity's position to {42;42;42} on its Spawn
	 */
	public override Spawn()
	{
		// "Position" is an already defined Entity's class property.
		Position = new Vector3(42, 42, 42);
	}
}
```

In this piece of code, we have a class called `CustomEntity`, which inherits from the base class `Entity`. This class has a single method named `Spawn` which overrides the method of the same name from its parent class. The reason for this is that the `Spawn` method in the `Entity` class is virtual, which means that it can be overridden by any class that inherits from it.

The code within this `Spawn` method sets the `Position` property of the `CustomEntity` to a new `Vector3` value of (42, 42, 42) each time it is spawned in the game. This is done by using the `new Vector3(42, 42, 42)` constructor and assigning it to the `Position` property.

It's worth noting that `Position` is a property already defined in the `Entity` class, in other words, it's available in the parent class, so we can use it. By Overriding the `Spawn` method, we are changing the default behaviour of the `Spawn` method of the parent class, and in this example, we are specifying a new position for the custom entity when it's spawned, nothing else.

## Networking

In S&box, networking is used to communicate and keep the client and server in sync. By default, the client and server do not share information, but with networking, we can share variables and state information between them.

```csharp
using Sandbox;

namespace Networking
{
	public class NetworkingExampleOne : Game
	{
		public int NumClients = 0;

		public override void ClientJoined( Client cl )
		{
			base.ClientJoined( cl );

			NumClients++;
		}

		public override void Simulate( Client cl )
		{
			base.Simulate( cl );

			Log.Info( $"{(Game.IsServer ? "Server:" : "Client:")} {NumClients} clients added." );
		}
	}
}
```

The example provided in the text shows two classes, `NetworkingExampleOne` and `NetworkingExampleTwo`, both of which inherit from the `Game` class and have a public integer field `NumClients` and an overridden `ClientJoined` method. In the first example, the `ClientJoined` method is only called on the server, so the `NumClients` field is only incremented on the server. This results in the clients not receiving the up-to-date `NumClients` field, as it is not networked.

```csharp
using Sandbox;

namespace Networking
{
	public partial class NetworkingExampleTwo : Game
	{
		[Net] // Make the following property synced
		public int NumClients { get; set; }

		public override void ClientJoined( Client cl )
		{
			base.ClientJoined( cl );

			NumClients++;
		}

		public override void Simulate( Client cl )
		{
			base.Simulate( cl );

			Log.Info( $"{(Game.IsServer ? "Server:" : "Client:")} {NumClients} clients added." );
		}
	}
}
```

To fix this, in the second example, the field is turned into a property, and the `Net` attribute is applied to it. This allows the property to be networked, and the clients will receive the up-to-date `NumClients` field.

It's important to note that not all classes are capable of networking, and not all types can be networked. Only the ones deriving from `BaseNetworkable` class are networking capable. Also, properties marked with the `Net` attribute cannot be edited by the client. If you have code that requires updating on the client side then you need [prediction](https://wiki.facepunch.com/sbox/Networked_Types#predicted).

# Creating a basic gamemode

# Advanced topics

# Conclusion
