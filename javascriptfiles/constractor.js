class c1{

    a;
    b;

    constructor(a,b){
        this.a=a;
        this.b=b;

    }
    f1(){
        console.log(this.a)
    }
}

let c=new c1("Sivam","Tester");
c.f1()