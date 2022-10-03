import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClueService {
  private numberOfCellsToRemove = new BehaviorSubject<number>(32);
  public cellsToRemoveObservable = this.numberOfCellsToRemove.asObservable();
  private upperLimitReached = new BehaviorSubject<boolean>(false);
  public upperLimitReachedObservable = this.upperLimitReached.asObservable();
  private lowerLimitReached = new BehaviorSubject<boolean>(false);
  public lowerLimitReachedObservable = this.lowerLimitReached.asObservable();
  private maxNumberOfCellsToRemove = 60;
  private minNumberOfCellsToRemove = 4;
  private limitObserver = {
    next: (newClueNumber: number) => {
      this.checkUpperLimit(newClueNumber);
      this.checkLowerLimit(newClueNumber);
    },
    error: (e: Error) => console.error(e),
  };

  constructor() {
    this.cellsToRemoveObservable.subscribe(this.limitObserver);
  }

  public decrementCellsToRemove() {
    if (!this.upperLimitReached.value) {
      this.numberOfCellsToRemove.next(this.numberOfCellsToRemove.value - 2);
      this.lowerLimitReached.next(false);
    }
  }

  public incrementCellsToRemove() {
    if (!this.lowerLimitReached.value) {
      this.numberOfCellsToRemove.next(this.numberOfCellsToRemove.value + 2);
      this.upperLimitReached.next(false);
    }
  }

  private checkUpperLimit(newClueNumber: number) {
    if (newClueNumber === this.minNumberOfCellsToRemove) {
      this.upperLimitReached.next(true);
    }
  }

  private checkLowerLimit(newClueNumber: number) {
    if (newClueNumber === this.maxNumberOfCellsToRemove) {
      this.lowerLimitReached.next(true);
    }
  }
}
