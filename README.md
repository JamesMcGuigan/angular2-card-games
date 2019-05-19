# Angular2 Card Games

Angular2 experimentation and technology demo

## Live Demo
- http://cards.jamesmcguigan.com/

## Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
```
git clone git@github.com:JamesMcGuigan/angular2-card-games.git
npm install; npm prune;
npm run hmr           # run in development mode with HMR:  http://localhost:4200  
npm run build         # create production build in ./dist/
npm run http-server   # node http-server for local production build: http://localhost:8080
npm run deploy:aws    # deploy to Amazon S3 bucket
```

## Technology Features


### Angular HMR
- Commit: [199f0a40bbca95b858560577fc02c8b28620c325](https://github.com/JamesMcGuigan/angular2-card-games/commit/199f0a40bbca95b858560577fc02c8b28620c325)


### NgRX Store

Implementation of NgRX store with actions, selectors, reducers and state typing
- [./src/app/store/reducers.ts]()
- [./src/app/store/player]()
- [./src/app/app.module.ts]()

Angular2 component rendering from NgRX store      
- [./src/app/components/user-chip-stats]()

### One Card Draw

- [./src/app/pages/game-one-card-draw/]()
  - Implementation of non-trival state machine game logic
  - Usage of ES6 modules [node-cards](http://kbjr.github.io/node-cards/) and [CardsJS](http://richardschneider.github.io/cardsJS/)
  - Usage of Angular2 click handlers and FontAwesome

- [./src/app/components/card/]()
  - Functional component to render [node-cards](http://kbjr.github.io/node-cards/) via @Input props   


### HashLocationStrategy 

Permits using a single HTTP URL for hosting on AWS S3
 
[./src/app/app.module.ts]()
```javascript
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  providers:    [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // OR: app-routing.module.ts: RouterModule.forRoot(routes, { useHash: true }),
  ],
})
```

### Unified Angular2 Routing and Menu Component
- [./src/app/app-routing.module.ts]()
- [./src/app/components/menu/menu.component.ts]()


### Deck Of Cards Demo

[./angular.json]() 
```
// ES5 modules via Global Namespace Imports
projects.angular2-card-games.architect.build.scripts = [ 
  'node_modules/deck-of-cards/dist/deck.js' 
]

// Export image assets in node_modules to production ./dist/ build
projects.angular2-card-games.architect.build.assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "./node_modules/cardsJS/cards/",
    "output": "./node_modules/cardsJS/cards/"
  }
],
```

Typescript declaration for Global Namespace Imports

[./src/app/pages/page-deck-of-cards/page-deck-of-cards.component.ts]() 
```javascript 
declare var Deck: any;  // Typescript definition for global namespace import
```


jQuery DOM manipulation

[./src/app/pages/page-deck-of-cards/page-deck-of-cards.component.ts]()
```javascript
this.element = {
  deck: $(this.el.nativeElement).find('.app-page-deck-of-cards--deck'),
};
```


# TODO

## Technology
  - experiment with ngVdom https://github.com/trotyl/ng-vdom
  - implement action creators - https://dev.to/lacolaco/angular-how-to-use-action-creator-introduced-in-ngrx-v7-4-35d4
  - implement OAuth login and player accounts
  - implement AWS lambda + AWS storage
  - Recreate CLI using: https://github.com/Hotell/react-tools-for-better-angular-apps
    
## Game Logic
  - allow a configurable number of players
  - calculate probabilities of winning
  - round-robin bet/raise cycle
  - AI strategies (calling machine, bet above X)
  - implement five-card draw 
  - implement texas-holdem poker game
  - implement starting hands probability table
  - monty-carlo simulation     
