import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../shared/AppConstants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem(AppConstants.tokenStorageKey);

        if (token) {
            const cloned = req.clone(
                { headers: req.headers.set('Authorization', 'Bearer ' + token) }
            );
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
