class c1{

     b="js"

    f1(){
        let a=90
        console.log("f1 function")
        console.log(this.b)

    }
    f2(){
        console.log("f2 function")
    }
}


let a=new c1();
a.f1();
a.f2();
