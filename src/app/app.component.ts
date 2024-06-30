import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BehaviorSubject,
  filter,
  map,
  merge,
  Observable,
  range,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practice-angular';

  // // #1
  // constructor() {
  //   console.log('hi!');
  //
  //   range(1, 10)
  //     .pipe(
  //       filter((filterVal) => filterVal % 2 === 0),
  //       map((mapVal) => mapVal * 5),
  //     )
  //     .subscribe((val) => console.log('range val: ', val));
  // }

  // //   #2
  // constructor() {
  //   console.log('hi!');
  //
  //   // const numberSubj$: Subject<number> = new Subject<number>();
  //   const numberSubj$: Subject<number> = new BehaviorSubject<number>(0);
  //
  //   numberSubj$.next(-1); // зн до subscribe через BehaviorSubject
  //   numberSubj$.subscribe((val) => console.log('numberSubj$: ', val));
  //   numberSubj$.next(1);
  //   numberSubj$.next(2);
  //   numberSubj$.unsubscribe();
  //   // numberSubj$.next(3); // error => unsubscribe()
  // }

  constructor() {
    const evenNumber$ = new Observable((observer) => {
      for (let i = 2; i < 30; i += 2) {
        observer.next(i);
      }
    });

    const oddNumber$ = new Observable((observer) => {
      for (let i = 1; i < 30; i += 2) {
        observer.next(i);
      }
    });

    evenNumber$.subscribe((val) => console.log(val));
    console.log(evenNumber$);
    oddNumber$.subscribe((val) => console.log(val));

    merge(evenNumber$, oddNumber$).subscribe((val) =>
      console.log('merge: ', val),
    );
  }
}
