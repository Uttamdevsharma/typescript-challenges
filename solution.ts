const formatValue = (value : string | number | boolean) => {
    if(typeof value === "string"){
        return value.toUpperCase()
    }else if(typeof value === 'number'){
        return value * 10
    }else {
        return !value
    }
}




const getLength = (value : string | any[] ) => {
    if(typeof value === "string"){
        return value.length;
    }else if(Array.isArray(value)){
        return value.length
    }
}




class Person {
    name : string;
    age : number;
    
    constructor(name :string , age:number){
        this.name = name;
        this.age = age
    }

    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type BookItem = {
    title:string;
    rating :number;
}

const filterByRating = (value: BookItem[]) : BookItem[] => {
    const res: BookItem[] = []

    for (const item of value) {
        if (item.rating >= 4) {
            res.push(item);
        }
    }
    return res

}




type User={
    id: number;
    name: string;
    email : string;
    isActive : boolean
}
const filterActiveUsers = (users : User[] ) : User[] => {
    return users.filter((user) => user.isActive === true)
}






interface Book {
    title :string;
    author : string;
    publishedYear : number;
    isAvailable : boolean
}
const printBookDetails = (bookInfo : Book) => {
    return `Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published: ${bookInfo.publishedYear}, Available: ${bookInfo.isAvailable ? "Yes" : "No"}`
}





const getUniqueValues = (array1: (string | number)[],array2: (string | number)[]): (string | number)[] => {

    const res: (string | number)[] = []

    const checkExist = (array: (string | number)[], value:string | number) :boolean => {
        for(let i=0; i <array.length;i++){
            if(array[i] === value){
                return true
            }
        }
        return false;
    };

    for (let i = 0; i < array1.length; i++) {
        if (!checkExist(res, array1[i])) {
            res.push(array1[i]);
        }
    }


    for (let i = 0; i < array2.length; i++) {
        if (!checkExist(res, array2[i])) {
            res.push(array2[i]);
        }
    }
    return res;
}





interface Product {
    name :string;
    price :number;
    quantity : number;
    discount ?: number
}

const calculateTotalPrice = (products: Product[]): number => {
    if(products.length === 0){
        return 0
    }

    return products.reduce((total,product) => {
        const Price = product.price * product.quantity;
        const PriceDiscount = product?.discount ? (Price * product.discount) / 100 : 0
        return total+(Price - PriceDiscount)

    },0)
}



