---
title: 'Dev Log #3: Boss Fight, Revive Mechanics, and Completing the Game Prototype'
description: 'Final dev log for Survival Sprint: Fury of the Boss. Discover the completion of the game prototype, including the boss fight, revive mechanics, and improvements to game architecture.'
# Date format: 'yyyy-m-dd'
date: '2024-10-15'
categories:
  - DEV_LOGS
published: true
---

![cover](/images/blog/dev-logs/cover-3.jpg)

### Table of Contents

## Intro

Hello everyone! Welcome to the final part of my devlog series for **Survival Sprint: Fury of the Boss**. Today, I’m excited to present the last major updates to the game, focusing on the **Boss Fight**, the introduction of **Revive Mechanics**, and the overall architecture improvements that bring the game together.

Over the past few weeks, I have made significant progress, adding crucial features:
1. **Boss Fight** mechanics.
2. **Mob Helpers** that assist the boss.
3. **Revive Mechanics** for a second chance after defeat.
4. **Final Game Logic**, covering the full game flow and improvements in architecture.


Feel free to try the demo version directly in your browser by visiting the game's project page [here](/workbench/survival-sprint-fury-of-the-boss-development-overview).

## Showcase

{VIMEO::}1019738864{::END}


## 1. Boss Fight

The game now includes a challenging boss fight that occurs after the running level. Once the player completes the running section, they transition to the boss level, where they face off against a powerful enemy. The boss has unique behaviors that test the player's skills.

### Key features:
- **Boss Attacks**: The boss uses various attacks and summons mobs (helpers) to complicate the fight.
- **Health Bar**: The boss's health is displayed on the screen, allowing players to track their progress in the fight.

## 2. Mobs – Boss Helpers

The boss is not alone in the fight; it brings along helpers called **mobs** to assist in attacking the player. The player needs to manage these additional threats while fighting the boss.

### Mob mechanics:
- **Timed Appearances**: Mobs spawn at specific intervals, with increasing frequency as the fight progresses.
- **Mob Behavior**: Some mobs attack from a distance, while others engage the player in close combat.

## 3. Revive Mechanics

A new **Revive Mechanic** has been added to give players a second chance during the game. When the player loses all their health, they can choose to revive by spending in-game currency:

- **Running Level**: Reviving costs **100 coins**.
- **Boss Fight Level**: Reviving costs **300 coins**.

This mechanic provides players with a strategic option to continue their progress without restarting the entire level.

## 4. Final Game Logic and Flow

The complete game flow is now fully realized, from the splash screen to the final showdown with the boss. Each level has its own distinct mechanics, enhancing the variety of gameplay.

### Game Flow:
- **Splash screen** → **Main menu** → **Running level** → **Boss fight level** → **Game over** or **Victory screen**.

## 5. Architecture and Singleton Management

The game architecture has been refined to better handle the distinct gameplay mechanics. Key components include:

- **Singletons**: Multiple singletons manage global functions and data, including:
  - ***./core/game_manager.gd*** – Manages game states, player data, and scene transitions.
  - ***./core/coin_spawner.gd*** – Controls coin spawning logic across levels.
  - ***./core/utils.gd*** – Provides utility functions used throughout the game.
  - ***./core/signal_bus.gd*** – Facilitates communication between various game objects using signals.
- **Level-Specific Logic**: Each level has its own dedicated scripts for unique behaviors:
  - **Running Level**:
    - ***./levels/runner/level.gd***
    - ***./levels/runner/level_spawner.gd***
    - ***./levels/runner/player/player_controller.gd***
  - **Boss Fight Level**: 
    - ***./levels/boss_fights/level.gd***
    - ***./levels/boss_fights/level_spawner.gd***
    - ***./levels/boss_fights/player/player_controller.gd***

## 6. Audio and Control Settings

The game now includes customizable settings for audio and controls:
- **Volume Settings**: Players can adjust the volume levels for music and sound effects.
- **Joystick Options**: Various control options are available, including different joystick configurations for mobile gameplay.

## 7. Licensing

- **Male Attack Grunt 3.wav** by F.M.Audio – [Freesound](https://freesound.org/s/695380/) – License: Attribution 4.0
- **jump_player.wav** by FullStackSound – [Freesound](https://freesound.org/s/662463/) – License: Attribution 4.0
- **Other sounds** by kenney - [Kenney](https://kenney.nl/assets/category:Audio) –  License: Creative Commons CC0
- **Core design** - by kenney - [Kenney](https://kenney.nl/assets/category:2D) - License: Creative Commons CC0

---

This marks the completion of the game prototype. For now, the project is in a fully playable state!
