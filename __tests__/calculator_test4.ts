import {Calculator} from "../calculator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('adding 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
});

test('subtracting 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1");
});




test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('divide 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1.5");
});

test('divide 2', ()=>{
    calcobj.pressButton('100');
    calcobj.pressButton('/');
    calcobj.pressButton('5');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("20");
});

test('multiply 3', ()=>{
    calcobj.pressButton('100');
    calcobj.pressButton('X');
    calcobj.pressButton('100');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("10000");
});