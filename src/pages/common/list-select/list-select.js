import * as ko from "knockout";
import $ from 'jquery';
import * as _ from 'underscore';

var template = require("raw!./list-select.html");

class ListSelectViewModel {
    constructor(params) {
        this.title = params.title;
        this.items = ko.observableArray(this.getItems(params));

        this.click = (dataItem, event) => {
            this.onSelect(dataItem, event);
        }
    }

    getItems(params) {
        let items = params.items().length ? params.items().slice() : [];

        items = _.map(items, (item, index) => {
            return _.defaults(item, {
                css: "",
                index
            });
        });

        return items;
    }

    onSelect(dataItem, event) {
        $("#" + this.title + " li").removeClass("active");
        $($("#" + this.title + " li")[dataItem.index]).addClass("active");
    }
}


ko.components.register('list-select', {
    viewModel: ListSelectViewModel,
    template: template
});