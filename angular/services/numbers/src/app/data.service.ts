import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  alphaNums: number[];
  betaNum: number;
  differenceNum: number;


  generateAlpha(): number[] {
    this.alphaNums = [];
    this.alphaNums.push(Math.floor(Math.random() * 10));
    this.alphaNums.push(Math.floor(Math.random() * 10));
    return this.alphaNums;
  }

  generateBeta(): number {
    this.betaNum = Math.floor(Math.random() * 10);
    return this.betaNum;
  }

  generateDifference(): number {
    this.differenceNum = this.alphaNums[0] + this.alphaNums[1] - this.betaNum;
    return this.differenceNum;
  }
}
