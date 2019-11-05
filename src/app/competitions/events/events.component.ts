import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mergeMap } from 'rxjs/operators';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
    events: Array<Object> = [];

    constructor( 
        private httpService: HttpService,
        private route: ActivatedRoute 
    ) { }

    ngOnInit() {
        this.route.queryParams.pipe(
            mergeMap(
                (params: QueryParams) => { 
                    return this.httpService.getCompetitionMatches(params.id)
                }
            )

        ).subscribe(
            (response: Array<Object>) => { this.events = response; },
            msg => console.log('Error getting events: ', msg) 
        );
    }
}

export interface QueryParams {
    id: Number
}
