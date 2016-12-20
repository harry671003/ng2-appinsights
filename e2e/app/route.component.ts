import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    template: `<div><h1>{{ title }}</h1></div>`,
})
export class RouteComponent {
    title: string;

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.title = event.urlAfterRedirects;
            }
        });
    }
}