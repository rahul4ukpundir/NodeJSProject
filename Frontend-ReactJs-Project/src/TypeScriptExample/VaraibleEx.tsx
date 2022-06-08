import React from "react";

// Permative Data Type (number, string, boolean, null, undefined, void, )
let apple:number =10; 
let name: string ="Rahul Pundir";
let isTrue: boolean=true;
let nothing:null=null;
let undefineVar:undefined =undefined

// Non-Premative Data Type - Object Type(array, object, class, function)

//objects
let data : Date =new Date();
data.getDay();

//arrays
let colors: string []=["Red", "Green"];
let numbers: number[]=[1,2,3];
let truths: boolean[]=[true, false]

//classes

class  Car {
}

let car: Car= new Car();

//objects

let point:TestingProps={
    x: 20,
    y: 30
}


//function

const logNumber : (i:number)=>void= (i:number)=>{
    console.log(i);
}

const json= '{"x":10, "y":30}';
const response: {x: number, y:number} =JSON.parse(json);

const multi =(a:number, b:number):number=>{
    return a*b;
}


const add =(a:number, b:number):any=>{
    return a+b;
}

const throwError =(error:string):never=>{
    throw new Error("Error");
}


interface TestingProps{
    x:number,
    y:number
}



const person={
    id:10,
    name:"Rahul Pundir"

}

//without destruction
const getPersonDetails =(person: {id:number, name:string}):void=>{
   console.log(person.id);
   console.log(person.name)
}

//with destruction
const getDetails =({id, name}:{id:number, name:string}):void=>{
   console.log(id, name);
}

//Flexible Data Type
const importantDates: (Date| string)[]=[];
importantDates.push(new Date())
importantDates.push("Rahul Pundir"); 