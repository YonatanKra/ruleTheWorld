import {Combat, Combatant} from './combat';

describe('Combat', () => {
    let combatInstance;
    beforeEach(() => {
        combatInstance = new Combat();
    });

    describe('Combat init', () => {
        describe('Config validations', () => {
            it('should accept at least combatant parties and return error object if not', () => {
                const config = {
                    combatants: []
                };

                const resultNoCombatants = combatInstance.initCombat(config);

                config.combatants = [new Combatant()];

                const resultOneCombatant = combatInstance.initCombat(config);

                config.combatants = new Array(Math.round(Math.random() * 10) + 2).fill(0).map(i=>new Combatant());

                const resultWithMoreThanOneCombatant = combatInstance.initCombat(config);

                expect(resultNoCombatants.error).toEqual('Combat must be initiated with at least 2 combatants');
                expect(resultOneCombatant.error).toEqual('Combat must be initiated with at least 2 combatants');
                expect(resultWithMoreThanOneCombatant.error).toBeUndefined();
            });
            
            it('should make sure all events are functions', () => {
                
            });
        });

    });
});