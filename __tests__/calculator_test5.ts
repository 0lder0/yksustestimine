import {Calculator} from "../calculator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('mark and panel adding', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('mark and panel subtracting', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    expect(calcobj.getPanelContents()).toBe("3");
});




test('mark and panel multiplying', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('mark and panel dividing', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    expect(calcobj.getPanelContents()).toBe("3");
});


test('adding 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
});

test('second calculation start', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('4');
    expect(calcobj.getPanelContents()).toBe("4");
});

test('continous calculation', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('+');
    calcobj.pressButton('1');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('floating point', ()=>{
    calcobj.pressButton('5');
    calcobj.pressButton('/');
    calcobj.pressButton('3');
    calcobj.pressButton('=');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(1.6666666, 6);
});