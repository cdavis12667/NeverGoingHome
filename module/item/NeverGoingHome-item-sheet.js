
export class NeverGoingHomeItemSheet extends ItemSheet{
    //Overrides defult ap
    static get defaultOptions(){
        return foundry.utils.mergeObject(super.defaultOptions, {
            //array of css string classes
            classes: ["NeverGoingHome", "sheet","item"],
            template: "systems/NeverGoingHome/templates/item/NeverGoingHome-Item-Sheet.html",
            width: 600,
            height: 600,
        });
}

getData () {
    const context = super.getData();
    context.systemData = context.data.data;
    return context;
}
}