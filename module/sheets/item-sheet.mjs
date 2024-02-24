//Exporting and inherting
export class NevergoinghomeItemSheet extends ItemSheet {
  //Overriding default
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['nevergoinghome', 'sheet', 'item'],
      width: 520,
      height: 480,
    });
  }

  //Getting our template html
  //credit to adnd2e for this bit of code
  get template() {
    const path = 'systems/nevergoinghome/templates/item';
    return `${path}/item-${this.item.type}-sheet.hbs`;
  }
  

  getData() {
    const context = super.getData();
    const itemData = context.data;
    context.system = itemData.system;
    context.flags = itemData.flags;
    return context;
  }

}
