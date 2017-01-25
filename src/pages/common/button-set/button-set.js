import * as ko from "knockout";
import $ from 'jquery';
import * as _ from 'underscore';

var template = require("raw!./button-set.html");

class ButtonSetViewModel {
    constructor(params) {
        this.buttons = _.map(params.buttons, button => {
            return _.defaults(button, {
                icon: "",
                enable: ko.observable(true),
                css: "",
                click: () => {},                
            });
        });
    }
}

ko.components.register('button-set', {
    viewModel: ButtonSetViewModel,
    template: template
});