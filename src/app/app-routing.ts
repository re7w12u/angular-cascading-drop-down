import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';

export const ROUTES: Routes = [
    {
        path: '', component: OrderListComponent
    },
    {
        path: 'order',
        children: [
            { path: '', component: OrderListComponent },
            { path: ':id', component: OrderComponent }
        ]
    }
];
