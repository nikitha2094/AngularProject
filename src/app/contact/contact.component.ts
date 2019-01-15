import { Component } from '@angular/core';
import { ContactService } from './services/contact.service'
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent {
    public usersList: any;
    public userObj = {};
    constructor(public _contactService: ContactService) { }
    getUsers() {
        //Actual servicce call

        // this._contactService.getUsers().subscribe(data => {
        //     console.log(data)
        // })

        this.usersList = [
            { 'firstName': 'ramu', 'phoneNumber': 8096018435362 },
            { 'firstName': 'ramu1', 'phoneNumber': 809605453362 },
            { 'firstName': 'ramu2', 'phoneNumber': 809601845345362 },
            { 'firstName': 'ramu3', 'phoneNumber': 809601435348362 }
        ]

    }


    addUser(obj) {
        //service call
        // this._contactService.addDriver(obj).then(response => {
        //     console.log(response)
        // })

        /**
         * Write here conditions
         */
        this.usersList.push(obj)


    }

    public editUserData;
    editUser(editObj) {
        this.editUserData = editObj
    }
}



