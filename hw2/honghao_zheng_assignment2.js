const itemObject = [
    {quantity:1, price: 200},
    {quantity:3, price: 350}, 
    {quantity:5, price: 400},
]

doubleObject = function(itemObject)
{
    let newObject = [];
    for (i=0;i<itemObject.length;i++)
    {
        newObject.push(Object.assign({quantity:itemObject[i].quantity*2, price:itemObject[i].price*2}));
    }
    return newObject;
};

let newObject1 = doubleObject(itemObject);

console.log(newObject1);

filterObject = function(itemObject)
{
    let newObject = [];
    for (i=0;i<itemObject.length;i++)
    {
        if ((itemObject[i].quantity > 2) && (itemObject[i].price > 300))
        {
            newObject.push(Object.assign({}, itemObject[i]));
        }
    }
    return newObject;
}

let newObject2 = filterObject(itemObject);
console.log(newObject2);

totalValue = function(itemObject)
{
    let sum = 0;
    for (i=0;i<itemObject.length;i++)
    {
        sum = sum + itemObject[i].quantity * itemObject[i].price;
    }
    return sum;
};

console.log(totalValue(itemObject));

const string = ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of   All The Elements In   An Array ';
str = string.toLowerCase().trim();
let str_arr = str.split(' ');
for (i=0;i<str_arr.length;i++)
{
   str_arr[i] = str_arr[i].replace(/[^a-z]/g,'');
}
newString = str_arr.join(' ');
console.log(newString);
