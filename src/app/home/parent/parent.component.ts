
import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    subjects;

    constructor() {
        this.subjects = [
            { 'name': 'HTML', 'pages': 14 },
            { 'name': 'CSS', 'pages': 12 },
            { 'name': 'JAVASCRIPT ', 'pages': 24 },
            { 'name': 'ANGULAR', 'pages': 94 },
            { 'name': 'JQUERY', 'pages': 74 }
        ]
    }
}