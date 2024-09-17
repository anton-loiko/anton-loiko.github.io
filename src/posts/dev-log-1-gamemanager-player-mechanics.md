---
title: 'Dev Log #1: GameManager & Player Mechanics'
description: 'An introduction to GameManager for managing game states and player data, along with player mechanics like jumping and collision handling.'
# Date format: 'yyyy-m-dd'
date: '2024-9-16'
categories:
  - DEV_LOGS
published: true
---

![cover](/images/blog/dev-logs/cover-1.jpg)

### Table of Contents

## Intro

Hello, everyone! Welcome to the first part of my development log. This week, I’ve made great progress in building core systems for my runner game, especially focusing on the **GameManager** and basic player mechanics.

## Showcase

{VIMEO::}1010030244{::END}

## 1. GameManager – The Heart of the Game

The **GameManager** is the brain of the game. It’s a global **Singleton** that controls the game states and keeps track of player data no matter what scene you’re in. It’s persistent across scenes, which means it manages everything from lives, coins, and meters run, to changing between levels.

### Key Features:

- **Scene Switching**: I implemented a `change_scene()` function, making it easy to smoothly switch between different game scenes (like switching from the runner level to the boss fight).
- **Global Player Data Management**: The GameManager keeps track of important things like the player’s lives, how many coins they’ve collected, and how far they’ve run.

### What’s Next:

I will continue to fine-tune the state management to ensure smooth transitions between scenes, such as from the main game to the boss fight or back to the main menu.

## 2. Player Mechanics – Running, Jumping

This week, I also worked on the basic mechanics for the player. The runner mode now allows for jumping, and the player’s progress (distance) is updated in real time.

### Key Mechanics:

- **Jumping**: These are controlled via the `_physics_process()` function, which handles movement during the running phase.
- **Collision Handling**: The player loses health when colliding with enemies or obstacles, and the HUD instantly reflects these changes.

### What’s Next:

I’ll be expanding these mechanics to include more dynamic movements and potentially power-ups that can affect jumping or speed.

---

Stay tuned for the next log
