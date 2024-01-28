import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillscComponent } from './skillsc/skillsc.component';
import { SkillscppComponent } from './skillscpp/skillscpp.component';
import { SkillsreactComponent } from './skillsreact/skillsreact.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    {
        component:HomeComponent,path: 'home',
    },
    {
        component:AboutComponent,path: 'about',
    },
    {
        component:SkillsComponent,path:'skills',
        children:[
            {
                component:SkillscComponent,path:'c'
            },
            {
                component:SkillscppComponent,path:'cpp'
            },
            {
                component:SkillsreactComponent,path:'react'
            }
        ]
    },
    {
        component:Page404Component,path:'**'
    }
];
