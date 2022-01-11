const tableInfo = [ 
    { 
        studentName: 'John', 
        Age: 19, 
        Phone: '455 - 983 - 0903', 
        Address: '123 Ave, San Francisco, CA, 94011'}, 
    { 
        studentName: 'Alex', 
        Age: 21, 
        Phone: '455 - 983 - 0912', 
        Address: '456 Rd, San Francisco, CA, 94012'}, 
    { 
        studentName: 'Josh', 
        Age: 22, 
        Phone: '455 - 345 - 0912', 
        Address: '789 Dr, Newark, CA, 94016' }, 
    { 
        studentName: 'Matt',
        Age: 23, 
        Phone: '321 - 345 - 0912', 
        Address: '223 Dr, Sunnyvale, CA, 94016'}
]; 

let table = document.getElementById("myTable");

tableInfo.forEach((item)=>{
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = item.studentName
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = item.Age;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = item.Phone;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = item.Address;
    tr.appendChild(td4);

    table.appendChild(tr);
});

const listArray = ['HTML','JavaScript','CSS','React','Redux','Java'];

let list = document.getElementById("myList");

listArray.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item.toString();
    list.appendChild(li);
});

const dropDownList = [
    { value: 'newark', content: 'Newark' }, 
    { value: 'santaClara', content: 'Santa Clara' }, 
    { value: 'unionCity', content: 'Union City' }, 
    { value: 'albany', content: 'Albany' }, 
    { value: 'dalyCity', content: 'Daly City' }, 
    { value: 'sanJose', content: 'San Jose' }, 
]

let dropdownList = document.getElementById("cityList");

dropDownList.forEach((item) =>{
    let option = document.createElement("option");
    option.value = item.value;
    option.text = item.content;
    dropdownList.appendChild(option);
});