//Here we are going to extend the base ActorSheet class from the api
//export keyword is just used so I can import from my main js
export class NeverGoingHomeActorSheet extends ActorSheet{
    //this method overrides and returns a ApplicationOption object
static get defaultOptions(){
return foundry.utils.mergeObject(super.defaultOptions, {
    //array of css string classes
    classes: ["nevergoinghome", "sheet","actor"],
    template: "systems/NeverGoingHome/templates/Actor/NeverGoingHome-Character-Sheet.html",
    width: 600,
    height: 600,
});
}
get template() {
    return `systems/NeverGoingHome/templates/actor/actor-${this.actor.type}-sheet.html`;
  }
//Overiding with the super constructor for formApplication 
getData(){
    const context = super.getData();
    context.systemData = context.data.data
    return context;
}
}