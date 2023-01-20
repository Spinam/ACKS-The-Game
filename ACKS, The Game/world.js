import {
    utils,
} from "./module/utils";



export var World = (function () {
    var instance,
        magicks = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        },
        domains = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        },
        items = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        },
        proficiencies = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        },
        races = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        },
        creatures = {
            characters:{
                id: utils.randomID(),
                collection: new Map(),
                list: new Array(),
            },
            monsters:{
                id: utils.randomID(),
                collection: new Map(),
                list: new Array(),
            },
        },
        spells = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        },
        conditions = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        },
        structures = {
            id: utils.randomID(),
            collection: new Map(),
            list: new Array(),
        };

    function createInstance() {
        var object = new Object({
            id: utils.randomID(),
            get spells(){
                return spells;
            },
            get magicks(){
                return magicks;
            },
            get domains(){
                return domains;
            },
            get items(){
                return items;
            },
            get proficiencies(){
                return proficiencies;
            },   
            get races(){
                return races;
            },
            get creatures(){
                return creatures;
            },
            get conditions(){
                return conditions;
            },
            get structures(){
                return structures;
            },
        });
        return object;
    }

    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
        magicks: {
            get list(){
                return magicks.list
            },          
            /** Adds the Magick object to the collection and list of names 
             * @param {Magick} magick The magick object to be added*/
            add(magick){
                // Is the parameter a Magick object? If not, do nothing.
                    if(!magick instanceof Magick){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(magicks.collection.get(magick?.name)){ return; }
                // Otherwise, add the Magick to the collection and the name to the list
                    magicks.collection.set(key=magick?.name,value=magick);
                    magicks.list.push(magick.name);
                },
                /** Overrides the current Magick object with the specified name 
                 * @param {String} name the name associated with the magick
                 * @param {Magick} magick the Magick object
                 * */
            changeMagick(name, magick){
            // Is the magick already in the collection? If not, do nothing.
                if(!magicks.collection.get(name)){ return; }
            // Apply the change
                magicks.collection.set(name, magick);          
            },
            /** Removes the specified Magick from the magick collection
             * @param {String} id The id of the Magick to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let magick of magicks.collection.values()){
                //If a magick with this id exists in the collection, remove it
                    if(magick?.id == id){
                        magicks.collection.remove(magick.name);
                    // Remove the name from the list of magicks
                        magicks.list.splice((magicks.list.indexOf(magick.name)), 1);
                    }
                }
            },
            /** Removes the specified Magick from the magick collection
             * @param {String} name The name of the Magick to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let magick of magicks.collection.values()){
                //If a magick with this name exists in the collection, remove it
                    if(magick?.name == name){
                        magicks.collection.remove(magick.name);
                    // Remove the name from the list of magicks
                        magicks.list.splice((magicks.list.indexOf(magick.name)), 1);
                    }
                }     
            },                
        },
        domains: {
            get list(){
                return domains.list
            },          
            /** Adds the Domain object to the collection and list of names 
             * @param {Domain} domain The domain object to be added*/
            add(domain){
                // Is the parameter a Domain object? If not, do nothing.
                    if(!domain instanceof Domain){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(domains.collection.get(domain?.name)){ return; }
                // Otherwise, add the Domain to the collection and the name to the list
                    domains.collection.set(key=domain?.name,value=domain);
                    domains.list.push(domain.name);
                },
                /** Overrides the current Domain object with the specified name 
                 * @param {String} name the name associated with the domain
                 * @param {Domain} domain the Domain object
                 * */
            changeDomain(name, domain){
            // Is the domain already in the collection? If not, do nothing.
                if(!domains.collection.get(name)){ return; }
            // Apply the change
                domains.collection.set(name, domain);          
            },
            /** Removes the specified Domain from the domain collection
             * @param {String} id The id of the Domain to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let domain of domains.collection.values()){
                //If a domain with this id exists in the collection, remove it
                    if(domain?.id == id){
                        domains.collection.remove(domain.name);
                    // Remove the name from the list of domains
                        domains.list.splice((domains.list.indexOf(domain.name)), 1);
                    }
                }
            },
            /** Removes the specified Domain from the domain collection
             * @param {String} name The name of the Domain to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let domain of domains.collection.values()){
                //If a domain with this name exists in the collection, remove it
                    if(domain?.name == name){
                        domains.collection.remove(domain.name);
                    // Remove the name from the list of domains
                        domains.list.splice((domains.list.indexOf(domain.name)), 1);
                    }
                }     
            },                
        },
        items: {
            get list(){
                return items.list
            },          
            /** Adds the Item object to the collection and list of names 
             * @param {Item} item The item object to be added*/
            add(item){
                // Is the parameter a Item object? If not, do nothing.
                    if(!item instanceof Item){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(items.collection.get(item?.name)){ return; }
                // Otherwise, add the Item to the collection and the name to the list
                    items.collection.set(key=item?.name,value=item);
                    items.list.push(item.name);
                },
                /** Overrides the current Item object with the specified name 
                 * @param {String} name the name associated with the item
                 * @param {Item} item the Item object
                 * */
            changeItem(name, item){
            // Is the item already in the collection? If not, do nothing.
                if(!items.collection.get(name)){ return; }
            // Apply the change
                items.collection.set(name, item);          
            },
            /** Removes the specified Item from the item collection
             * @param {String} id The id of the Item to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let item of items.collection.values()){
                //If a item with this id exists in the collection, remove it
                    if(item?.id == id){
                        items.collection.remove(item.name);
                    // Remove the name from the list of items
                        items.list.splice((items.list.indexOf(item.name)), 1);
                    }
                }
            },
            /** Removes the specified Item from the item collection
             * @param {String} name The name of the Item to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let item of items.collection.values()){
                //If a item with this name exists in the collection, remove it
                    if(item?.name == name){
                        items.collection.remove(item.name);
                    // Remove the name from the list of items
                        items.list.splice((items.list.indexOf(item.name)), 1);
                    }
                }     
            },                
        },
        proficiencies: {
            get list(){
                return proficiencies.list
            },          
            /** Adds the Proficiency object to the collection and list of names 
             * @param {Proficiency} proficiency The proficiency object to be added*/
            add(proficiency){
                // Is the parameter a Proficiency object? If not, do nothing.
                    if(!proficiency instanceof Proficiency){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(proficiencies.collection.get(proficiency?.name)){ return; }
                // Otherwise, add the Proficiency to the collection and the name to the list
                    proficiencies.collection.set(key=proficiency?.name,value=proficiency);
                    proficiencies.list.push(proficiency.name);
                },
                /** Overrides the current Proficiency object with the specified name 
                 * @param {String} name the name associated with the proficiency
                 * @param {Proficiency} proficiency the Proficiency object
                 * */
            changeProficiency(name, proficiency){
            // Is the proficiency already in the collection? If not, do nothing.
                if(!proficiencies.collection.get(name)){ return; }
            // Apply the change
                proficiencies.collection.set(name, proficiency);          
            },
            /** Removes the specified Proficiency from the proficiency collection
             * @param {String} id The id of the Proficiency to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let proficiency of proficiencies.collection.values()){
                //If a proficiency with this id exists in the collection, remove it
                    if(proficiency?.id == id){
                        proficiencies.collection.remove(proficiency.name);
                    // Remove the name from the list of proficiencies
                        proficiencies.list.splice((proficiencies.list.indexOf(proficiency.name)), 1);
                    }
                }
            },
            /** Removes the specified Proficiency from the proficiency collection
             * @param {String} name The name of the Proficiency to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let proficiency of proficiencies.collection.values()){
                //If a proficiency with this name exists in the collection, remove it
                    if(proficiency?.name == name){
                        proficiencies.collection.remove(proficiency.name);
                    // Remove the name from the list of proficiencies
                        proficiencies.list.splice((proficiencies.list.indexOf(proficiency.name)), 1);
                    }
                }     
            },                
        },
        races: {
            get list(){
                return races.list
            },          
            /** Adds the Race object to the collection and list of names 
             * @param {Race} race The race object to be added*/
            add(race){
                // Is the parameter a Race object? If not, do nothing.
                    if(!race instanceof Race){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(races.collection.get(race?.name)){ return; }
                // Otherwise, add the Race to the collection and the name to the list
                    races.collection.set(key=race?.name,value=race);
                    races.list.push(race.name);
                },
                /** Overrides the current Race object with the specified name 
                 * @param {String} name the name associated with the race
                 * @param {Race} race the Race object
                 * */
            changeRace(name, race){
            // Is the race already in the collection? If not, do nothing.
                if(!races.collection.get(name)){ return; }
            // Apply the change
                races.collection.set(name, race);          
            },
            /** Removes the specified Race from the race collection
             * @param {String} id The id of the Race to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let race of races.collection.values()){
                //If a race with this id exists in the collection, remove it
                    if(race?.id == id){
                        races.collection.remove(race.name);
                    // Remove the name from the list of races
                        races.list.splice((races.list.indexOf(race.name)), 1);
                    }
                }
            },
            /** Removes the specified Race from the race collection
             * @param {String} name The name of the Race to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let race of races.collection.values()){
                //If a race with this name exists in the collection, remove it
                    if(race?.name == name){
                        races.collection.remove(race.name);
                    // Remove the name from the list of races
                        races.list.splice((races.list.indexOf(race.name)), 1);
                    }
                }     
            },                
        },
        creatures: {
            characters: {
                get list(){
                    return creatures.characters.list
                },          
                /** Adds the Character object to the collection and list of names 
                 * @param {Character} character The character object to be added*/
                add(character){
                    // Is the parameter a Character object? If not, do nothing.
                        if(!character instanceof Character){ return; }
                    // Is it name already in the collection? If so, do nothing.
                        if(creatures.characters.collection.get(character?.name)){ return; }
                    // Otherwise, add the Character to the collection and the name to the list
                        creatures.characters.collection.set(key=character?.name,value=character);
                        creatures.characters.list.push(character.name);
                    },
                    /** Overrides the current Character object with the specified name 
                     * @param {String} name the name associated with the character
                     * @param {Character} character the Character object
                     * */
                changeCharacter(name, character){
                // Is the character already in the collection? If not, do nothing.
                    if(!creatures.characters.collection.get(name)){ return; }
                // Apply the change
                    creatures.characters.collection.set(name, character);          
                },
                /** Removes the specified Character from the character collection
                 * @param {String} id The id of the Character to be removed*/
                removeByID(id){
                //Iterate over the collection
                    for(let character of creatures.characters.collection.values()){
                    //If a character with this id exists in the collection, remove it
                        if(character?.id == id){
                            creatures.characters.collection.remove(character.name);
                        // Remove the name from the list of characters
                            creatures.characters.list.splice((creatures.characters.list.indexOf(character.name)), 1);
                        }
                    }
                },
                /** Removes the specified Character from the character collection
                 * @param {String} name The name of the Character to be removed*/
                removeByName(name){
                //Iterate over the collection 
                for(let character of creatures.characters.collection.values()){
                    //If a character with this name exists in the collection, remove it
                        if(character?.name == name){
                            creatures.characters.collection.remove(character.name);
                        // Remove the name from the list of characters
                            creatures.characters.list.splice((creatures.characters.list.indexOf(character.name)), 1);
                        }
                    }     
                },                
            },
            monsters: {
                get list(){
                    return creatures.monsters.list
                },          
                /** Adds the Monster object to the collection and list of names 
                 * @param {Monster} monster The monster object to be added*/
                add(monster){
                    // Is the parameter a Monster object? If not, do nothing.
                        if(!monster instanceof Monster){ return; }
                    // Is it name already in the collection? If so, do nothing.
                        if(creatures.monsters.collection.get(monster?.name)){ return; }
                    // Otherwise, add the Monster to the collection and the name to the list
                        creatures.monsters.collection.set(key=monster?.name,value=monster);
                        creatures.monsters.list.push(monster.name);
                    },
                    /** Overrides the current Monster object with the specified name 
                     * @param {String} name the name associated with the monster
                     * @param {Monster} monster the Monster object
                     * */
                changeMonster(name, monster){
                // Is the monster already in the collection? If not, do nothing.
                    if(!creatures.monsters.collection.get(name)){ return; }
                // Apply the change
                    creatures.monsters.collection.set(name, monster);          
                },
                /** Removes the specified Monster from the monster collection
                 * @param {String} id The id of the Monster to be removed*/
                removeByID(id){
                //Iterate over the collection
                    for(let monster of creatures.monsters.collection.values()){
                    //If a monster with this id exists in the collection, remove it
                        if(monster?.id == id){
                            creatures.monsters.collection.remove(monster.name);
                        // Remove the name from the list of monsters
                            creatures.monsters.list.splice((creatures.monsters.list.indexOf(monster.name)), 1);
                        }
                    }
                },
                /** Removes the specified Monster from the monster collection
                 * @param {String} name The name of the Monster to be removed*/
                removeByName(name){
                //Iterate over the collection 
                for(let monster of creatures.monsters.collection.values()){
                    //If a monster with this name exists in the collection, remove it
                        if(monster?.name == name){
                            creatures.monsters.collection.remove(monster.name);
                        // Remove the name from the list of monsters
                            creatures.monsters.list.splice((creatures.monsters.list.indexOf(monster.name)), 1);
                        }
                    }     
                },                
            },
        },        
        spells: {
            get list(){
                return spells.list
            },          
            /** Adds the Spell object to the collection and list of names 
             * @param {Spell} spell The spell object to be added*/
            add(spell){
                // Is the parameter a Spell object? If not, do nothing.
                    if(!spell instanceof Spell){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(spells.collection.get(spell?.name)){ return; }
                // Otherwise, add the Spell to the collection and the name to the list
                    spells.collection.set(key=spell?.name,value=spell);
                    spells.list.push(spell.name);
                },
                /** Overrides the current Spell object with the specified name 
                 * @param {String} name the name associated with the spell
                 * @param {Spell} spell the Spell object
                 * */
            changeSpell(name, spell){
            // Is the spell already in the collection? If not, do nothing.
                if(!spells.collection.get(name)){ return; }
            // Apply the change
                spells.collection.set(name, spell);          
            },
            /** Removes the specified Spell from the spell collection
             * @param {String} id The id of the Spell to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let spell of spells.collection.values()){
                //If a spell with this id exists in the collection, remove it
                    if(spell?.id == id){
                        spells.collection.remove(spell.name);
                    // Remove the name from the list of spells
                        spells.list.splice((spells.list.indexOf(spell.name)), 1);
                    }
                }
            },
            /** Removes the specified Spell from the spell collection
             * @param {String} name The name of the Spell to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let spell of spells.collection.values()){
                //If a spell with this name exists in the collection, remove it
                    if(spell?.name == name){
                        spells.collection.remove(spell.name);
                    // Remove the name from the list of spells
                        spells.list.splice((spells.list.indexOf(spell.name)), 1);
                    }
                }     
            },                
        },
        conditions: {
            get list(){
                return conditions.list
            },          
            /** Adds the Condition object to the collection and list of names 
             * @param {Condition} condition The condition object to be added*/
            add(condition){
                // Is the parameter a Condition object? If not, do nothing.
                    if(!condition instanceof Condition){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(conditions.collection.get(condition?.name)){ return; }
                // Otherwise, add the Condition to the collection and the name to the list
                    conditions.collection.set(key=condition?.name,value=condition);
                    conditions.list.push(condition.name);
                },
                /** Overrides the current Condition object with the specified name 
                 * @param {String} name the name associated with the condition
                 * @param {Condition} condition the Condition object
                 * */
            changeCondition(name, condition){
            // Is the condition already in the collection? If not, do nothing.
                if(!conditions.collection.get(name)){ return; }
            // Apply the change
                conditions.collection.set(name, condition);          
            },
            /** Removes the specified Condition from the condition collection
             * @param {String} id The id of the Condition to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let condition of conditions.collection.values()){
                //If a condition with this id exists in the collection, remove it
                    if(condition?.id == id){
                        conditions.collection.remove(condition.name);
                    // Remove the name from the list of conditions
                        conditions.list.splice((conditions.list.indexOf(condition.name)), 1);
                    }
                }
            },
            /** Removes the specified Condition from the condition collection
             * @param {String} name The name of the Condition to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let condition of conditions.collection.values()){
                //If a condition with this name exists in the collection, remove it
                    if(condition?.name == name){
                        conditions.collection.remove(condition.name);
                    // Remove the name from the list of conditions
                        conditions.list.splice((conditions.list.indexOf(condition.name)), 1);
                    }
                }     
            },                
        },
        structures: {
            get list(){
                return structures.list
            },          
            /** Adds the Structure object to the collection and list of names 
             * @param {Structure} structure The structure object to be added*/
            add(structure){
                // Is the parameter a Structure object? If not, do nothing.
                    if(!structure instanceof Structure){ return; }
                // Is it name already in the collection? If so, do nothing.
                    if(structures.collection.get(structure?.name)){ return; }
                // Otherwise, add the Structure to the collection and the name to the list
                    structures.collection.set(key=structure?.name,value=structure);
                    structures.list.push(structure.name);
                },
                /** Overrides the current Structure object with the specified name 
                 * @param {String} name the name associated with the structure
                 * @param {Structure} structure the Structure object
                 * */
            changeStructure(name, structure){
            // Is the structure already in the collection? If not, do nothing.
                if(!structures.collection.get(name)){ return; }
            // Apply the change
                structures.collection.set(name, structure);          
            },
            /** Removes the specified Structure from the structure collection
             * @param {String} id The id of the Structure to be removed*/
            removeByID(id){
            //Iterate over the collection
                for(let structure of structures.collection.values()){
                //If a structure with this id exists in the collection, remove it
                    if(structure?.id == id){
                        structures.collection.remove(structure.name);
                    // Remove the name from the list of structures
                        structures.list.splice((structures.list.indexOf(structure.name)), 1);
                    }
                }
            },
            /** Removes the specified Structure from the structure collection
             * @param {String} name The name of the Structure to be removed*/
            removeByName(name){
            //Iterate over the collection 
            for(let structure of structures.collection.values()){
                //If a structure with this name exists in the collection, remove it
                    if(structure?.name == name){
                        structures.collection.remove(structure.name);
                    // Remove the name from the list of structures
                        structures.list.splice((structures.list.indexOf(structure.name)), 1);
                    }
                }     
            },                
        },
    };
})();