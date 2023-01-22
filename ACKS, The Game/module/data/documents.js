import Document from "c:/program files/foundryvtt/foundry virtual tabletop/resources/app/common/abstract/document.mjs";
import { ACKS } from "../../acks";
import { mergeObject } from "c:/program files/foundryvtt/foundry virtual tabletop/resources/app/common/utils/helpers.mjs";
import { BaseActiveEffect, BaseActor, BaseItem } from "c:/program files/foundryvtt/foundry virtual tabletop/resources/app/common/documents.mjs";
import * as fields from "c:/Program Files/FoundryVTT/Foundry Virtual Tabletop/resources/app/common/data/fields.mjs"


class BaseCreature extends BaseActor { 

    /** @inheritdoc */
    static defineSchema() {
        return {
            _id: new fields.DocumentIdField(),
            name: new fields.StringField({required: true, blank: false}),
            type: new fields.StringField({required: true, choices: () => this.TYPES,
              validationError: "must be in the array of Actor types defined by the game system"}),
            img: new fields.FilePathField({categories: ["IMAGE"], initial: () => this.DEFAULT_ICON}),
            system: new fields.SystemDataField(this),
            prototypeToken: new fields.EmbeddedDataField(PrototypeToken),
            items: new fields.EmbeddedCollectionField(documents.BaseItem),
            effects: new fields.EmbeddedCollectionField(documents.BaseActiveEffect),
            folder: new fields.ForeignDocumentField(documents.BaseFolder),
            sort: new fields.IntegerSortField(),
            ownership: new fields.DocumentOwnershipField(),
            flags: new fields.ObjectField(),
            _stats: new fields.DocumentStatsField()
        };
    }
    
    /* ------------------------------------ */

    /** @inheritdoc */
    static get metadata() {
        return mergeObject(super.metadata, {
            name: "Creature",
            label: "DOCUMENT.Creature",
            labelPlural: "DOCUMENT.Creatures",
            embedded: {
                Condition: "conditions",
                Ability: "abilities",
                Class: "class",
                Race: "race",
                Lineage: "lineage",
                Repertoire: "repertoire",
                Inventory: "inventory",
            }
        }, {overwrite:true});
    }

    /* ------------------------------------ */

    static get TYPES(){
        return ["Monster","Character"];
    }
}


class BaseCondition extends BaseActiveEffect {
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

class BaseMagick extends Document {
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
    BaseMagick,
    BaseParty,
    BaseInventory,
    BaseLineage,
    BaseRepertoire,    
}