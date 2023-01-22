import { ACKS } from "../acks";


/**
 * Generate a random string ID of a given requested length.
 * @param {number} length    The length of the random ID to generate
 * @return {string}          Return a string containing random letters and numbers
 */
function randomID(length=16) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const r = Array.from({length}, () => (Math.random() * chars.length) >> 0);
    return r.map(i => chars[i]).join("");
}

/**
 * Express a timestamp as a relative string
 * @param {Date|string} timeStamp   A timestamp string or Date object to be formatted as a relative time
 * @return {string}                 A string expression for the relative time
 */
function timeSince(timeStamp) {
    timeStamp = new Date(timeStamp);
    const now = new Date();
    const secondsPast = (now - timeStamp) / 1000;
    let since = "";

    // Format the time
    if (secondsPast < 60) {
        since = secondsPast;
        if ( since < 1 ) return game.i18n.localize("TIME.Now");
        else since = Math.round(since) + game.i18n.localize("TIME.SecondsAbbreviation");
    }
    else if (secondsPast < 3600) since = Math.round(secondsPast / 60) + game.i18n.localize("TIME.MinutesAbbreviation");
    else if (secondsPast <= 86400) since = Math.round(secondsPast / 3600) + game.i18n.localize("TIME.HoursAbbreviation");
    else {
        const hours = Math.round(secondsPast / 3600);
        const days = Math.floor(hours / 24);
        since = `${days}${game.i18n.localize("TIME.DaysAbbreviation")} ${hours % 24}${game.i18n.localize("TIME.HoursAbbreviation")}`;
    }

    // Return the string
    return game.i18n.format("TIME.Since", {since: since});
}


/**
 * 
 * @param {string} roll_term eg. 2d6 or 4d10+10
 * @returns {object} {die_type, number_of_dice, roll_term, modifier}
 */
function extractHitDiceInfo(roll_term) {
    let die_type;
    // Identify the die type
    Object.values(ACKS.DIE_TYPES).forEach(e => {
        if(roll_term.includes(e)){
            die_type = e;
        }
    });  

    // Identify the number of die
    let 
        remnants = roll_term.split(die_type),
        number_of_dice = parseInt(remnants.at(0)),

    // Identify the modifier
        modifier = remnants.at(1).trimStart();
        
    if(typeof modifier == "string" && modifier.charAt(0) == "+"){
        modifier = parseInt(modifier.substring(1).trim());
    }
    
    if(typeof modifier == "string" &&  modifier.charAt(0) == "-"){
        modifier = parseInt(modifier.substring(1).trim()) * -1;
    }

    if(modifier === ""){
        modifier = 0;
    }

        
    return {
        die_type: die_type,
        number_of_dice: number_of_dice,
        roll_term: roll_term,
        modifier: modifier
    };
}

/**
 * 
 * @param {number} max 
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random * max);
}

/**
 * 
 * @param {number} max 
 * @returns {number}
 */
function getRandomPosInt(max) {
    let rand = Math.floor(Math.random * max);
    if (rand <= 0 ) rand = 1;
    if (rand > max) rand = max;
    return rand;
}

export const utils = {
    randomID,
    timeSince,
    extractHitDiceInfo,
    getRandomInt,
    getRandomPosInt
}