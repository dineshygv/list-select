import $ from 'jquery';
import * as ko from "knockout";
import * as _ from 'underscore';
import css from 'style-loader!css-loader!less-loader!./assets/css/style.less';

require("./pages/common/list-select/list-select");

function getButtons(selected, items) {
    var enableButton = ko.computed(() => {
        return (selected() != null);
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
            var selectedIndex = selected().index;
            items.splice(selectedIndex, 1);
        },
        enable: enableButton
    },]
}


$(() => {
    var selectItems = _.map(_.range(15), (item) => {
        return {
            id: item, 
            text: "item" + item
        }
    });

    var selected = ko.observable();
    var items = ko.observableArray(selectItems);
    var buttons = getButtons(selected, items);

    ko.applyBindings({
        title: "Sample",
        items,
        selected,
        buttons,
    }, $("#mainContainer")[0]);
}) 
