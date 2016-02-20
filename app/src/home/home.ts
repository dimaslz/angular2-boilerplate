import {Component, View, OnInit} from "angular2/core";

@Component({
    selector: 'home',
    template: '<h3>home component</h3>'
})

export class Home {
    constructor() {
        console.log('Constructor Home component');
    };
}
