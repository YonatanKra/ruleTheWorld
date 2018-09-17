import { fbAuth } from "../firebase/index";

class MenuItemModel {
    /**
     *
     * @param config - {
     *      name <string>
     *      template <string>
     *      disabled <boolean|function>
     *      displayed <boolean|function>
     *      onClick <function>
     *      onMouseEnter <function>
     *      onMouseLeave <function>
     * }
     */
    constructor(config) {
        Object.assign(this, config);
    }
}

export const MainMenuModel = {
    items: [
        new MenuItemModel ({
            name: 'Start a new game',
            template: 'New Game',
        }),
        new MenuItemModel ({
            name: 'Login',
            template: 'Login',
            visible: function() {
                return !fbAuth.currentUser;
            },
            onClick: function(e, datum) {
                alert('This is a login');
            },
            onMouseEnter: function(e, datum) {
                e.target.style.color = 'green';
            }
        }),
        new MenuItemModel ({
            name: 'Load Game',
            template: 'Load Game',
            onMouseLeave: function(e, datum) {
                e.target.style.color = 'red';
            }
        }),
    ],
        onClick: function(e, datum) {
            alert(datum.template);
        },
        onMouseEnter: function(e, datum) {
            e.target.style.color = 'blue';
        },
        onMouseLeave: function(e, datum) {
            e.target.style.color = 'inherit';
        }
}
    ;