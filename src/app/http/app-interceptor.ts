import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    private url = '';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!req.url.startsWith('http')) {
            this.url = `${SERVER_API_URL}`;
        } else {
            this.url = '';
        }

        let headers = req.headers
            .set('X-Requested-With', 'XMLHttpRequest');

        if (!req.headers.has('Content-Type') && req.url.indexOf('files') === -1) {
            headers = headers.set('Content-Type', 'application/json');
        }

        if (!req.headers.has('Accept')) {
            headers = headers.set('Accept', 'application/json');
        }

        const request = req.clone({
            url: `${this.url}${req.url}`,
            headers
            });
        return next.handle(request);
    }
}
