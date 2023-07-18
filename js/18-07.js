// 1
// const user = {
//   hobby: "hobby",
//   premium: "premium",
//   addKeys() {
//     return (this.mood = "happy");
//   },
//   removeValues() {
//     return (this.hobby = "skydiving");
//   },
//     removeKeys() {
//     for(const key of Object.keys(user)){
//     return this.premium = false;
// };

//   },
// };

// const {hobby, premium} = user;


// const workers = {
//     max: 200,
//     oleg: 450,
//     anny: 250000,
// }

// const {max, oleg, anny} = Workers;



// const obj = {
//     oleg: 345,
//     bobr: 567,
//     anny: 345,
// };

// const {oleg: olegObj, bobr, anny: annyObj} = obj;


// const arr = [
//   {
//     name: "Oleg-bobr",
//   },
//   {
//     name: "Anny",
//   },
// ];

// const object = {
//     name: "ughfg",
//     price: 345,
// }

// const [{name: nameArr}, {price}] = arr;
// const {name: nameObj, price: priceObj} = object;


// const arrObj = [
//   {
//     price: 4545,
//     quantity: 4,
//   },
//   {
//     price: 445,
//     quantity: 4,
//   },
// ];

// const [{ price: priceMax, quantity: quantityMax}, { price: priceMin, quantity: quantityMin}] = arrObj;

//2

const account = {
    transactionHistory: "positive",
    balance: 250000,
    transactionAction() {
        let message;
        if(transactionHistory === "positive" || transactionHistory === "normal") {
            message = "We can issue you credit";
            console.log(message);
        } else {
            message = "We cannot issue you credit";
            console.log(message);
        };
        return message;
    },
};

const {transactionHistory, balance} = account;
console.log(account.transactionAction(account));
