import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';
import { NotFoundComponentComponent } from './shared/not-found-component/not-found-component.component';

const routes: Routes = [
    {
        path:'',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: ShowCountryComponent
    },
    {
        path: '**',
        component: NotFoundComponentComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}