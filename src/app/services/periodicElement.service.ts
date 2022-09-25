import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PeriodicElement } from "../models/periodicElement";

@Injectable()
export class PeriodicElementService{
    elementApiUrl = 'https://localhost:44366/api/PeriodicElements';
    constructor(private http:HttpClient ){}

    getElements(): Observable<PeriodicElement[]> {
        return this.http.get<PeriodicElement[]>(this.elementApiUrl);
    }

    createElements(element: PeriodicElement): Observable<PeriodicElement>{
        return this.http.post<PeriodicElement>(this.elementApiUrl,element);
    }

    editElements(element: PeriodicElement): Observable<PeriodicElement>{
        return this.http.put<PeriodicElement>(this.elementApiUrl, element);
    }

    deleteElement(id: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}?id=${id}`)
    }
}