export class Isikukood{
    constructor(protected kood:string){}
    sugu(){
        return parseInt(this.kood[0]) % 2 == 0 ? "N" : "M";
    }
    sünniaasta(){
        let aasta = parseInt(this.kood.substr(1,2));
        let sajand = parseInt(this.kood[0]);
        if (sajand == 3 || sajand == 4) {
            return 1900 + aasta;
        } else if (sajand == 5 || sajand == 6) {
            return 2000 + aasta;
        } else {
            return 2100 + aasta;
        }
    }
}