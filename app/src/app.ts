///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import './app.scss';
import {bootstrap} from "angular2/platform/browser";
import {Component, View, OnInit, provide} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouterLink, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Home} from './home/home';
import {Contact} from './contact/contact';
// import {componentProxyFactory} from './componentProxyFactory';

declare var System: any;
@Component({
    selector: 'app',
    template: `
    <h2>app component</h2>
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['Contact']">Contact</a>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})

@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
    // component: componentProxyFactory({
    //   path: './contact/contact',
    //   provide: m => m.Contact
    // }),
  }
])

export class App {
    constructor() {
        console.log('Constructor Angular2 Boilerplate');
    };
}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]).catch(console.error);