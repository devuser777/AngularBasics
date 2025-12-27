import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, concatMap, switchMap, exhaustMap, filter, take } from 'rxjs/operators';
import { from, interval } from 'rxjs';

@Component({
selector: 'app-merge-map',
templateUrl: './merge-map.component.html',
styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

constructor(private http: HttpClient) { }

ngOnInit(): void {
		const ids = from([1, 2, 3, 4, 5]); // Example observable emitting IDs

		const postIds = interval(100).pipe(
			filter(val => val > 0),
			take(5)
		); // Emits values 1,2,3,4,5 every second

		postIds.pipe(
			exhaustMap(id => this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)) // Replace with concatMap, switchMap, or exhaustMap
		).subscribe({
			next: data => console.log(data),
			error: err => console.error('HTTP error', err)
		});
  }
}
