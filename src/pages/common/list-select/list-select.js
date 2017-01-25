import * as ko from "knockout";
import $ from 'jquery';
import * as _ from 'underscore';

require("../button-set/button-set");
var template = require("raw!./list-select.html");

class ListSelectViewModel {
    constructor(params) {
        this.title = params.title;
        this.items = this.getItems(params);
        this.buttons = params.buttons;
        this.selected = params.selected;
        this.selected(null);
        
        this.click = (dataItem, event) => {
            this.onSelect(dataItem, event);
        }

    }

    getItems(params) {
        let items = params.items().length ? params.items().slice() : [];

        items = _.map(items, (item, index) => {
            item = _.defaults(item, {
                css: ko.observable(""),
            });

            item.index = index;

            return item;
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