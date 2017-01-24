import $ from 'jquery';
import * as ko from "knockout";
import * as _ from 'underscore';

require("./pages/common/list-select/list-select");

$(() => {
    let selectItems = _.map(_.range(15), (item) => {
        return {
            id: item, 
            text: "item" + item
        }
    })

    let listSelectOptions = {
        title: "Sample",
        items: ko.observableArray(selectItems)
    }

    ko.applyBindings({
        listSelectOptions,
    }, $("#mainContainer")[0]);
}) 

import css from 'style-loader!css-loader!less-loader!./assets/css/style.less';