import {Component} from '@angular/core';
import {ICardContent} from '../../model/card.interface';

const contentIndexes: ICardContent[] = [
  {
    id: 0,
    value: 'First',
    img: './assets/images/first.jpg'
  },
  {
    id: 0,
    value: 'Second',
    img: './assets/images/second.png'
  },
  {
    id: 0,
    value: 'Third',
    img: './assets/images/third.jpg'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {

  public contentIndexes: any[] = contentIndexes;

  public trackById(index: number, {id}: ICardContent): number {
    return id;
  }
}
