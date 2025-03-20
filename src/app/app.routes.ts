import { convertToParamMap, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { IMCComponent } from './imc/imc.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'calcular-media', component: CalcularMediaComponent},
    {path: 'imc', component: IMCComponent},
    {path: 'conversor-temperatura', component: ConversorTemperaturaComponent},
    {path: 'calculadora', component: CalculadoraComponent},
    {path: 'apolice', component: ApoliceComponent},
    {path: 'posts', component: PostsComponent,
    children: [
        {path: 'postdetail', component: PostDetailComponent},
        {path: 'postlist', component: PostListComponent},
    ]
    },
    {path:'**', component: NotFoundComponent}
];
