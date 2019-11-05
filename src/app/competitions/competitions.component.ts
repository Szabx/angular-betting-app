import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-competitions',
    templateUrl: './competitions.component.html',
    styleUrls: ['./competitions.component.scss']
})

export class CompetitionsComponent implements OnInit {
    competitions: Array<Object>;

    constructor( private httpService: HttpService ) { }

    ngOnInit() {
        this.httpService.getCompetitions()
            .subscribe(
                (response: Array<Object>) => { this.competitions = response; },
                msg => console.log('Error getting competitions: ', msg) 
            );
    }
}
