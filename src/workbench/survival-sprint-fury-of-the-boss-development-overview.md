---
title: 'Survival Sprint: Fury of the Boss'
description: 'Survival Sprint: Fury of the Boss is a single-player action-runner game for mobile devices, featuring unique level mechanics, customizable audio and control settings, and licensed sound effects.'
# Date format: 'yyyy-m-dd'
date: '2024-10-15'
img:
  - /images/thumbnails/survival_sprint_fury_of_the_boss.png
  - 2D Game Cover
tags:
  - 2D_GAME
  - INDEPENDENT
published: true
---

### Table of Contents



## Development Overview


Welcome to the **Survival Sprint: Fury of the Boss**, a single-player action-runner game for mobile devices. The game blends fast-paced running levels with intense boss fights, featuring unique mechanics for each stage and customizable settings.


## Demo

To play the game, please use the left mouse button.

{GAME::}/games/survival_sprint_fury_of_the_boss/game.html{::END}


## Showcase

{VIMEO::}1019738864{::END}

---
## 1. Game Flow and Mechanics

The game offers a structured sequence, guiding the player through different stages:


- **Splash screen** → **Main menu** → **Running level** → **Boss fight level** → **Game over** or **Victory screen**.

In the running level, players navigate through obstacles and face various enemies. The boss fight level introduces a different challenge, requiring players to defeat a powerful boss with various attack patterns. If players face a "Game Over," they have the option to revive using in-game coins:

- **Running level revive**: 100 coins
- **Boss fight level revive**: 300 coins


## 2. Architecture and Design

The game's architecture follows a modular approach with multiple singletons and distinct level-based logic, ensuring a clean separation of responsibilities:

- **Singletons**: Several core systems are implemented as global singletons, providing accessible services across different scenes and levels:
    - **GameManager** (*./core/game_manager.gd*): Manages global state, player data, and scene transitions.
    - **CoinSpawner** (*./core/coin_spawner.gd*): Handles spawning and tracking of collectible coins.
    - **Utils** (*./core/utils.gd*): A collection of helper functions and utilities.
    - **SignalBus** (*./core/signal_bus.gd*): Manages in-game events and signals, providing a centralized communication system between game objects.
- **Level-Specific Logic**: Each level type has its own dedicated scripts, allowing for unique gameplay experiences and mechanics:
    - **Running Level** (*./levels/runner*):
        - **level.gd**: Controls overall level behavior and state management.
        - **level_spawner.gd**: Manages dynamic object generation and placement.
        - **player_controller.gd**: Handles player movement, jumping, and collision detection.
    - **Boss Fight Level** (*./levels/boss_fights*):
        - **level.gd**: Orchestrates boss behavior and fight sequences.
        - **level_spawner.gd**: Sets up enemy spawning and boss attacks.
        - **player_controller.gd**: Manages player actions and responses to the boss's attacks.
- **Audio and Control Settings**: The game features adjustable audio settings for different sound volumes, along with multiple joystick configuration options, enhancing the player's control experience.


## 3. Sound Design

Licensed sound effects have been integrated to enrich the gameplay experience:

- **Male Attack Grunt 3.wav** by F.M.Audio – [Freesound](https://freesound.org/s/695380/) – License: Attribution 4.0
- **jump_player.wav** by FullStackSound – [Freesound](https://freesound.org/s/662463/) – License: Attribution 4.0
- **Other sounds** by kenney - [Kenney](https://kenney.nl/assets/category:Audio) –  License: Creative Commons CC0

These sounds bring character actions to life and contribute to the immersive quality of the game.


## 4. Graphic Design

Licensed graphic assets have been integrated to enrich the gameplay experience:

- **Core design** - by kenney - [Kenney](https://kenney.nl/assets/category:2D) - License: Creative Commons CC0

