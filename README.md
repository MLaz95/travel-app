# Simple Travel Journal

This is a simple travel journal of my summer trip realized with [Vue 3](https://vuejs.org/) in [Vite](https://vitejs.dev/).
The site features an embeded map realized with the [TomTom Web SDK](https://developer.tomtom.com/maps-sdk-web-js/overview/product-information/introduction) that shows the various locations along the trip and a carousel implemented with [SwiperJs](https://swiperjs.com/vue).

Right now the site shows info of a few locations I've visited this summer and allows to write down simple notes that are then stored locally in browser.
In the future the site could be augmented by a true back-end structure to more easily add and record new trips without having to directly modify files.

## How to Install

To run the project on your local machine you'll need to install [node.js](https://nodejs.org/) and you'll need your own [TomTom API Key](https://developer.tomtom.com/platform/documentation/dashboard/api-key-management).

1. create a config.js file inside the project.
2. add the following code to the file replacing the placeholder with your API key
    ```
    let config ={
    TOMTOM_KEY: '<Your TomTom API key>',
    }   
    ```
3. Open a terminal or command line tool in the same folder.
4. `npm i`, this will install all npm modules necessary to run the project in offline mode.
5. `npm run dev` to then start your dev server.


