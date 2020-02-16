import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

   store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

 load(key) {
    const str = localStorage[key] || 'null';
    return JSON.parse(str);
}
}
