//Inherit and export
export class NevergoinghomeActorSheet extends ActorSheet {
  //get and overide the default options
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['nevergoinghome', 'sheet', 'actor'],
      width: 800,
      height: 800,
    });
  }
//get the tempplate from my actor sheet
//credit to adnd2e for this bit of code
  get template() {
    const path = 'systems/nevergoinghome/templates/actor';
    return `${path}/actor-${this.actor.type}-sheet.hbs`;
  }
//get 
  getData() {
    //overiding data with actor data
    const context = super.getData();

    const actorData = context.data;

    context.system = actorData.system;
//Depending on the actor type we need to do diffrent things
//the types is definied in json
    if (actorData.type == 'character') {
      
      
    }

    if (actorData.type == 'npc') {
     
    }
    return context;
  }
  //The api makes it seems like I need to overide this with the super if I want the sheet to be editable
  activateListeners(html)
  {
    super.activateListeners(html);
  }


}
