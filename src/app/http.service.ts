import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map }        from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private config = {
        competition: 'https://api.football-data.org/v2/competitions',
        match: 'https://api.football-data.org/v2/matches',
    };

    private additionalRequestParams = {
        headers: {
            ['X-Auth-Token']: 'a3bd24ad5be24c958fa950156eb83ae3'
        }
    };

    constructor(private http: HttpClient) {
    }

    public getCompetitions(): Observable<Array<Object>> {
        return this.http.get(`${this.config.competition}`, this.additionalRequestParams)
            .pipe(map((response: CompetitionsResponse) => response.competitions));
    }

    public getCompetition(competitionId: Number) {
        return this.http.get(`${this.config.competition}/${competitionId}`, this.additionalRequestParams);
    }

    public getCompetitionMatches(competitionId: Number) {
        return this.http.get(`${this.config.match}?competitions=${competitionId}`, this.additionalRequestParams)
            .pipe(map((response: MatchResponse) => response.matches));
    }

    public getCompetitionMatch(matchId: Number) {
        return this.http.get(`${this.config.match}/${matchId}`, this.additionalRequestParams);
    }
}

export interface CompetitionsResponse {
    competitions: Array<Object>,
    count: Number,
    filters: Object
}

export interface MatchResponse {
    matches: Array<Object>,
    count: Number,
    filters: Object
}