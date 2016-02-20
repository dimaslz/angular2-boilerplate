import {Component, View, OnInit} from "angular2/core";

@Component({
    selector: 'contact',
    template: '<h3>contact component</h3>'
})

export class Contact {
    constructor() {
        console.log('Constructor Contact component');
    };
}
