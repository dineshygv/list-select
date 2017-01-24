import $ from 'jquery';
import * as ko from "knockout";

$(() => {
    ko.applyBindings({
        title: "Hello!"
    }, $("#mainContainer")[0]);
}) 
