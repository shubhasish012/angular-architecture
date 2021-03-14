import { Component, OnInit } from '@angular/core';
import { environment } from '@src/environments/environment';
import { test } from "@app/test";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'architecture-app';

    constructor(private afs:AngularFirestore){

    }

    ngOnInit(): void {
        this.afs.collection('test').snapshotChanges().subscribe(items =>{
            console.log(items.map(x => x.payload.doc.data()));
        })
    }
}
