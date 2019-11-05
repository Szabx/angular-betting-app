import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mergeMap } from 'rxjs/operators';
import { HttpService } from '../../../http.service';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
    event: EventSchema

    constructor(
        private httpService: HttpService,
        private route: ActivatedRoute 
        ) { }

    ngOnInit() {

        this.route.queryParams.pipe(
            mergeMap(
                (params: QueryParams) => { 
                    return this.httpService.getCompetitionMatch(params.id)
                }
            )

        ).subscribe(
        (response: EventSchema) => { this.event = response; },
        msg => console.log('Error getting event: ', msg) 
        );
    }

}

export interface QueryParams {
    id: Number
}

export interface EventSchema {
    head2head: Object,
    match: {
        venue: string,
        homeTeam: {
            id: Number,
            name: string
        },
        awayTeam: {
            id: Number,
            name: string
        }
    }
}
