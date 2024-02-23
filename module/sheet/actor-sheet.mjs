//Here we are going to extend the base ActorSheet class from the api
//export keyword is just used so I can import from my main js
export class NeverGoingHomeActorSheet extends ActorSheet{
    //this method overrides and returns a ApplicationOption object
static get defaultOptions(){
return foundry.utils.mergeObject(super.defaultOptions, {
    //array of css string classes
    classes: ['nevergoinghome', 'sheet', 'actor'],
    template: 'systems/nevergoinghome/templates/actor/actor-sheet.html',
    width: 600,
    height: 600,
});
}
get template() {
    return `systems/nevergoinghome/templates/actor/actor-${this.actor.type}-sheet.html`;
  }
//Overiding with the super constructor for formApplication 
getData(){
    const context = super.getData();
    const actorData = context.data;
    context.system = actorData.system;
    context.flags = actorData.flags;
    if (actorData.type == 'player') {
        this._prepareItems(context);
        
      }
  
      if (actorData.type == 'npc') {
        this._prepareItems(context);
      }
      return context;
    }
    _prepareItems(context) {
        const gear = [];
        const features = [];
        context.gear = gear;
        context.features = features;
      }
}
