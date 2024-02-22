//This imports my javascript from elsewhere
import { NeverGoingHomeActor } from "./actor/NeverGoingHome-actor.js";
import { NeverGoingHomeActorSheet } from "./actor/NeverGoingHome-actor-sheet.js";
import { NeverGoingHomeItem } from ".item/NeverGoingHome-item.js"
import { NeverGoingHomeItemSheet } from ".item/NeverGoingHome-item-sheet.js"

//This hook is a callback handler that which is only triggered once
//init is the name the next part is the function that should be trigered
//Basicly this entire hook will fire when foundry starts up
Hooks.once('init', async function (){
// here we unregister the default sheets in foundry and then register our sheets
//These are just methods from the apis actors class
Actors.unregisterSheet("core", ActorSheet);
Actors.registerSheet("nevergoinghome",NeverGoingHomeActorSheet,{makeDefault: true});
Actors.unregisterSheet("core", ItemSheet);
Actors.registerSheet("nevergoinghome",NeverGoingHomeItemSheet,{makeDefault: true});
//This is a singleton instance of the game class to set our actor documents and sheets
game.nevergoinghome = {
    apps: {
        NeverGoingHomeActorSheet,
        NeverGoingHomeItemSheet
    },
    entity: {
        NeverGoingHomeActor,
        NeverGoingHomeItem,
    } 
};
//Here we once agian just set up our classes actor and item are defined classes in the api
CONFIG.Actor.documentClass = NeverGoingHomeActor;
CONFIG.Item.documentClass = NeverGoingHomeItem;

})