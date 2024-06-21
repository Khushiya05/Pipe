import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:'file'
})
export class FilePipe implements PipeTransform{
    transform(value: any) {
        console.log(value);
       return (value/(1024*1024)).toFixed(2)+"mb"
    }
}