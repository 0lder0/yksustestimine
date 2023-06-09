import {Calculator} from "../calculator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("");
});

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("7");
});
test('multiple symbols input', ()=>{
    calcobj.pressButton('1');
    calcobj.pressButton('2');
    calcobj.pressButton('3');
    expect(calcobj.getPanelContents()).toBe("123");
});
test('clear panel', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('C');
    expect(calcobj.getPanelContents()).toBe("0");
});
