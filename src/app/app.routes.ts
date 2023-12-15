import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/page/1' },
  { path: 'character/page/:id', component: CharacterComponent },
  { path: '**', redirectTo: 'character/page/1' }
];
