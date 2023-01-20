import Document from "c:/program files/foundryvtt/foundry virtual tabletop/resources/app/common/abstract/document.mjs";
import { ACKS } from "../../acks";
import { mergeObject } from "c:/program files/foundryvtt/foundry virtual tabletop/resources/app/common/utils/helpers.mjs";
import { BaseActor, BaseItem } from "c:/program files/foundryvtt/foundry virtual tabletop/resources/app/common/documents.mjs";

class BaseCreature extends BaseActor { 
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.CreatureData;
    }

    /** @inheritdoc */
    static get metadata() {
        return mergeObject(super.metadata, {
            name: "Creature",
            collection: "creatures",
            label: "DOCUMENT.Creature",
            labelPlural: "DOCUMENT.Creatures",
            embedded: {
                Condition: ACKS.documents.BaseCondition,
                Class: ACKS.documents.BaseClass,

            }
        });
    }
}

class BaseCharacter extends BaseCreature {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.CharacterData;
    }

    /** @inheritdoc */
    static get metadata() {
        return mergeObject(super.metadata, {
            name: "Character",
            collection: "characters",
            label: "DOCUMENT.Character",
            labelPlural: "DOCUMENT.Characters",
            embedded: {
                Condition: ACKS.documents.BaseCondition,
                Item: ACKS.documents.BaseCharacter
            }
        });
    }
}

class BaseCondition extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseClass extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseProficiency extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseRace extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseAbility extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseSpell extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseInventory extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseParty extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseLineage extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

class BaseRepertoire extends Document {
    /** @inheritdoc */
    static get schema() {
        return ACKS.data.ConditionData;
    }

    /** @inheritdoc */
    static get metadata() {

    }
}

export const documents = {
    BaseCharacter,
    BaseClass,
    BaseProficiency,
    BaseRace,
    BaseAbility,
    BaseItem,
    BaseCondition,
    BaseCreature,
    BaseSpell,
    BaseParty,
    BaseInventory,
    BaseLineage,
    BaseRepertoire,    
}