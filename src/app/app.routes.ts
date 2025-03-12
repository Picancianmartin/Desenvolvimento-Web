import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'posts', component: PostsComponent,
    children: [
        {path: 'postdetail', component: PostDetailComponent},
        {path: 'postlist', component: PostListComponent},
    ]
    },
    {path:'**', component: NotFoundComponent}
];
