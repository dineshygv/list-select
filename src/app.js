import $ from 'jquery';
import * as ko from "knockout";

$(() => {
    ko.applyBindings({
        title: "Hello!"
    }, $("#mainContainer")[0]);
}) 

import css from 'style-loader!css-loader!less-loader!./assets/css/style.less';