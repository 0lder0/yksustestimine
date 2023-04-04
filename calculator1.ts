class Calculator{
    pressButton(b:string):void{
        this.panelContents+=b;
    }
    getPanelContents():string{return this.panelContents;}
    panelContents:string="";
}

export{
    Calculator
}