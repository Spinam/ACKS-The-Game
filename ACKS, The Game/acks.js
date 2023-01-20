import { data } from "./module/data/data";
import { documents } from "./module/data/documents";
import { lookup } from "./module/lookup";

class Creature {
    constructor(data={}){
        this.data = new ACKS.data.CreatureData(data);
    }
}

class Character {
    constructor(data={}) {
        this.data = new ACKS.data.CharacterData(data);
    }

    /** 
     * Per rules in "Domains at War: Battles", pg. 40 & "Domains at War: Free Starter Edition", pg. 10
     */
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
        return this.data.repertoire
    }

}

class Condition {
    constructor(data={}){
        this.data = new ACKS.data.ConditionData(data);
    }
}

class Class {
    constructor(data={}){
        this.data = new ACKS.data.ClassData(data);
    }
}

class Proficiency {
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

class Ability {
    constructor(data={}){
        this.data = new ACKS.data.AbilityData(data);
    }
}

class Item {
    constructor(data={}){
        this.data = new ACKS.data.ItemData(data);
    }
}

class Spell {
    constructor(data={}){
        this.data = new ACKS.data.SpellData(data);
    }
}

class Magick {
    constructor(data={}){
        this.data = new ACKS.data.MagickData(data);
    }
}

class Race {
    constructor(data={}){
        this.data = new ACKS.data.RaceData(data);
    }
}

class Party {
    constructor(data={}){
        this.data = new ACKS.data.PartyData(data);
    }
}

class Repertoire {
    constructor(data={}){
        this.data = new ACKS.data.RepertoireData(data);
    }
}

class Inventory {
    constructor(data={}){
        this.data = new ACKS.data.InventoryData(data);
    }
}

class Lineage {
    constructor(data={}){
        this.data = new ACKS.data.LineageData(data);
    }
}

export const ACKS = {
    Creature,
    Character,
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
    
}
