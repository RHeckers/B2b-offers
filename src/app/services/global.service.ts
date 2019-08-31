import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  mapEnumValuesToArray(enumValus) {
    const arr = [];
    for (const key in enumValus) {
      if (typeof enumValus[key] === 'number') {
        const newArrValue = {
          key: enumValus[key],
          value: key
        };
        arr.push(newArrValue);
      }
    }

    return arr;
  }
}
