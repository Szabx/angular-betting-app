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
    event: Object

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
        (response: Array<Object>) => { this.event = response; },
        msg => console.log('Error getting event: ', msg) 
        );
    }

}

export interface QueryParams {
    id: Number
}