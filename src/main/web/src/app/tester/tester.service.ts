import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IDevice } from './device.interface';
import { ITesterBugCount } from './tester-bug-count.interface'

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  constructor(private http: HttpClient) { }

  public getTesterCountries(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8080/api/tester/countries`).pipe(
      map((data: string[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Error loading countries!' );
      })
   );
  }

  public getTesterDevices(): Observable<IDevice[]> {
    return this.http.get<IDevice[]>(`http://localhost:8080/api/tester/devices`).pipe(
      map(response => response),
       catchError( error => {
        return throwError( 'Error loading devices!' );
      })
    );
  }

  public getTesteBugCount(countries: string[], deviceIds: number[]): Observable<ITesterBugCount[]> {
    const params = new HttpParams()
      .set('countries', countries.join(', '))
      .set('deviceIds', deviceIds.join(', '));
   
    return this.http.get<ITesterBugCount[]>(`http://localhost:8080/api/tester/tester-bug-count`, {params}).pipe(
      map(response => response),
       catchError( error => {
        return throwError( 'Error loading tester bug counts!' );
      })
    );
  }
}
