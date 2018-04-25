import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gold = 0;
  activities: string[] = [];
  messages = {
    'Farm': 'Earns 2-5 Gold',
    'Cave': 'Earns 5-10 Gold',
    'House': 'Earns 7-15 Gold',
    'Casino': 'Earn or lose up to 100 Gold'
  };

  getMessage(building: string): string {
    return this.messages[building];
  }

  getGold(): number {
    return this.gold;
  }

  getActivities(): string[] {
    return this.activities;
  }

  earnGold(building: string): void {
    if (building === 'Farm') {
      const new_gold = Math.floor((Math.random() * 4) + 2);
      const new_activity = 'Earned ' + new_gold + ' gold from the Farm.';
      this.gold += new_gold;
      this.activities.push(new_activity);
    } else if (building === 'Cave') {
      const new_gold = Math.floor((Math.random() * 6) + 5);
      const new_activity = 'Earned ' + new_gold + ' gold from the Cave.';
      this.gold += new_gold;
      this.activities.push(new_activity);
    } else if (building === 'House') {
      const new_gold = Math.floor((Math.random() * 9) + 7);
      const new_activity = 'Earned ' + new_gold + ' gold from the House.';
      this.gold += new_gold;
      this.activities.push(new_activity);
    } else if (building === 'Casino') {
      const new_gold = Math.floor((Math.random() * 201) - 100);
      let new_activity = '';
      if (new_gold < 0) {
        new_activity = 'Lost ' + Math.abs(new_gold) + ' gold at the casino.';
      } else {
        new_activity = 'Won ' + Math.abs(new_gold) + ' gold at the casino!';
      }
      this.gold += new_gold;
      // simple protection from going negative, could be more elaborate
      if (this.gold < 0) {
        this.gold = 0;
      }
      this.activities.push(new_activity);
    }
  }

}
