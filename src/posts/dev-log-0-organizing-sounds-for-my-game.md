---
title: 'Dev Log #0: Organizing Sounds for My Game'
description: 'An inside look at how I organize sound effects (SFX) for my game, including tips on file naming and folder structure.'
# Date format: 'yyyy-m-dd'
date: '2024-9-12'
categories:
  - DEV_LOGS
published: true
---

### Table of Contents

## Intro

![cover](/images/blog/dev-log-0/cover.jpg)

Hello, everyone! This is the first post of my dev log series where I will talk about game development. I will share my progress, what I’ve learned, and concepts of my games.

For the start, let’s talk about **sound effects** (SFX) and how they are used in games to make everything feel more alive.

## What are SFX?

SFX are **sound effects** that are used in games to add atmosphere, emotions, or highlight events. These sounds can be footsteps, explosions, weather, UI clicks, and more.

## Main Types of SFX:

Here are some of the most common types of SFX:

1. **Ambient Sounds**:  
   Sounds that create atmosphere. For example, the wind, rain, or city noise.
   - Example: forest wind, ocean waves, city street.
2. **Foley**:  
   Sounds that mimic real-world actions like footsteps, doors closing, or glass breaking.
   - Example: footsteps on grass, door slamming, glass breaking.
3. **UI/UX Sounds**:  
   Sounds for menus and buttons.
   - Example: button click, menu open, error beep.
4. **Combat Sounds**:  
   Sounds during fights like gunshots, sword swings, and explosions.
   - Example: gunshot, grenade explosion, sword swing.
5. **Character/Player Sounds**:  
   Sounds made by characters, such as jumping, taking damage, or breathing.
   - Example: jumping sound, getting hurt, death scream.
6. **Vehicle Sounds**:  
   Sounds of cars, airplanes, and helicopters.
   - Example: car engine, airplane flying, helicopter starting.
7. **Sci-Fi/Fantasy Sounds**:  
   Special sounds for science fiction or fantasy, like lasers or magic spells.
   - Example: laser shot, magic spell, spaceship engines.

## Organizing SFX Files

When working on sound in games, it's important to organize your sound files so you can find them easily. Here’s how you can structure your SFX:

```bash
/sfx/
    /ambient/          # Atmosphere sounds
        forest.wav
        ocean_wave.ogg
        city_street.wav
    /foley/            # Foley sounds
        footsteps_grass.wav
        door_slam.wav
        glass_break.wav
    /ui/               # UI sounds
        button_click.wav
        menu_open.wav
        error_beep.wav
    /combat/           # Combat sounds
        gun_shot.wav
        sword_swing.wav
        explosion_grenade.wav
    /characters/       # Character sounds
        jump.wav
        hurt.wav
        death_scream.ogg
    /vehicles/         # Vehicle sounds
        car_engine.wav
        plane_flyby.wav
        helicopter_start.wav
    /sci-fi/           # Sci-Fi and fantasy sounds
        laser_shot.wav
        portal_open.ogg
        magic_spell_cast.wav
```
