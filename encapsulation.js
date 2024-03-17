class Tiger{
    #spped = 100; // private
    location = 'Sundarban' // public
    constructor(name){
        this.name =  name;
        this.#spped = 125; // 100 er bodole 125 set kore diyechi new kore
    }

    run(){
        console.log(`I am ${this.name}. I am running at ${this.#spped}mph. I live in ${this.location}.`);
    }
}

const Royal = new Tiger('Royal Bengal');
// console.log(Royal);
Royal.location = 'Barishal'; // public declare kora silo age sundarban, public houate class er bahir theke change kore dite partesi.
Royal.run();