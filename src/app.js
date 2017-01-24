import $ from 'jquery';
import * as jqueryUi from 'jquery-ui';
import * as ko from "knockout";

require("./pages/common/list-select/list-select");

$(() => {
    ko.applyBindings({}, $("#mainContainer")[0]);
}) 

import css from 'style-loader!css-loader!less-loader!./assets/css/style.less';