import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors: string[] = generateColors();
}

const all_colors: string[] = ['Aqua', 'CadetBlue', 'DarkGrey', 'DarkGreen', 'DarkMagenta', 'Fuchsia',
'IndianRed', 'LightBlue', 'LightGreen', 'LightSalmon', 'OrangeRed', 'Orchid'];

function generateColors(): string[] {
  const colors: string[] = [];
  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 12);
    colors.push(all_colors[num]);
  }
  return colors;
}
