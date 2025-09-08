import { Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

export const routes: Routes = [
	{
		path: '',
		component: TrangChuComponent
	},
	{
		path: 'trang-chu',
		component: TrangChuComponent
	}
];
