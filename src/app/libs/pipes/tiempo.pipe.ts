import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'tiempo'
})
export class TiempoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
     

    if(value === "" && args[0] === ""){
      return moment().locale('es').format('LLLL')
    }
    else if(value===null || value ===""){
        return moment().locale('es').format('LL')
    }
    else if(args[0]===""){
      return moment(value).locale('es').format('LL')
    }
    else{
        return moment(value).locale('es').format(args[0])
    }
    
    
  }

}
