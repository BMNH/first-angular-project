import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable()
export class NavigationService {
    constructor() { }
    

    getNavigations() {
        return of([
            {
              displayName: 'Home',
              routePath: '/'
            },
            {
              displayName: 'Client',
              routePath: '/clients'
            },
            {
              displayName: 'Form',
              routePath: '/clients/form'
            }
          ]).pipe(delay(1000));
    }
}