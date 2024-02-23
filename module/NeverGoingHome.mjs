//Imports documents
import { NeverGoingHomeActor } from './documents/actor.mjs';
import { NeverGoingHomeItem } from './documents/item.mjs';
//Import sheets
import { NeverGoingHomeActorSheet } from './sheets/actor-sheet.mjs';
import { NeverGoingHomeItemSheet } from './sheets/item-sheet.mjs';

//This hook is a callback handler that which is only triggered once
//init is the name the next part is the function that should be trigered
//Basicly this entire hook will fire when foundry starts up
Hooks.once('init', function (){

//This is a singleton instance of the game class to set our actor documents and sheets
game.nevergoinghome = {
    NeverGoingHomeActor,
    NeverGoingHomeItem,
};
//Here we once agian just set up our classes actor and item are defined classes in the api
CONFIG.Actor.documentClass = NeverGoingHomeActor;
CONFIG.Item.documentClass = NeverGoingHomeItem;
// here we unregister the default sheets in foundry and then register our sheets
//These are just methods from the apis actors class
Actors.unregisterSheet('core', ActorSheet);
Actors.registerSheet('nevergoinghome', NeverGoingHomeActorSheet, {
    makeDefault: true
});

Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('nevergoinghome', NeverGoingHomeItemSheet, {
    makeDefault: true,
  });
});