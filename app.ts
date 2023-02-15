 // const test = (name:string) => {
 //    name. //after.(dot)I can see all metods of string or number or boolean
 // }

 // const test2 = (name:string):void =>{
 //    return 1 //void it is means that function is nothing returns.It will be emphasized in the return section
 // }

 // const test3 = (name:string):number|string[] =>{
 //    return [] // you can return only number or array of string(for example: 2 or ['k','o']!! not [5,5])
 // }
// const test4 = function (name){
//     return [name];
// };
//
//  console.log(test4('Tanya')); // to compile to JS need to write to the terminal command "tsc app.ts".To start this JS need to write "node app.js"

 // type MyType = number|string[]|boolean
 //
 // const test5 = (name:string):MyType =>{
 //     return [name]
 // } // if I have a lot of data types, I can declare it separately like 'MyType'. It must be named from capital letter.

 // const test6:number[] = [1,2,3,]

 // interface IUser {
 //    name:string,
 //    surname:string,
 //    age?: number, // ? means that this item is not required
 //    status:boolean
 // }

 // const user:IUser = {name:'Tanya', surname:'Korsun',age:26,status:false}
 // const user:Partial<IUser> = {name:"Tanya", age:26}// Partial<IUser> means that i will use some part of object. It is called as Generics.

 // interface IUser<DATA> {
 //    name:string,
 //    surname:string,
 //    age?: number, // ? means that this item is not required
 //    status:boolean,
 //    data:DATA
 // }
 //
 // const user:IUser<string[]> = {name:'Tanya', surname:'Korsun',age:26,status:false,data:['g','r']} //Here I have declared other items and also DATA(string[] = DATA)

 //*********************//
 // class User{
 //
 // private name:string
 //  private age:number
 //
 //  constructor(name:string,age:number) {
 //  this.name=name;
 //  this.age=age
 //  }
 // }

 // THE SAME AS ↓

 // class User{
 // constructor(private name:string, private age:number) {
 //    }
 // }
//  interface IShape {
//   area:() => number;
//   perimeter:()=>number
//  }
//
//  interface IGreeting {
//   greeting:()=>void;
//  }
//
//  class Rectangle implements IGreeting, IShape{
// // Implements - forces to implement metods which writes in Interface. Застосовує методи які описані в Interface. Якщо щось імплементуємо, то даємо гарантію що в цьому класі всі методи будуть застосовані. Можемо імплентувати і декілька методів, в такому випадку будуть застосовані всі класи.
//  constructor(private a:number, private b:number) {
//  }
//      area(): number{
//       return this.a * this.b // calculate area
//      }
//      perimeter(): number{
//       return this.a*2 + this.b*2 // calculate perimetr
//      }
//      greeting():void{
//       console.log('hello');
//      }
//  }
//
//  const rectangle = new Rectangle(1,2); // here we have passed those values
// // rectangle.greeting()
//  console.log(rectangle.area());
//  console.log(rectangle.perimeter());
//
//  class Triangle implements  IShape{
//      constructor(private a:number, private b:number, private c:number) {
//      }
//      area(): number{
//          return this.a * this.b * this.c
//      }
//      perimeter(): number{
//          return this.a*2 + this.b*2 + this.c*2
//      }
//
//  }
//
//  //Both of class implement IShape. and that means i can create new const. and write to the array these 'new classes'
//
//  const shapes:IShape[] = [new Rectangle(1,2), new Triangle(3,4,4), new Rectangle(5,6)]
//
//  for (const shape of shapes) {
//      console.log(shape.area());
//      console.log(shape.perimeter());
//  }

 //**********************************
//  const x = () => {
//     return 15
//  }
//  //  I want to check the type of return data some function (if I don`t see body of function, but only name)
//
// type MyType = ReturnType<typeof x>;
// const a:MyType = 5; // means that type of data is number
//  const b:MyType = 'hello' // it is not correct. B is emphasized.

//  import {userService} from "./services/userService";
//
// userService.getAll().then(({data})=>{git branch
//     console.log(data[0].address)
// })
 //
//fdgldm