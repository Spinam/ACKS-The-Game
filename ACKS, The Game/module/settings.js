
const SETTING_SCOPES = {CLIENT: "client", WORLD: "world"}

export function WorldSettings(){

    game.settings.register("ACKS, The Game" ,"heroic_breakfast_memorial_rule", {
        name: game.i18n.localize("ACKS.Settings.Heroic_Breakfast_Memorial_Rule.Name"),
        hint: game.i18n.localize("ACKS.Settings.Heroic_Breakfast_Memorial_Rule.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"heroic_survival", {
        name: game.i18n.localize("ACKS.Settings.Heroic_Breakfast_Memorial_Rule.Name"),
        hint: game.i18n.localize("ACKS.Settings.Heroic_Breakfast_Memorial_Rule.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"khal_drogo_memorial_rule", {
        name: game.i18n.localize("ACKS.Settings.Khal_Drogo_Memorial_Rule.Name"),
        hint: game.i18n.localize("ACKS.Settings.Khal_Drogo_Memorial_Rule.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"temporary_hit_points", {
        name: game.i18n.localize("ACKS.Settings.Temporary_Hit_Points.Name"),
        hint: game.i18n.localize("ACKS.Settings.Temporary_Hit_Points.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"type_of_characters", {
        name: game.i18n.localize("ACKS.Settings.Type_Of_Characters.Name"),
        hint: game.i18n.localize("ACKS.Settings.Type_Of_Characters.Hint"),
        default: game.i18n.localize("ACKS.Settings.Type_Of_Characters.Normal"),
        choices: {
            normal: game.i18n.localize("ACKS.Settings.Type_Of_Characters.Normal"),
            heroic: game.i18n.localize("ACKS.Settings.Type_Of_Characters.Heroic"),
            legendary: game.i18n.localize("ACKS.Settings.Type_Of_Characters.Legendary"),
        },
        scope: SETTING_SCOPES.WORLD,
        type: String,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"proportional_healing", {
        name: game.i18n.localize("ACKS.Settings.Proportional_Healing.Name"),
        hint: game.i18n.localize("ACKS.Settings.Proportional_Healing.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"ability_scores_for_monsters", {
        name: game.i18n.localize("ACKS.Settings.Ability_Scores_For_Monsters.Name"),
        hint: game.i18n.localize("ACKS.Settings.Ability_Scores_For_Monsters.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"tims_in_trouble_memorial_rule", {
        name: game.i18n.localize("ACKS.Settings.Tims_in_Trouble_Memorial_Rule.Name"),
        hint: game.i18n.localize("ACKS.Settings.Tims_in_Trouble_Memorial_Rule.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    game.settings.register("ACKS, The Game" ,"reinforcements", {
        name: game.i18n.localize("ACKS.Settings.Reinforcements.Name"),
        hint: game.i18n.localize("ACKS.Settings.Reinforcements.Hint"),
        default: false,
        scope: SETTING_SCOPES.WORLD,
        type: Boolean,
        config: true,
        onChange: _ => window.location.reload()
    });

    
}