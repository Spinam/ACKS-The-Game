import { data } from "./module/data/data";
import { documents } from "./module/data/documents";
import { lookup } from "./module/lookup";

const DIE_TYPES = {
    d2: "d2",
    d3: "d3",
    d4: "d4",
    d6: "d6",
    d8: "d8",
    d10: "d10",
    d12: "d12",
    d20: "d20",
    d100: "d100",            
}


class Creature extends Actor {
    constructor(data={}){
        this.data = new ACKS.data.CreatureData(data);
    }
    /* ---------------------------------------- */
    /* Getters                                  */
    /* ---------------------------------------- */
    //#region 
    /** Per rules in "Domains at War: Battles", pg. 40 & "Domains at War: Free Starter Edition", pg. 10 */
    get canBeHeroic() {
        // The character is a PC
        if(this.hasOwnProperty("player")){ return true; }

        // The character is a monster posessing at least 8 HD
        else if(this.isMonster && this.data.data.hd.numberOfDie >= 8){ return true; }


        //The character is an NPC with at least 8 levels of experience
        else if(this.isNPC && this.data.data.level >= 8){ return true; }

        //The character is the henchman of a qualifying hero and has at least 4 levels of experience
        else if(this.isHenchman && this?.employer.canBeHeroic && this.data.data.level >= 8){ return true; }

        else{ return false; }       
    }
    get isMonster() {

    }
    get isCharacter() {

    }
    get isNPC() {
        
    }
    get isHenchman() {

    }
    get hasMortalWound() {

    }
    get isFollower() {

    }
    get title() {

    }
    get level() {

    }
    get attackThrow() {

    }
    get thac0() {

    }
    get savingThrow() {

    }
    get gear() {

    }
    get ac() {

    }
    get availableFunds() {

    }
    get maxEncumbrance() {

    }
    get canMove(){

    }
    get canSpeak(){

    }
    get spell(){
        return this.data.repertoire;
    }
    //#endregion
    /* ---------------------------------------- */
    /* Socket Listeners                         */                                 
    /* ---------------------------------------- */
    //#region 

    //#endregion
    /* ---------------------------------------- */
    /* Handlers                                 */                                 
    /* ---------------------------------------- */
    //#region 

    //#endregion
    /* ---------------------------------------- */
    /* Rolls                                    */                                 
    /* ---------------------------------------- */
    //#region 
    
    //#endregion

}


class Condition extends ClientDocumentMixin(documents.BaseCondition) {
    constructor(data={}){
        this.data = new ACKS.data.ConditionData(data);
    }
}

class Class extends ClientDocumentMixin(documents.BaseClass) {
    constructor(data={}){
        this.data = new ACKS.data.ClassData(data);
    }
}

class Proficiency extends ClientDocumentMixin(documents.BaseProficiency) {
    constructor(data={}){
        this.data = new ACKS.data.ProficiencyData(data);
    }

    _dataWithIncrementedCounter(){
        let 
            new_count = this.data.data.counter + 1,
            data = this.data.data;
        data.counter = new_count;     
        return data;
    }
}

class Ability extends ClientDocumentMixin(documents.BaseAbility) {
    constructor(data={}){
        this.data = new ACKS.data.AbilityData(data);
    }
}

class Item extends ClientDocumentMixin(documents.BaseItem) {
    constructor(data={}){
        this.data = new ACKS.data.ItemData(data);
    }
}

class Spell extends ClientDocumentMixin(documents.BaseSpell) {
    constructor(data={}){
        this.data = new ACKS.data.SpellData(data);
    }
}

class Magick extends ClientDocumentMixin(documents.BaseMagick){
    constructor(data={}){
        this.data = new ACKS.data.MagickData(data);
    }
}

class Race extends ClientDocumentMixin(documents.BaseRace) {
    constructor(data={}){
        this.data = new ACKS.data.RaceData(data);
    }
}

class Party extends ClientDocumentMixin(documents.BaseParty){
    constructor(data={}){
        this.data = new ACKS.data.PartyData(data);
    }
}

class Repertoire extends ClientDocumentMixin(documents.BaseRepertoire){
    constructor(data={}){
        this.data = new ACKS.data.RepertoireData(data);
    }
}

class Inventory extends ClientDocumentMixin(documents.BaseInventory) {
    constructor(data={}){
        this.data = new ACKS.data.InventoryData(data);
    }
}

class Lineage extends ClientDocumentMixin(documents.BaseLineage){
    constructor(data={}){
        this.data = new ACKS.data.LineageData(data);
    }
}

export const ACKS = {
    Creature,
    Condition,
    Class,
    Proficiency,
    Ability,
    Item,
    Spell,
    Magick,
    Race,
    Party,
    Repertoire,
    Inventory,
    Lineage,
    data,
    documents,
    lookup,
    DIE_TYPES,
    
}
