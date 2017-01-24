import * as ko from "knockout";

var template = require("raw!./list-select.html");

class ListSelectViewModel {
    constructor(params) {
        this.title = params.title;
    }
}


ko.components.register('list-select', {
    viewModel: ListSelectViewModel,
    template: template
});