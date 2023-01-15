import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'provider' //
})
export class CategoryPipe implements PipeTransform { //esta implementandod uma interaace do ahgular que se cahama pipeTranform

  transform(value: string): string {
    switch(value){
      case 'front-end': return 'code';
      case 'back-end': return 'computer';

    }
    return 'code';
  }

}
