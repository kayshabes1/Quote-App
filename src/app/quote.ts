export class Quote {
    showDescription:boolean
    constructor(public name:string,public description:string,public author:string, public completeDate:Date,public numberOflikes:number,public numberOfdislikes:0){
this.showDescription=false;
    }
}
