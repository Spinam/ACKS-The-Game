import { utils } from "../utils";
import { ACKS } from "../../acks";



/* ------------------------------------ */
/* Creature Data                        */
/* ------------------------------------ */
class CreatureData {
    constructor(data = {
        name: "New Creature",

    }){
        this.data = data;
        this.name = this.data.name;
        this.proficiencies = {
            collection: new Map(),
            list: new Array(), 
            /** proficiencies.list is read-only 
             *  @param {*} x */
            set list(x){
                return Error("CharacterData.proficiencies.list is read-only");;
            },   
            /** proficiencies.collection is read-only 
             * @param {*} x */      
            set collection(x){
                return Error("CharacterData.proficiencies.collection is read-only");
            },     
            /** Adds the Proficiency object to the Characters collection and list of names 
             * @param {Proficiency} proficiency The Proficiency object to be added*/
            add(proficiency){
                // Is the parameter a Proficiency object? If not, do nothing.
                    if(!proficiency instanceof ACKS.Proficiency){ return; }
                // Is it name already in the collection? If so, increase proficiency counter.
                    if(this.collection.get(proficiency?.name)){ 
                        let dataWithIncrementedCounter = this.collection.get(proficiency?.name)._dataWithIncrementedCounter(),
                            newProficiencyObject = new Proficiency(dataWithIncrementedCounter);
                            this.changeProficiency(proficiency.name, newProficiencyObject);
                        return; }
                // Otherwise, add the Proficiency to the collection and the name to the list
                    this.collection.set(key=proficiency?.name,value=proficiency);
                    list.push(proficiency.name);
            },
            /** Removes the specified Proficiency from the proficiency collection
             * @param {String} id The id of the Proficiency to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let proficiency of this.collection.values()){
                //If a proficiency with this id exists in the collection, remove it
                    if(proficiency?.id == id){
                        this.collection.remove(proficiency.name);
                    // Remove the name from the list of proficiencies
                        list.splice((list.indexOf(proficiency.name)), 1);
                    }
                }
            },
            /** Removes the specified Proficiency from the proficiency collection
             * @param {String} name The name of the Proficiency to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let proficiency of collection.values()){
                //If a proficiency with this name exists in the collection, remove it
                    if(proficiency?.name == name){
                        this.collection.remove(proficiency.name);
                    // Remove the name from the list of proficiencies
                        list.splice((list.indexOf(proficiency.name)), 1);
                    }
                }     
            }, 
            alreadyKnown(name){
                if(this.collection.get(name)){ return true; }
                else { return false; }
            }               
        };
        this.abilities = {
            collection: new Map(),
            list: new Array(), 
            /** abilities.list is read-only 
             *  @param {*} x */
            set list(x){
                return Error("CreatureData.abilities.list is read-only");;
            },   
            /** abilities.collection is read-only 
             * @param {*} x */      
            set collection(x){
                return Error("CharacterData.abilities.collection is read-only");
            },     
            /** Adds the Ability object to the Characters collection and list of names 
             * @param {Ability} ability The Ability object to be added*/
            add(ability){
                // Is the parameter a Ability object? If not, do nothing.
                    if(!ability instanceof ACKS.Ability){ return; }
                // Is it name already in the collection? If so, increase ability counter.
                    if(this.collection.get(ability?.name)){ 
                        let dataWithIncrementedCounter = this.collection.get(ability?.name)._dataWithIncrementedCounter(),
                            newAbilityObject = new Ability(dataWithIncrementedCounter);
                            this.changeAbility(ability.name, newAbilityObject);
                        return; }
                // Otherwise, add the Ability to the collection and the name to the list
                    this.collection.set(key=ability?.name,value=ability);
                    list.push(ability.name);
            },
            /** Removes the specified Ability from the ability collection
             * @param {String} id The id of the Ability to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let ability of this.collection.values()){
                //If a ability with this id exists in the collection, remove it
                    if(ability?.id == id){
                        this.collection.remove(ability.name);
                    // Remove the name from the list of abilities
                        list.splice((list.indexOf(ability.name)), 1);
                    }
                }
            },
            /** Removes the specified Ability from the ability collection
             * @param {String} name The name of the Ability to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let ability of collection.values()){
                //If a ability with this name exists in the collection, remove it
                    if(ability?.name == name){
                        this.collection.remove(ability.name);
                    // Remove the name from the list of abilities
                        list.splice((list.indexOf(ability.name)), 1);
                    }
                }     
            }, 
            alreadyKnown(name){
                if(this.collection.get(name)){ return true; }
                else { return false; }
            }               
        };
        this.conditions = {
            collection: new Map(),
            list: new Array(), 
            /** conditions.list is read-only 
             *  @param {*} x */
            set list(x){
                return Error("CharacterData.conditions.list is read-only");;
            },   
            /** conditions.collection is read-only 
             * @param {*} x */      
            set collection(x){
                return Error("CharacterData.conditions.collection is read-only");
            },     
            /** Adds the Condition object to the Characters collection and list of names 
             * @param {Condition} condition The Condition object to be added*/
            add(condition){
                // Is the parameter a Condition object? If not, do nothing.
                    if(!(condition instanceof ACKS.Condition)){ return; }
                // Is it name already in the collection? If so, increase condition counter.
                    if(this.collection.get(condition?.name)){ 
                        let dataWithIncrementedCounter = this.collection.get(condition?.name)._dataWithIncrementedCounter(),
                            newConditionObject = new Condition(dataWithIncrementedCounter);
                            this.collection.set(condition.name, newConditionObject);
                        return; }
                // Otherwise, add the Condition to the collection and the name to the list
                    this.collection.set(key=condition?.name,value=condition);
                    list.push(condition.name);
            },
            /** Removes the specified Condition from the condition collection
             * @param {String} id The id of the Condition to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let condition of this.collection.values()){
                //If a condition with this id exists in the collection, remove it
                    if(condition?.id == id){
                        this.collection.remove(condition.name);
                    // Remove the name from the list of conditions
                        list.splice((list.indexOf(condition.name)), 1);
                    }
                }
            },
            /** Removes the specified Condition from the condition collection
             * @param {String} name The name of the Condition to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let condition of collection.values()){
                //If a condition with this name exists in the collection, remove it
                    if(condition?.name == name){
                        this.collection.remove(condition.name);
                    // Remove the name from the list of conditions
                        list.splice((list.indexOf(condition.name)), 1);
                    }
                }     
            }, 
            alreadyKnown(name){
                if(this.collection.get(name)){ return true; }
                else { return false; }
            }               
        };
    }

    static defineSchema() {
        return {

        }
    }
}
/* ------------------------------------ */
/* Character Data                       */
/* ------------------------------------ */
class CharacterData {
    
    constructor(data = {
        name: "New Character"
    }){
        super(data);
    }


    _levelUp(){
        if(this.xp.current < this.xp.next) return;
        let excess_xp = this.xp.current - this.xp.next;
        this.level += 1;
        this.xp.current = excess_xp;
        this.xp.next = this._getExperienceForLevel(this.level + 1);
    }
}
/* ------------------------------------ */
/* Monster Data                         */
/* ------------------------------------ */
class MonsterData {
    
    constructor(data = {
        name: "New Monster"
    }){
        this.data = data;
        this.name = this.data.name;
        this.proficiencies = {
            collection: new Map(),
            list: new Array(), 
            /** proficiencies.list is read-only 
             *  @param {*} x */
            set list(x){
                return Error("CharacterData.proficiencies.list is read-only");;
            },   
            /** proficiencies.collection is read-only 
             * @param {*} x */      
            set collection(x){
                return Error("CharacterData.proficiencies.collection is read-only");
            },     
            /** Adds the Proficiency object to the Characters collection and list of names 
             * @param {Proficiency} proficiency The Proficiency object to be added*/
            add(proficiency){
                // Is the parameter a Proficiency object? If not, do nothing.
                    if(!proficiency instanceof ACKS.Proficiency){ return; }
                // Is it name already in the collection? If so, increase proficiency counter.
                    if(this.collection.get(proficiency?.name)){ 
                        let dataWithIncrementedCounter = this.collection.get(proficiency?.name)._dataWithIncrementedCounter(),
                            newProficiencyObject = new Proficiency(dataWithIncrementedCounter);
                            this.changeProficiency(proficiency.name, newProficiencyObject);
                        return; }
                // Otherwise, add the Proficiency to the collection and the name to the list
                    this.collection.set(key=proficiency?.name,value=proficiency);
                    list.push(proficiency.name);
            },
            /** Removes the specified Proficiency from the proficiency collection
             * @param {String} id The id of the Proficiency to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let proficiency of this.collection.values()){
                //If a proficiency with this id exists in the collection, remove it
                    if(proficiency?.id == id){
                        this.collection.remove(proficiency.name);
                    // Remove the name from the list of proficiencies
                        list.splice((list.indexOf(proficiency.name)), 1);
                    }
                }
            },
            /** Removes the specified Proficiency from the proficiency collection
             * @param {String} name The name of the Proficiency to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let proficiency of collection.values()){
                //If a proficiency with this name exists in the collection, remove it
                    if(proficiency?.name == name){
                        this.collection.remove(proficiency.name);
                    // Remove the name from the list of proficiencies
                        list.splice((list.indexOf(proficiency.name)), 1);
                    }
                }     
            }, 
            alreadyKnown(name){
                if(this.collection.get(name)){ return true; }
                else { return false; }
            }               
        };
        this.abilities = {
            collection: new Map(),
            list: new Array(), 
            /** abilities.list is read-only 
             *  @param {*} x */
            set list(x){
                return Error("CharacterData.abilities.list is read-only");;
            },   
            /** abilities.collection is read-only 
             * @param {*} x */      
            set collection(x){
                return Error("CharacterData.abilities.collection is read-only");
            },     
            /** Adds the Ability object to the Characters collection and list of names 
             * @param {Ability} ability The Ability object to be added*/
            add(ability){
                // Is the parameter a Ability object? If not, do nothing.
                    if(!ability instanceof ACKS.Ability){ return; }
                // Is it name already in the collection? If so, increase ability counter.
                    if(this.collection.get(ability?.name)){ 
                        let dataWithIncrementedCounter = this.collection.get(ability?.name)._dataWithIncrementedCounter(),
                            newAbilityObject = new Ability(dataWithIncrementedCounter);
                            this.changeAbility(ability.name, newAbilityObject);
                        return; }
                // Otherwise, add the Ability to the collection and the name to the list
                    this.collection.set(key=ability?.name,value=ability);
                    list.push(ability.name);
            },
            /** Removes the specified Ability from the ability collection
             * @param {String} id The id of the Ability to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let ability of this.collection.values()){
                //If a ability with this id exists in the collection, remove it
                    if(ability?.id == id){
                        this.collection.remove(ability.name);
                    // Remove the name from the list of abilities
                        list.splice((list.indexOf(ability.name)), 1);
                    }
                }
            },
            /** Removes the specified Ability from the ability collection
             * @param {String} name The name of the Ability to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let ability of collection.values()){
                //If a ability with this name exists in the collection, remove it
                    if(ability?.name == name){
                        this.collection.remove(ability.name);
                    // Remove the name from the list of abilities
                        list.splice((list.indexOf(ability.name)), 1);
                    }
                }     
            }, 
            alreadyKnown(name){
                if(this.collection.get(name)){ return true; }
                else { return false; }
            }               
        };
        this.conditions = {
            collection: new Map(),
            list: new Array(), 
            /** conditions.list is read-only 
             *  @param {*} x */
            set list(x){
                return Error("CharacterData.conditions.list is read-only");;
            },   
            /** conditions.collection is read-only 
             * @param {*} x */      
            set collection(x){
                return Error("CharacterData.conditions.collection is read-only");
            },     
            /** Adds the Condition object to the Characters collection and list of names 
             * @param {Condition} condition The Condition object to be added*/
            add(condition){
                // Is the parameter a Condition object? If not, do nothing.
                    if(!(condition instanceof ACKS.Condition)){ return; }
                // Is it name already in the collection? If so, increase condition counter.
                    if(this.collection.get(condition?.name)){ 
                        let dataWithIncrementedCounter = this.collection.get(condition?.name)._dataWithIncrementedCounter(),
                            newConditionObject = new Condition(dataWithIncrementedCounter);
                            this.collection.set(condition.name, newConditionObject);
                        return; }
                // Otherwise, add the Condition to the collection and the name to the list
                    this.collection.set(key=condition?.name,value=condition);
                    list.push(condition.name);
            },
            /** Removes the specified Condition from the condition collection
             * @param {String} id The id of the Condition to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let condition of this.collection.values()){
                //If a condition with this id exists in the collection, remove it
                    if(condition?.id == id){
                        this.collection.remove(condition.name);
                    // Remove the name from the list of conditions
                        list.splice((list.indexOf(condition.name)), 1);
                    }
                }
            },
            /** Removes the specified Condition from the condition collection
             * @param {String} name The name of the Condition to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let condition of collection.values()){
                //If a condition with this name exists in the collection, remove it
                    if(condition?.name == name){
                        this.collection.remove(condition.name);
                    // Remove the name from the list of conditions
                        list.splice((list.indexOf(condition.name)), 1);
                    }
                }     
            }, 
            alreadyKnown(name){
                if(this.collection.get(name)){ return true; }
                else { return false; }
            }               
        };

    }


    _levelUp(){
        if(this.xp.current < this.xp.next) return;
        let excess_xp = this.xp.current - this.xp.next;
        this.level += 1;
        this.xp.current = excess_xp;
        this.xp.next = this._getExperienceForLevel(this.level + 1);
    }
}
/* ------------------------------------ */
/* Class Data                           */
/* ------------------------------------ */
class ClassData {  
/* ------------------------------------ */
/* Static                               */
/* ------------------------------------ */
    /**
     * #ofskillstraded_leveltraded (eg. one1)
     */
    static get CUSTOM_POWER_TRADE_OFFS(){
        return{
            // #ofskills_level
            one1: {
                one2one12: [{level: 2, skills: 1},{level: 12, skills: 1}],
                one3one11: [{level: 3, skills: 1},{level: 11, skills: 1}],
                one4one10: [{level: 4, skills: 1},{level: 10, skills: 1}],
                one5one9: [{level: 5, skills: 1},{level: 9, skills: 1}],
                one6one7: [{level: 6, skills: 1},{level: 8, skills: 1}],
                two7: [{level: 7, skills: 2},],
            },
            two1: {
                one3one5one7: [{level: 3, skills: 1},{level: 5, skills: 1},{level: 7, skills: 1}],
                one2one4one9: [{level: 2, skills: 1},{level: 4, skills: 1},{level: 9, skills: 1}],
                three5: [{level: 5, skills: 3},],
            },
            one7: {
                one9one13: [{level: 9, skills: 1},{level: 13, skills: 1}],
                one8one14: [{level: 8, skills: 1},{level: 14, skills: 1}],
            },
            one8: {
                one10one13: [{level: 10, skills: 1},{level: 13, skills: 1}],
                one9one14: [{level: 9, skills: 1},{level: 14, skills: 1}],
            },
            one9: {
                one10one14: [{level: 10, skills: 1},{level: 14, skills: 1}],
                one11one13: [{level: 11, skills: 1},{level: 13, skills: 1}],
                two12: [{level: 12, skills: 2},],
            },
            one10: {
                one11one14: [{level: 11, skills: 1},{level: 14, skills: 1}],
                one12one13: [{level: 12, skills: 1},{level: 13, skills: 1}],
            },
            one11: {
                two13: [{level: 13, skills: 2},],
                one12one14: [{level: 12, skills: 1},{level: 14, skills: 1}],
            },
            one12: {
                one13one14: [{level: 13, skills: 1},{level: 14, skills: 1}],
            },

        }
    }
    /**
     * After 8th level, the amount of experience required to advance no longer doubles. Instead, it increases by a flat amount each level. The amount required is based on the saving throw progression of the class
     */
    static get EXPERIENCE_POINTS_AFTER_EIGHTH_LEVEL(){
        return {
            cleric: 100000,
            thief: 100000,
            fighter: 120000,
            mage: 150000
        }
    }
    /**
     * A custom class's saving throw progression determines how many hit points it gains per level after 9th, according to the following mechanic: Cleric or Mage, 1 hp per level; Fighter or Thief, 2 hp per level
     */
    static get HIT_POINTS_AFTER_NINTH_LEVEL(){
        return{
            cleric: 1,
            thief: 2,
            fighter: 2,
            mage: 1,
        }
    }
    /**
     * Every custom class will use one of the four standard Saving Throw progressions of fighter, cleric, thief, or mage. The saving throw progression is critical, because it also determines the character’s magical item options, prime requisite, proficiencies, and hit points after 9th level.
     */
    static get SAVING_THROW_PROGRESSIONS(){
        return {
            fighter: [
                {level: 1, petrification_paralysis: 15, poison_death: 14, blast_breath: 16, staff_wands: 16, spells: 17,},
                {level: 2, petrification_paralysis: 14, poison_death: 13, blast_breath: 15, staff_wands: 15, spells: 16,},
                {level: 3, petrification_paralysis: 14, poison_death: 13, blast_breath: 15, staff_wands: 15, spells: 16,},
                {level: 4, petrification_paralysis: 13, poison_death: 12, blast_breath: 14, staff_wands: 14, spells: 15,},
                {level: 5, petrification_paralysis: 12, poison_death: 11, blast_breath: 13, staff_wands: 13, spells: 14,},
                {level: 6, petrification_paralysis: 12, poison_death: 11, blast_breath: 13, staff_wands: 13, spells: 14,},
                {level: 7, petrification_paralysis: 11, poison_death: 10, blast_breath: 12, staff_wands: 12, spells: 13,},
                {level: 8, petrification_paralysis: 10, poison_death: 9, blast_breath: 11, staff_wands: 11, spells: 12,},
                {level: 9, petrification_paralysis: 10, poison_death: 9, blast_breath: 11, staff_wands: 11, spells: 12,},
                {level: 10, petrification_paralysis: 9, poison_death: 8, blast_breath: 10, staff_wands: 10, spells: 11,},
                {level: 11, petrification_paralysis: 8, poison_death: 7, blast_breath: 9, staff_wands: 9, spells: 10,},
                {level: 12, petrification_paralysis: 8, poison_death: 7, blast_breath: 9, staff_wands: 9, spells: 10,},
                {level: 13, petrification_paralysis: 7, poison_death: 6, blast_breath: 8, staff_wands: 8, spells: 9,},
                {level: 14, petrification_paralysis: 6, poison_death: 5, blast_breath: 7, staff_wands: 7, spells: 8,},
            ],
            cleric: [
                {level: 1, petrification_paralysis: 13, poison_death: 10, blast_breath: 16, staff_wands: 13, spells: 15,},
                {level: 2, petrification_paralysis: 13, poison_death: 10, blast_breath: 16, staff_wands: 13, spells: 15,},
                {level: 3, petrification_paralysis: 12, poison_death: 9, blast_breath: 15, staff_wands: 12, spells: 14,},
                {level: 4, petrification_paralysis: 12, poison_death: 9, blast_breath: 15, staff_wands: 12, spells: 14,},                
                {level: 5, petrification_paralysis: 11, poison_death: 8, blast_breath: 14, staff_wands: 11, spells: 13,},                
                {level: 6, petrification_paralysis: 11, poison_death: 8, blast_breath: 14, staff_wands: 11, spells: 13,},                
                {level: 7, petrification_paralysis: 10, poison_death: 7, blast_breath: 13, staff_wands: 10, spells: 12,},
                {level: 8, petrification_paralysis: 10, poison_death: 7, blast_breath: 13, staff_wands: 10, spells: 12,},
                {level: 9, petrification_paralysis: 9, poison_death: 6, blast_breath: 12, staff_wands: 9, spells: 11,},
                {level: 10, petrification_paralysis: 9, poison_death: 6, blast_breath: 12, staff_wands: 9, spells: 11,},
                {level: 11, petrification_paralysis: 8, poison_death: 5, blast_breath: 11, staff_wands: 8, spells: 10,},
                {level: 12, petrification_paralysis: 8, poison_death: 5, blast_breath: 11, staff_wands: 8, spells: 10,},
                {level: 13, petrification_paralysis: 7, poison_death: 4, blast_breath: 10, staff_wands: 7, spells: 9,},
                {level: 14, petrification_paralysis: 7, poison_death: 4, blast_breath: 10, staff_wands: 7, spells: 9,},                
            ],
            thief: [
                {level: 1, petrification_paralysis: 13, poison_death: 13, blast_breath: 16, staff_wands: 14, spells: 15,},
                {level: 2, petrification_paralysis: 13, poison_death: 13, blast_breath: 16, staff_wands: 14, spells: 15,},
                {level: 3, petrification_paralysis: 12, poison_death: 12, blast_breath: 15, staff_wands: 13, spells: 14,},
                {level: 4, petrification_paralysis: 12, poison_death: 12, blast_breath: 15, staff_wands: 13, spells: 14,},                
                {level: 5, petrification_paralysis: 11, poison_death: 11, blast_breath: 14, staff_wands: 12, spells: 13,},
                {level: 6, petrification_paralysis: 11, poison_death: 11, blast_breath: 14, staff_wands: 12, spells: 13,},                
                {level: 7, petrification_paralysis: 10, poison_death: 10, blast_breath: 13, staff_wands: 11, spells: 12,},
                {level: 8, petrification_paralysis: 10, poison_death: 10, blast_breath: 13, staff_wands: 11, spells: 12,},               
                {level: 9, petrification_paralysis: 9, poison_death: 9, blast_breath: 12, staff_wands: 10, spells: 11,},                
                {level: 10, petrification_paralysis: 9, poison_death: 9, blast_breath: 12, staff_wands: 10, spells: 11,},                
                {level: 11, petrification_paralysis: 8, poison_death: 8, blast_breath: 11, staff_wands: 9, spells: 10,},               
                {level: 12, petrification_paralysis: 8, poison_death: 8, blast_breath: 11, staff_wands: 9, spells: 10,},               
                {level: 13, petrification_paralysis: 7, poison_death: 7, blast_breath: 10, staff_wands: 8, spells: 9,},                
                {level: 14, petrification_paralysis: 7, poison_death: 7, blast_breath: 10, staff_wands: 8, spells: 9,},                
            ],
            mage: [
                {level: 1, petrification_paralysis: 13, poison_death: 13, blast_breath: 15, staff_wands: 11, spells: 12,},
                {level: 2, petrification_paralysis: 13, poison_death: 13, blast_breath: 15, staff_wands: 11, spells: 12,},
                {level: 3, petrification_paralysis: 13, poison_death: 13, blast_breath: 15, staff_wands: 11, spells: 12,},
                {level: 4, petrification_paralysis: 12, poison_death: 12, blast_breath: 14, staff_wands: 10, spells: 11,},
                {level: 5, petrification_paralysis: 12, poison_death: 12, blast_breath: 14, staff_wands: 10, spells: 11,},
                {level: 6, petrification_paralysis: 12, poison_death: 12, blast_breath: 14, staff_wands: 10, spells: 11,},
                {level: 7, petrification_paralysis: 11, poison_death: 11, blast_breath: 13, staff_wands: 9, spells: 10,},
                {level: 8, petrification_paralysis: 11, poison_death: 11, blast_breath: 13, staff_wands: 9, spells: 10,},
                {level: 9, petrification_paralysis: 11, poison_death: 11, blast_breath: 13, staff_wands: 9, spells: 10,},
                {level: 10, petrification_paralysis: 10, poison_death: 10, blast_breath: 12, staff_wands: 8, spells: 9,},
                {level: 11, petrification_paralysis: 10, poison_death: 10, blast_breath: 12, staff_wands: 8, spells: 9,},
                {level: 12, petrification_paralysis: 10, poison_death: 10, blast_breath: 12, staff_wands: 8, spells: 9,},
                {level: 13, petrification_paralysis: 9, poison_death: 9, blast_breath: 11, staff_wands: 7, spells: 8,},
                {level: 14, petrification_paralysis: 9, poison_death: 9, blast_breath: 11, staff_wands: 7, spells: 8,},
            ],
        }
    }
    /**
     * 
     */
    static get ATTACK_THROW_PROGRESSIONS(){
        return {
            fighter: [
                {level: 0, attack_throw: 11},
                {level: 1, attack_throw: 10},
                {level: 2, attack_throw: 9},
                {level: 3, attack_throw: 9},
                {level: 4, attack_throw: 8},
                {level: 5, attack_throw: 7},
                {level: 6, attack_throw: 7},
                {level: 7, attack_throw: 6},
                {level: 8, attack_throw: 5},
                {level: 9, attack_throw: 5},
                {level: 10, attack_throw: 4},
                {level: 11, attack_throw: 3},
                {level: 12, attack_throw: 3},
                {level: 13, attack_throw: 2},
                {level: 14, attack_throw: 1},
                {level: 15, attack_throw: 1},
            ],
            cleric: [
                {level: 0, attack_throw: 11},
                {level: 1, attack_throw: 10},
                {level: 2, attack_throw: 10},
                {level: 3, attack_throw: 9},
                {level: 4, attack_throw: 9},
                {level: 5, attack_throw: 8},
                {level: 6, attack_throw: 8},
                {level: 7, attack_throw: 7},
                {level: 8, attack_throw: 7},
                {level: 9, attack_throw: 6},
                {level: 10, attack_throw: 6},
                {level: 11, attack_throw: 5},
                {level: 12, attack_throw: 5},
                {level: 13, attack_throw: 4},
                {level: 14, attack_throw: 4},
            ],
            thief: [
                {level: 0, attack_throw: 11},
                {level: 1, attack_throw: 10},
                {level: 2, attack_throw: 10},
                {level: 3, attack_throw: 9},
                {level: 4, attack_throw: 9},
                {level: 5, attack_throw: 8},
                {level: 6, attack_throw: 8},
                {level: 7, attack_throw: 7},
                {level: 8, attack_throw: 7},
                {level: 9, attack_throw: 6},
                {level: 10, attack_throw: 6},
                {level: 11, attack_throw: 5},
                {level: 12, attack_throw: 5},
                {level: 13, attack_throw: 4},
                {level: 14, attack_throw: 4},
            ],
            mage: [
                {level: 0, attack_throw: 11},
                {level: 1, attack_throw: 10},
                {level: 2, attack_throw: 10},
                {level: 3, attack_throw: 10},
                {level: 4, attack_throw: 9},
                {level: 5, attack_throw: 9},
                {level: 6, attack_throw: 9},
                {level: 7, attack_throw: 8},
                {level: 8, attack_throw: 8},
                {level: 9, attack_throw: 8},
                {level: 10, attack_throw: 7},
                {level: 11, attack_throw: 7},
                {level: 12, attack_throw: 7},
                {level: 13, attack_throw: 6},
                {level: 14, attack_throw: 6},
                {level: 15, attack_throw: 6},
            ],
        }
    }
/* ------------------------------------ */
/* Constructor                          */
/* ------------------------------------ */
    constructor(data = {
            name: "New Class",
            prime_requisite: [""], 
            requirements: [""], 
            maximum_level: 14,
            levelProgression:[{}], 
            attackProgression: ClassData.ATTACK_THROW_PROGRESSIONS.fighter, 
            savingThrowProgression: ClassData.SAVING_THROW_PROGRESSIONS.fighter,
            spellProgression:[{}],
            buildPoints: {
                hit_die: 0,
                fighting: 0,
                thievery: 0,
                divine: 0,
                arcane: 0,   
            },
            fightingValueTradeOffs: {
                reduce_armorSelection: {
                    unrestricted_to_broad: false,
                    broad_to_narrow: false,
                    narrow_to_restricted: false,
                    restricted_to_none: false,
                },
                reduce_weaponSelection: {
                    unrestricted_to_broad: false,
                    broad_to_narrow: false,
                    narrow_to_restricted: false,
                },
                eliminate_oneFightingStyle: false,
                eliminate_fighterDamageBonus: {
                    missile: false,
                    melee: false,
                }
            },
            thieveryValueTradeOffs: {
                trade_openLocks: false,
                trade_findTraps: false,
                trade_removeTraps: false,
                trade_pickPockets: false,
                trade_moveSilently: false,
                trade_climbWalls: false,
                trade_hideInShadows: false,
                trade_hearNoise: false,
                trade_backstab: false,
                trade_readLanguages: false,
                trade_readCastMagicScrolls: false,
            },
            divineValueTradeOffs: {
                trade_turnUndead: false,
            },
            spellList: [""]
    }) {
        this.data = data;
        this.name = this.data.name;
        this.prime_requisite = this.data.prime_requisite;
        this.requirements = this.data.requirements;
        this.maximum_level = this.data.maximum_level;
        this.levelProgression = new Map();
        this.attackProgression = new Map();
        this.savingThrowProgression = new Map();
        this.spellProgression = new Map();
        this.spellList = new Map();
        this._init();
    }
/* ------------------------------------ */
/* Getters                              */
/* ------------------------------------ */
    /**
     *  @returns {object} {die_type, number_of_dice, roll_term, modifier}
     */
    get hd(){
        return utils.extractHitDiceInfo(this._getHitDiceForLevel(this.level))
    }    
    /**
     * Tallies the number of custom powers derived from trade-offs
     */
    get number_of_custom_powers_after_tradeoffs(){
        let total = 0;
    // Fighting Value Trade-Offs
        Object.values(this.data.fightingValueTradeOffs.reduce_armorSelection).forEach(trade_off => {if(trade_off)total = total + 1;})
        Object.values(this.data.fightingValueTradeOffs.reduce_weaponSelection).forEach(trade_off => {if(trade_off)total = total + 1;})
        if(this.data.fightingValueTradeOffs.reduce_weaponSelection.broad_to_narrow){ total = total + 1;}
        if(this.data.fightingValueTradeOffs.eliminate_oneFightingStyle){ total = total + 1; }
        Object.values(this.data.fightingValueTradeOffs.eliminate_fighterDamageBonus).forEach(trade_off => {if(trade_off)total = total + 1;})
    // Thievery Value Trade-Offs
        Object.values(this.data.thieveryValueTradeOffs).forEach(trade_off => {{if(trade_off)total = total + 1;}})
    // Divine Value Trade-Offs
        if(this.data.divineValueTradeOffs.trade_turnUndead){ total = total + this.data.buildPoints.divine; }
        
        return total;
    }
    get isSpellcaster(){
        return this.spellProgression.size > 0;
    }   
/* ------------------------------------ */
/* Initialization                       */
/* ------------------------------------ */
    _init(){
        this.#loadLevelProgression();
        this.#loadAttackProgression();
        this.#loadSavingThrowProgression();
        this.#loadSpellProgression();
        this.#loadSpellList();        
    }
    #loadLevelProgression(){
        return this.data.levelProgression.forEach(e => {
            this.levelProgression.set(e?.level, e);
        });
    }
    #loadAttackProgression(){
        return this.data.attackProgression.forEach(e => {
            this.attackProgression.set(e?.level, e);
        });
    }
    #loadSavingThrowProgression(){
        return this.data.savingThrowProgression.forEach(e => {
            this.savingThrowProgression.set(e?.level, e);
        });
    }
    #loadSpellProgression(){
        return this.data?.spellProgression.forEach(e => {
            this.spellProgression.set(e?.level, e);
        });
    }  
    #loadSpellList(){
        return this.data.spellList.forEach(e => {
            this.spellList.set(e, ACKS.spells.get(e))
        });
    }     
/* ------------------------------------ */
/* Access Attack Progression Info       */
/* ------------------------------------ */
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getAttackThrowForLevel(level){
        return this.attackProgression.get(level)?.attack_throw;
    }
/* ------------------------------------ */
/* Access Saving Throw Progression Info */
/* ------------------------------------ */
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getSaveVersusPetrificationParalysisForLevel(level){
        return this.savingThrowProgression.get(level)?.petrification_paralysis;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getSaveVersusPoisonDeathForLevel(level){
        return this.savingThrowProgression.get(level)?.poison_death;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getSaveVersusBlastBreathForLevel(level){
        return this.savingThrowProgression.get(level)?.blast_breath;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getSaveVersusStaffWandsForLevel(level){
        return this.savingThrowProgression.get(level)?.staff_wands;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getSaveVersusSpellsForLevel(level){
        return this.savingThrowProgression.get(level)?.spells;
    }
/* ------------------------------------ */
/* Access Spell Progression Info        */
/* ------------------------------------ */
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getNumberOfFirstLevelSpellsPerLevel(level){
        return this.spellProgression.get(level)?.first;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getNumberOfSecondLevelSpellsPerLevel(level){
        return this.spellProgression.get(level)?.second;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getNumberOfThirdLevelSpellsPerLevel(level){
        return this.spellProgression.get(level)?.third;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getNumberOfFourthLevelSpellsPerLevel(level){
        return this.spellProgression.get(level)?.fourth;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getNumberOfFifthLevelSpellsPerLevel(level){
        return this.spellProgression.get(level)?.fifth;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getNumberOfSixthLevelSpellsPerLevel(level){
        return this.spellProgression.get(level)?.sixth;
    }
/* ------------------------------------ */
/* Access Level Progression Info        */
/* ------------------------------------ */
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getExperienceForLevel(level){
        return this.levelProgression.get(level)?.experience;
    }
    /**
     * 
     * @param {number} level 
     * @returns {string} eg., "4d10"
     */
    _getHitDiceForLevel(level){
        return this.levelProgression.get(level)?.hit_dice;
    }
    /**
     * 
     * @param {number} level 
     * @returns {string} 
     */
    _getTitleForLevel(level){
        return this.levelProgression.get(level)?.title;
    }
    /**
     * 
     * @param {number} level 
     * @returns {number}
     */
    _getDamageBonusForLevel(level){
        return this.levelProgression.get(level)?.damage_bonus;
    }
}
/* ------------------------------------ */
/* Proficiency Data                     */
/* ------------------------------------ */
class ProficiencyData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }
}
/* ------------------------------------ */
/* Race Data                            */
/* ------------------------------------ */
class RaceData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }
}
/* ------------------------------------ */
/* Ability Data                         */
/* ------------------------------------ */
class AbilityData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }
}
/* ------------------------------------ */
/* Item Data                            */
/* ------------------------------------ */
class ItemData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }
}
/* ------------------------------------ */
/* Condition Data                       */
/* ------------------------------------ */
class ConditionData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }
}
/* ------------------------------------ */
/* Repertoire Data                      */
/* ------------------------------------ */
class RepertoireData {
    constructor(data={
        name:"",
    }){
        this.data = data;
        this.castings = new Map();
        this.spells = new Map();
        this.mustSpeak = true;
        this.mustMove = true;
    }
        
    

    resetAllCastings(){

    }

    resetCastingsByLevel(level){

    }

    learn(Spell){
        //If it's not a spell, do nothing
        if(!Spell instanceof ACKS.Spell) return 
    }

}
/* ------------------------------------ */
/* Spell Data                           */
/* ------------------------------------ */
class SpellData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }

    resetAllCastings(){

    }

    resetCastingsByLevel(level){

    }

    learn(Spell){
        //If it's not a spell, do nothing
        if(!Spell instanceof ACKS.Spell) return 
    }

}
/* ------------------------------------ */
/* Magick Data                          */
/* ------------------------------------ */
class MagickData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }

}
/* ------------------------------------ */
/* Party Data                           */
/* ------------------------------------ */
class PartyData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }

}
/* ------------------------------------ */
/* Inventory Data                       */
/* ------------------------------------ */
class InventoryData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }

}
/* ------------------------------------ */
/* Lineage Data                         */
/* ------------------------------------ */
class LineageData {
    constructor(data={
        name:"",
    }){
        this.data = data;
    }

}



export const data = {
    CharacterData,
    MonsterData,
    ClassData,
    ProficiencyData,
    RaceData,
    AbilityData,
    ItemData,
    ConditionData,
    CreatureData,
    SpellData,
    PartyData,
    InventoryData,
    LineageData,
    RepertoireData,
    MagickData,
}