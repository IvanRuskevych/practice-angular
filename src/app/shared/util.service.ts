import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  public getTaskIdInParams(): string {
    return this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  public navigateTo(route: string[]): void {
    this.router.navigate(route);
  }
}
