//Inherit and export
export class NevergoinghomeActorSheet extends ActorSheet {
  //get and overide the default options
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['nevergoinghome', 'sheet', 'actor'],
      template: 'systems/nevergoinghome/templates/actor/actor-sheet.hbs',
      width: 600,
      height: 600,
    });
  }
//get the tempplate from my actor sheet
  get template() {
    return `systems/nevergoinghome/templates/actor/actor-${this.actor.type}-sheet.hbs`;
  }
//get 
  getData() {
    //overiding data with actor data
    const context = super.getData();

    const actorData = context.data;

    context.system = actorData.system;
    context.flags = actorData.flags;
//Depending on the actor type we need to do diffrent things
//the types is definied in json
    if (actorData.type == 'character') {
      this._prepareItems(context);
      
    }

    if (actorData.type == 'npc') {
      this._prepareItems(context);
    }
    return context;
  }

 //Might use this later empty for now
  _prepareItems(context) {
    return context;
  }
}
