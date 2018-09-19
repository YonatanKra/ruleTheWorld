'use strict';

export class Combat {
    constructor() {

    }

    initCombat(config) {
        
        if (!config || config.combatants.length < 2) {
            return {
                error: 'Combat must be initiated with at least 2 combatants'
            }
        }

        return this;
    }
}

export class Combatant {
    constructor() {

    }
}