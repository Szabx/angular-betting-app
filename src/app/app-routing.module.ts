import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { EventsComponent } from './competitions/events/events.component';
import { EventComponent } from './competitions/events/event/event.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
    path: '',
    component: CompetitionsComponent
}, {
    path: ':competition-name',
    component: EventsComponent
}, {
    path: ':competition-name/:event-name',
    component: EventComponent
}, {
    path: '**',
    component: NotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
