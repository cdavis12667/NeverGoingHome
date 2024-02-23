//We are just going to inherit another class
export class NeverGoingHomeActor extends Actor {

    prepareData(){
        super.prepareData();
    }
    prepareBaseData() {
   
    }
    prepareDerivedData() {
        const actorData = this;
        const systemData = actorData.system;
        const flags = actorData.flags.nevergoinghome || {};
        this._prepareCharacterData(actorData);
        this._prepareNpcData(actorData);
      }
       _prepareCharacterData(actorData) {
    if (actorData.type !== 'player') return;
    }
    _prepareNpcData(actorData) {
      if (actorData.type !== 'npc') return;
    
    }
}
  
  


  