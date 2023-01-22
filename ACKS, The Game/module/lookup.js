import {
    utils
} from "./utils";

function monsterTypeTable(roll){

}

/**
 * Find the distance in yards between two fighting units at the start of an encounter
 * @param {string} terrain localization
 * @returns {number} number of yards between the two opposing groups 
 */
function battlefieldEncounterDistance(terrain){
    let result = Error(game.i18n.localize("ACKS.Errors.Unrecognized_Input"));
    switch(terrain){
        // Badlands or Hills
        case game.i18n.localize("ACKS.terrain_types.badlands") ||  game.i18n.localize("ACKS.terrain_types.hills"):
            // 2d6x10
            result = (function(){let r = new Roll("2d6");r.evaluate(); return r.total * 10;})()
            break;
        // Desert or Plains
        case game.i18n.localize("ACKS.terrain_types.desert") ||  game.i18n.localize("ACKS.terrain_types.plains"):
            // 4d6x10
            result = (function(){let r = new Roll("4d6");r.evaluate(); return r.total * 10;})()
            break;
        // Fields, Fallow
        case game.i18n.localize("ACKS.terrain_types.fields_fallow"):
            // 4d6x10
            result = (function(){let r = new Roll("4d6");r.evaluate(); return r.total * 10;})()
            break;
        // Fields, Ripe
        case game.i18n.localize("ACKS.terrain_types.fields_ripe"):
            // 5d10
            result = (function(){let r = new Roll("5d10");r.evaluate(); return r.total;})()
            break;
        // Fields, Wild
        case game.i18n.localize("ACKS.terrain_types.fields_wild"):
            // 3d6x5
            result = (function(){let r = new Roll("3d6");r.evaluate(); return r.total * 5;})()
            break;
        // Forest, Heavy or Jungle
        case game.i18n.localize("ACKS.terrain_types.forest_heavy") ||  game.i18n.localize("ACKS.terrain_types.jungle"):
            // 5d4
            result = (function(){let r = new Roll("5d4");r.evaluate(); return r.total;})()
            break;
        // Forest, Light
        case game.i18n.localize("ACKS.terrain_types.forest_light"):
            // 5d8
            result = (function(){let r = new Roll("5d8");r.evaluate(); return r.total;})()
            break;
        // Marsh
        case game.i18n.localize("ACKS.terrain_types.marsh"):
            // 8d10
            result = (function(){let r = new Roll("8d10");r.evaluate(); return r.total;})()
            break;
        // Mountains
        case game.i18n.localize("ACKS.terrain_types.mountains"):
            // 4d6x10
            result = (function(){let r = new Roll("4d6");r.evaluate(); return r.total * 10;})()
            break;
        default:
            break;
    }
    return result;
}

/**
 * Returns the string (localized) associated with each morale score
 * @param {number} adjusted_die_roll 
 * @returns {string} Rout, Flee, Waver, Stand Firm, or Rally
 */
function unitMorale(adjusted_die_roll){
    let result = Error(game.i18n.localize("ACKS.Errors.Invalid_Input"));
    switch(adjusted_die_roll){
        case adjusted_die_roll <= 2:
            result = game.i18n.localize("ACKS.morale.unit.rout.name ");
            break;
        case 3 <= adjusted_die_roll <= 5:
            result = game.i18n.localize("ACKS.morale.unit.flee.name ");
            break;
        case 6 <= adjusted_die_roll <= 8:
            result = game.i18n.localize("ACKS.morale.unit.waver.name ");
            break;
        case 9 <= adjusted_die_roll <= 11:
            result = game.i18n.localize("ACKS.morale.unit.stand_firm.name ");
            break;
        case adjusted_die_roll >= 12:
            result = game.i18n.localize("ACKS.morale.unit.rally.name ");
            break;
        default:
            break;
    }
    return result;
}

/* -------------------------------------------- */
/*  ACKS, Core Rulebook                         */
/* -------------------------------------------- */
//#region 
/**
 * Returns the ability score modifier for the corresponding ability score value
 * @param {number} ability_score 
 * @returns {number} ability score modifier
 */
function abilityScoreModifier(ability_score){
    let result = Error(game.i18n.localize("ACKS.Errors.Invalid_Input"));
    if(typeof ability_score !== 'number') return result;
    switch (ability_score) {
        case 3:
            result = -3;
            break;
        case 4 <= ability_score <= 5:
            result = -2;
            break;
        case 6 <= ability_score <= 8:
            result = -1;
            break;
        case 9 <= ability_score <= 12:
            result = 0;
            break;
        case 13 <= ability_score <= 15:
            result = 1;
            break;
        case 16 <= ability_score <= 17:
            result = 2;
            break;
        case 18:
            result = 3;
            break;
    
        default:
            break;
    }
    return result;
}

/**
 * 
 * @param {number} ability_score 
 * @returns {number} experience adjustment (eg. 0.10 -> +10%)
 */
function primeRequisiteExperienceAdjustment(ability_score){
    let result = Error(game.i18n.localize("ACKS.Errors.Invalid_Input"));
    if(typeof ability_score !== 'number') return result;
    switch (ability_score) {
        case 3 <= ability_score <= 8:
            result = 0;
            break;
        case 9 <= ability_score <= 12:
            result = 0;
            break;
        case 13 <= ability_score <= 15:
            result = 0.05;
            break;
        case 16 <= ability_score <= 18:
            result = 0.10;
            break;
    
        default:
            break;
    }
    return result;  
}


/**
     * Finds the monster attack throw appropriate the given hit dice (roll term)
     * @param {string} roll_term 
     * @returns {number} attack throw
     */
function attackThrowPerMonsterHitDice(roll_term){
    let hit_dice_info = utils.extractHitDiceInfo(roll_term),
        hd = hit_dice_info.hit_dice,
        mod_adjustment = 0;
    // If hit dice modifier is negative
    if(hit_dice_info.modifier < 0) { mod_adjustment = -0.5 }
    if(hit_dice_info.modifier > 0) { mod_adjustment = 0.5 }
    let adjusted_hd = hd + mod_adjustment,
        result;

    switch (adjusted_hd) {
        case adjusted_hd <= 1:
            result = 10;
            break;
        case 1 < adjusted_hd <= 2:
            result = 9;
            break;
        case 2 < adjusted_hd <= 3:
            result = 8;
            break;
        case 3 < adjusted_hd <= 4:
            result = 7;
            break;
        case 4 < adjusted_hd <= 5:
            result = 6;
            break;
        case 5 < adjusted_hd <= 6:
            result = 5;
            break;
        case 6 < adjusted_hd <= 7:
            result = 4;
            break;
        case 7 < adjusted_hd <= 9:
            result = 3;
            break;
        case 9 < adjusted_hd <= 11:
            result = 2;
            break;
        case 11 < adjusted_hd <= 13:
            result = 1;
            break;
        case 13 < adjusted_hd <= 15:
            result = 0;
            break;
        case 15 < adjusted_hd <= 17:
            result = -1;
            break;
        case 17 < adjusted_hd <= 19:
            result = -2;
            break;
        case 19 < adjusted_hd <= 21:
            result = -3;
            break;
        case 21 < adjusted_hd:
            result = -4;
            break;        
        default:
            break;
    }
    
    return result;
}

/**
 * Returns the roll term for the provided gem type
 * @see {SRD} ACKS Core Rulebook, pg. 207
 * @param {string} gem_type 
 * @returns {string | Error} roll-term
 */
function rollPerGemType(gem_type){
    let result = Error(game.i18n.localize("ACKS.Errors.Unrecognized_Input"));
    
    switch (gem_type){
        case game.i18n.localize("ACKS.items.gem.TYPES.ornamental"):
            result = "2d20";
            break;
        case game.i18n.localize("ACKS.items.gem.TYPES.gem"):
            result = "1d100";
            break;
        case game.i18n.localize("ACKS.items.gem.TYPES.brilliant"):
            result = "1d100 + 80";
            break;

        default:
            break;
    }
    return result;
}


/**
 * Returns the number of an item available for purchase depending on the market class of the settlement in which you are attempting to make the purchase
 * @param {string} market_class 
 * @param {number} price_in_gp 
 * @returns {number | Error}
 */
function equipmentAvailabilityByMarketClass(market_class, price_in_gp){
    let result = Error(game.i18n.localize("ACKS.Errors.Unrecognized_Input"));

    switch (market_class) {
        case game.i18n.localize("ACKS.market_class.I"):
            result = price_in_gp < 2 
                ? 1700
                : 2 <= price_in_gp < 11
                    ? 100
                    : 11 <= price_in_gp < 101
                        ? 15
                        : 101 <= price_in_gp < 1001
                            ? 7
                            : 1001 <= price_in_gp < 10001
                                ? 2
                                : utils.getRandomPosInt(100) <= 10
                                    ? 1
                                    : 0         
            break;
        case game.i18n.localize("ACKS.market_class.II"):
            result = price_in_gp < 2 
                ? 585
                : 2 <= price_in_gp < 11
                    ? 30
                    : 11 <= price_in_gp < 101
                        ? 5
                        : 101 <= price_in_gp < 1001
                            ? 2
                            : 1001 <= price_in_gp < 10001
                                ? 1
                                : utils.getRandomPosInt(100) <= 5
                                    ? 1
                                    : 0     
            break;
        case game.i18n.localize("ACKS.market_class.III"):
            result = price_in_gp < 2 
                ? 260
                : 2 <= price_in_gp < 11
                    ? 15
                    : 11 <= price_in_gp < 101
                        ? 2
                        : 101 <= price_in_gp < 1001
                            ? 1
                            : 1001 <= price_in_gp < 10001
                                ? utils.getRandomPosInt(100) <= 25
                                    ? 1
                                    : 0    
                                : utils.getRandomPosInt(100) <= 2
                                    ? 1
                                    : 0     
            break;
        case game.i18n.localize("ACKS.market_class.IV"):
            result = price_in_gp < 2 
                ? 65
                : 2 <= price_in_gp < 11
                    ? 5
                    : 11 <= price_in_gp < 101
                        ? 1
                        : 101 <= price_in_gp < 1001
                            ? utils.getRandomPosInt(100) <= 25
                                ? 1
                                : 0    
                            : 1001 <= price_in_gp < 10001
                                ? utils.getRandomPosInt(100) <= 10
                                    ? 1
                                    : 0    
                                : 0 
            break;
        case game.i18n.localize("ACKS.market_class.V"):
            result = price_in_gp < 2 
                ? 30
                : 2 <= price_in_gp < 11
                    ? 1
                    : 11 <= price_in_gp < 101
                        ? utils.getRandomPosInt(100) <= 25
                            ? 1
                            : 0    
                        : 101 <= price_in_gp < 1001
                            ? utils.getRandomPosInt(100) <= 10
                                ? 1
                                : 0    
                            : 1001 <= price_in_gp < 10001
                                ? utils.getRandomPosInt(100) <= 5
                                    ? 1
                                    : 0    
                                : 0
        case game.i18n.localize("ACKS.market_class.VI"):
            result = price_in_gp < 2 
                ? 10
                : 2 <= price_in_gp < 11
                    ? 1
                    : 11 <= price_in_gp < 101
                        ? utils.getRandomPosInt(100) <= 10
                            ? 1
                            : 0    
                        : 101 <= price_in_gp < 1001
                            ? utils.getRandomPosInt(100) <= 5
                                ? 1
                                : 0    
                            : 1001 <= price_in_gp < 10001
                                ? utils.getRandomPosInt(100) <= 1
                                    ? 1
                                    : 0    
                                : 0
            break;
    
        default:
            break;
    }

    return result;
}
//#endregion
/* -------------------------------------------- */
/*  Lairs and Encounters                        */
/* -------------------------------------------- */
//#region
/**
 * Determines the size category of the creature based on its weight and height
 * @param {number} weight_in_pounds 
 * @param {number} height_in_inches 
 * @returns {string} 
 */
function sizeCategoryByWeightAndHeight(weight_in_pounds, height_in_inches){
    const SIZE_CATEGORY = {
        diminutive: game.i18n.localize("ACKS.monster_sizes.diminutive"),
        mansized: game.i18n.localize("ACKS.monster_sizes.mansized"),
        large: game.i18n.localize("ACKS.monster_sizes.large"),
        huge: game.i18n.localize("ACKS.monster_sizes.huge"),
        gigantic: game.i18n.localize("ACKS.monster_sizes.gigantic"),
        colossal: game.i18n.localize("ACKS.monster_sizes.colossal"),
    }

    let height_in_feet = height_in_inches/12,
        weight_category,
        height_category;
    
    switch(height_in_feet){
        case height_in_feet < 8:
            height_category = SIZE_CATEGORY.mansized;
            break;
        case 8 <= height_in_feet < 12:
            height_category = SIZE_CATEGORY.large;
            break;
        case 12 <= height_in_feet < 20:
            height_category = SIZE_CATEGORY.huge;
            break;
        case 20 <= height_in_feet < 32:
            height_category = SIZE_CATEGORY.gigantic;
            break;
        case height_in_feet >= 32:
            height_category = SIZE_CATEGORY.colossal;
            break;

        default:
            break;
    }
    
    switch(weight_in_pounds){
        case weight_in_pounds <= 400:
            weight_category = SIZE_CATEGORY.mansized;
            break;
        case 401 <= weight_in_pounds <= 2000:
            weight_category = SIZE_CATEGORY.large;
            break;
        case 2001 <= weight_in_pounds <= 8000:
            weight_category = SIZE_CATEGORY.huge;
            break;
        case 8001 <= weight_in_pounds <= 32000:
            weight_category = SIZE_CATEGORY.gigantic;
            break;
        case weight_in_pounds >= 32000:
            weight_category = SIZE_CATEGORY.colossal;
            break;

        default:
            break;
    }

    return weight_category;
}

function animalTrainerMonthlyWageByType(animal_type){
    let result = Error(game.i18n.localize("ACKS.Errors.Unrecognized_Input"))
    switch(animal_type){
        case game.i18n.localize("ACKS.monster_types.domestic_animal"):
            result = 25;
            break;
        case game.i18n.localize("ACKS.monster_types.wild_animal"):
            result = 75;
            break;
        case game.i18n.localize("ACKS.monster_types.dire_animal") || game.i18n.localize("ACKS.monster_types.giant_animal") || game.i18n.localize("ACKS.monster_types.prehistoric_animal"):
            result = 150;
            break;
        case game.i18n.localize("ACKS.monster_types.vermin") || game.i18n.localize("ACKS.monster_types.fantastic_creature"):
            result = 250;
            break;

        default:
            break;
    }
    return result;
}

function strengthScoreModifierForNaturalAttacks(ability_score, average_attack_damage){
    if((typeof ability_score || average_attack_damage) ===  "number") return Error(game.i18n.localize("ACKS.Errors.Invalid_Input"));
    let result = Error(game.i18n.localize("ACKS.Errors.Invalid_Input"));
    switch(ability_score){
        case 3: 
            result = average_attack_damage <= 2
                ? -2
                : 3 <= average_attack_damage <= 6
                    ? -3
                    : 7 <= average_attack_damage <= 12
                        ? -6
                        : 13 <= average_attack_damage <= 24
                            ? -8
                            : -12;
            break;
        case 4: 
            result = average_attack_damage <= 2
                ? -1
                : 3 <= average_attack_damage <= 6
                    ? -2
                    : 7 <= average_attack_damage <= 12
                        ? 5
                        : 13 <= average_attack_damage <= 24
                            ? -7
                            : -10;
            break;
        case 5: 
            result = average_attack_damage <= 2
                ? -1
                : 3 <= average_attack_damage <= 6
                    ? -2
                    : 7 <= average_attack_damage <= 12
                        ? -4
                        : 13 <= average_attack_damage <= 24
                            ? -6
                            : -10;
            break;
        case 6: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? -1
                    : 7 <= average_attack_damage <= 12
                        ? -3
                        : 13 <= average_attack_damage <= 24
                            ? -4
                            : -6
            break;
        case 7: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? -1
                    : 7 <= average_attack_damage <= 12
                        ? -2
                        : 13 <= average_attack_damage <= 24
                            ? -3
                            : -4
            break;
        case 8: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? -1
                    : 7 <= average_attack_damage <= 12
                        ? -1
                        : 13 <= average_attack_damage <= 24
                            ? -2
                            : -3
            break;
        case 9: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? 0
                    : 7 <= average_attack_damage <= 12
                        ? 0
                        : 13 <= average_attack_damage <= 24
                            ? -1
                            : -2
            break;
        case 10: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? 0
                    : 7 <= average_attack_damage <= 12
                        ? 0
                        : 13 <= average_attack_damage <= 24
                            ? 0
                            : 0
            break;
        case 11: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? 0
                    : 7 <= average_attack_damage <= 12
                        ? 0
                        : 13 <= average_attack_damage <= 24
                            ? 0
                            : 0
            break;
        case 12: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? 0
                    : 7 <= average_attack_damage <= 12
                        ? 0
                        : 13 <= average_attack_damage <= 24
                            ? 1
                            : 2
            break;
        case 13: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? 1
                    : 7 <= average_attack_damage <= 12
                        ? 1
                        : 13 <= average_attack_damage <= 24
                            ? 2
                            : 3
            break;
        case 14: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? 1
                    : 7 <= average_attack_damage <= 12
                        ? 2
                        : 13 <= average_attack_damage <= 24
                            ? 3
                            : 4
            break;
        case 15: 
            result = average_attack_damage <= 2
                ? 0
                : 3 <= average_attack_damage <= 6
                    ? 1
                    : 7 <= average_attack_damage <= 12
                        ? 3
                        : 13 <= average_attack_damage <= 24
                            ? 4
                            : 6
            break;
        case 16: 
            result = average_attack_damage <= 2
                ? 1
                : 3 <= average_attack_damage <= 6
                    ? 2
                    : 7 <= average_attack_damage <= 12
                        ? 4
                        : 13 <= average_attack_damage <= 24
                            ? 6
                            : 8
            break;
        case 17: 
            result = average_attack_damage <= 2
                ? 1
                : 3 <= average_attack_damage <= 6
                    ? 2
                    : 7 <= average_attack_damage <= 12
                        ? 5
                        : 13 <= average_attack_damage <= 24
                            ? 7
                            : 10
            break;
        case 18: 
            result = average_attack_damage <= 2
                ? 2
                : 3 <= average_attack_damage <= 6
                    ? 3
                    : 7 <= average_attack_damage <= 12
                        ? 6
                        : 13 <= average_attack_damage <= 24
                            ? 8
                            : 12
            break;

        default: 
            break;
    }

    return result;
}
//#endregion
/* -------------------------------------------- */
/*  Heroic Fantasy Handbook                     */
/* -------------------------------------------- */
//#region 
/**
 * Finds the base healing rate per the provided max hp
 * @param {number} max_hp 
 * @returns {string} base healing rate (eg. 1d2, 7d10)
 */
function baseHealingRatePerMaxHP(max_hp) {
    let result = Error(game.i18n.localize("ACKS.Errors.Invalid_Input"));
    switch(max_hp){
        case 1 <= max_hp <= 3:
            result = "1d2";
            break;
        case 4 <= max_hp <= 9:
            result = "1d3";
            break;
        case 10 <= max_hp <= 16:
            result = "1d4";
            break;
        case 17 <= max_hp <= 23:
            result = "1d6";
            break;
        case 24 <= max_hp <= 29:
            result = "1d8";
            break;
        case 30 <= max_hp <= 36:
            result = "1d10";
            break;
        case 37 <= max_hp <= 49:
            result = "2d6";
            break;
        case 50 <= max_hp <= 63:
            result = "2d8";
            break;
        case 64 <= max_hp <= 76:
            result = "2d10";
            break;
        case 77 <= max_hp <= 89:
            result = "2d12";
            break;
        case 90 <= max_hp <= 110:
            result = "3d10";
            break;
        case 111 <= max_hp <= 140:
            result = "4d10";
            break;
        case 141 <= max_hp <= 170:
            result = "5d10";
            break;
        case max_hp >= 171:
            let excess_hp = 171 - 170,
                excess_d10 = Math.floor(excess_hp/30)
                final_number_of_d10 = 6 + excess_d10;
            result = `${final_number_of_d10}d10`;
            break;

        default:
            break;
    }
    return result;
}
//#endregion

/* -------------------------------------------- */

export const lookup = {
    Core: {
        abilityScoreModifier,
        primeRequisiteExperienceAdjustment,
        attackThrowPerMonsterHitDice,
        equipmentAvailabilityByMarketClass, 
    },
    Lairs_and_Encounters: {
        strengthScoreModifierForNaturalAttacks,
        sizeCategoryByWeightAndHeight,
        animalTrainerMonthlyWageByType,
    },
    Heroic_Fantasy_Handbook: {
        baseHealingRatePerMaxHP,
    },
    
}
