import * as ko from "knockout";
import $ from 'jquery';
import * as _ from 'underscore';

var template = require("raw!./button-set.html");

class ButtonSetViewModel {
    constructor(params) {
        this.buttons = _.map(params.buttons, button => {
            var btnWithDefaults = _.defaults(button, {
                icon: "",
                enable: ko.observable(true),
                css: "",
                click: () => {},                
            });

            // btnWithDefaults.css = ko.computed(() => {
            //     return [btnWithDefaults.icon, (btnWithDefaults.enable() ? btnWithDefaults.css : 'btn-disabled')].join(" ");
            // });

            return btnWithDefaults;
        });
    }
}


ko.components.register('button-set', {
    viewModel: ButtonSetViewModel,
    template: template
});