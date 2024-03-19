// Import document classes.
import { NevergoinghomeActor } from './documents/actor.mjs';
import { NevergoinghomeItem } from './documents/item.mjs';
// Import sheet classes.
import { NevergoinghomeActorSheet } from './sheets/actor-sheet.mjs';
import { NevergoinghomeItemSheet  } from './sheets/item-sheet.mjs';

//Startup event hook
Hooks.once('init', function () {
  //Register to game class
  game.nevergoinghome = {
    NevergoinghomeActor,
    NevergoinghomeItem,
  }; 
  // Register sheet class and get rid of the old ones
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('nevergoinghome', NevergoinghomeActorSheet, {
    makeDefault: true,
    
  });
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('nevergoinghome', NevergoinghomeItemSheet , {
    makeDefault: true,
    
  });
});

