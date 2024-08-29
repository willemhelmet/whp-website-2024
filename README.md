# [WHP Website 2024](https://github.com/willemhelmet/whp-website-2024)
The goal is to create a website that shows my current work, and displays it in a exciting manner.
My current idea is to create a 3D museum that can be explored on mobile, computers, and in VR.

## Tools used
- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - Connect Three to React
- [React Three Drei](https://github.com/pmndrs/drei) - Helper libraries
- [React Three XR](https://github.com/pmndrs/xr) - Hopefully make it VR
- [Leva](https://github.com/pmndrs/leva) - Debug
- [GLTFJSX](https://github.com/pmndrs/gltfjsx) - Compress GLTFs into JSX modules
- [Cannon.js](https://github.com/pmndrs/use-cannon)
- [Framer Motion 3D](https://www.framer.com/motion/three-introduction/)

## Todo
- [x] Get animation working
    - Framer Motion 3D
- [x] Get FPS controls working
- [x] Import old portfolio assets
- [ ] Organize Zustand Store into feature-specific components
  - See [this article](https://tkdodo.eu/blog/working-with-zustand)
- [ ] Combine PortfolioVideo and PortfolioImage components
  - create a prop that allows you to choose either image or video
- [x] Create Loading screen
  - [x] Check current loading time with "Pretty Fast" profile and no caching (see network tab)
- [x] Implement stats
- [ ] Run every texture through tiny png
- [ ] Create Text component
  - [x] import copy
  - [ ] Find fonts
  - [ ] Import fonts
  - [ ] Design backdrop
  - [ ] Adjust text sizes
  - [ ] Finish getting all current portfolio items in the space
- [ ] Fix FPS controller bug == You move slower if the frame rate is lower

## Inspo / Funny ideas
- Willems World
  - https://www.youtube.com/watch?v=I0kKUGTi8hw
- a rotating fan that has a dial where you can adjust the speed of the fan. Attached to each end of the fan is a trail renderer "streamer", as you spin the fan the trail renderers will follow their origins, creating aa cool spiral effect
- bring back triangle people using Sprite Renderer
- Small "hide and seek" type game
  - small objects are hidden around the portfolio, and you need to find and click on them
  -ideas for objects
    - suzanne
    - triangle man
    - labyrinth
- Dekagon assets I want to import into my project:
  - Urban Background Buildings - VOL.1
    - used to add roofs to the skylight windows, will prob also have to build a rudimentary alley
  - Suburbs vol1. - wall decor
    - use the frames to frame photos
  - Suburbs vol.11 - rugs
    - Maybe I can mess with the texture and make my own rugs that have flowers on them?
  - interior decor
    - plants
  - Suburbs VOL.20 - Vending and Service
    - add a telephone! you can pick up the reciever to hear my voice saying something
  - Buildings VOL.1 - Window Decor
    - nuff said
  - Buildings VOL. 3 - attachments
    - vents and such to make things less flat
  - Buildings VOL.5 - Doors
    - I need doors!
  - Buildings VOL.8 - Commercial Doors
    - What can I say!
  - Buildings VOL.9 - Modular Pipes and Gutters
    - Hell yea
  - Lighting VOL.1 - Interior
    - need some lights
  - Lighting VOL.3 - Industrial
    - This feels closer to the mark
  - Suburbs VOL. 19 - Retro Office
    - good office chairs and such
  -
