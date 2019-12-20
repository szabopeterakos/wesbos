console.dir(this);


const value = 1;
let value2 = value;
value2 = 4;
console.log('TCL: value', value);
console.log('TCL: value2', value2);


let stringValue = 'string' 
let stringValue2 = stringValue
stringValue2 = 'string3' 

console.log('TCL: stringValue', stringValue);
console.log('TCL: stringValue2', stringValue2);


let arr = []
let arr2 = arr
arr2.push('maki');
console.log('TCL: arr', arr);
console.log('TCL: arr2', arr2);

// protected
let arrP = ['protected']
// let arrP2 = [...arrP];
let arrP2 = arrP.slice();
arrP2.push('bug');
console.log('TCL: arrP', arrP);
console.log('TCL: arrP2', arrP2);


// protected 2
let arrPP = ['protected 2']
let arrPP2 = Object.assign([],arrPP)
arrPP2.push('bug 2');
console.log('TCL: arrP', arrPP);
console.log('TCL: arrP2', arrPP2);


//objects
let obj = {name:'sanyi',age:44};
let obj2 = obj;
obj2.age = 100;

console.log(obj);
console.log(obj2);

let objA = {name:'sanyi',age:44};
let objA2 = {...objA};
objA2.age = 100;

console.log(objA);
console.log(objA2);

console.clear();

//nested object or array
// one level deep :::::::::::::::::::::

let nested = {
  name:'NestMan',
  age:201,
  skills:[
    {name: 'teleport', level: 4},
    {name: 'laser', level: 1},
    {name: 'power', level: 14}
  ]
}

let nestCopy = {...nested};
nestCopy.skills.push({name:'jump',level:8})
console.log('TCL: nested', nested);
console.log('TCL: nestCopy', nestCopy);

// the ugly way to deepcopy

let deepOne = JSON.parse(JSON.stringify(nested));
deepOne.skills = [];
deepOne.skills.push({name:'deep copy',level:1})

console.log('TCL: deepOne', deepOne);
