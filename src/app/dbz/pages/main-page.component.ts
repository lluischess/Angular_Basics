import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    title = 'Main Page';

    constructor(public dbzService: DbzService) {

     }
}
