import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService);

  fontColorGood = 'green';
  fontColorBad = 'red';

  addComment(comment:string, index: number ){
    this.fruitlistdata.addCommentToFruit(comment, index);
  }
}
