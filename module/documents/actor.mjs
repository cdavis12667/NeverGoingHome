
export class NevergoinghomeActor extends Actor {
  
  prepareData() {
    
    super.prepareData();
  }
  prepareBaseData() {
    
  }

  prepareDerivedData() {
    //setting actor data
    const actorData = this;
    //setting flags and system for easier time in html
    const systemData = actorData.system;
    
    //running methods
    this._prepareCharacterData(actorData);
    this._prepareNpcData(actorData);
  }
  _prepareCharacterData(actorData) {
    if (actorData.type !== 'character') return;
    
    }
    _prepareNpcData(actorData) {
      if (actorData.type !== 'npc') return;
    
    }

  }

 
 
  
