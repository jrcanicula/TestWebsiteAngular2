import { Injectable } from '@angular/core'
import {
    Http, ConnectionBackend, RequestOptions,
    Response, RequestOptionsArgs
} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import * as _ from 'lodash';

@Injectable()
export class CustomHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions)
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let modifiedOptions = _.assign(this.defaultHttpHeaders, options)

        return super.get(url, modifiedOptions)
            .catch(this.handleHttpError)
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let modifiedOptions = _.assign(this.defaultHttpHeaders, options)

        return super.post(url, body, modifiedOptions)
            .catch(this.handleHttpError)
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let modifiedOptions = _.assign(this.defaultHttpHeaders, options)

        return super.put(url, body, modifiedOptions)
            .catch(this.handleHttpError)
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let modifiedOptions = _.assign(this.defaultHttpHeaders, options)

        return super.delete(url, modifiedOptions)
            .catch(this.handleHttpError)
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let modifiedOptions = _.assign(this.defaultHttpHeaders, options)

        return super.patch(url, body, modifiedOptions)
            .catch(this.handleHttpError)
    }

    private get defaultHttpHeaders() {

        // get JWT Token in localStorage
        let jwt = localStorage.getItem('JWT')

        // get Email/EmpId in localStorage
        let email = localStorage.getItem('Email')
        let empID = localStorage.getItem('EmpId')

        return {
            headers: {
                'Authorization': jwt,
                'Email': email,
                'EmpId': empID,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    private handleHttpError(error: Response) {
        // :Globally handle http errors here

        return Observable.throw(error)
    }
}
