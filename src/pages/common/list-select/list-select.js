import * as ko from "knockout";
import $ from 'jquery';
import * as _ from 'underscore';

require("../button-set/button-set");
var template = require("raw!./list-select.html");

class ListSelectViewModel {
    constructor(params) {
        this.title = params.title;
        this.items = this.getItems(params);
        this.selected = ko.observable();

        this.click = (dataItem, event) => {
            this.onSelect(dataItem, event);
        }

        this.buttons = this.getButtons();
    }

    getButtons() {
        var enableButton = ko.computed(() => {
            return (this.selected() != null);
        });

        return [{
            icon: "glyphicon-plus",
            css: "btn-info",
            click: () => {

            },
        },{
            icon: "glyphicon-pencil",
            css: "btn-primary",
            click: () => {

            },
            enable: enableButton
        },{
            icon: "glyphicon-remove",
            css: "btn-danger",
            click: () => {

            },
            enable: enableButton
        },]
    }

    getItems(params) {
        let items = params.items().length ? params.items().slice() : [];

        items = _.map(items, (item, index) => {
            return _.defaults(item, {
                css: ko.observable(""),
                index
            });
        });

        return items;
    }

    onSelect(dataItem, event) {
        _.each(this.items, item => item.css(""));
        dataItem.css("active");
        this.selected(dataItem);
    }
}


ko.components.register('list-select', {
    viewModel: ListSelectViewModel,
    template: template
});