// fetching data table

fetch('https://jsonplaceholder.typicode.com/users').then(function(data){
  return data.json()
}).then(function(data){
  // using for each loop
  data.forEach(function(a){
    let tbodyrow = document.createElement("tr");
    let tdata = document.createElement('td');
    let tdata2 = document.createElement("td");
    let tdata3 = document.createElement("td");
    let tdata4 = document.createElement("td");
    let tdata5 = document.createElement("td");
    // append table data in table row
    tbodyrow.appendChild(tdata);
    tbodyrow.appendChild(tdata2);
    tbodyrow.appendChild(tdata3);
    tbodyrow.appendChild(tdata4);
    tbodyrow.appendChild(tdata5);
    // inner html of table
    tdata.innerHTML = a.name;
    tdata2.innerHTML = a.email;
    tdata3.innerHTML = a.address.city;
    tdata4.innerHTML = a.company.name;
    tdata5.innerHTML = a.address.street + " " + a.address.suite + a.address.zipcode;

    document.getElementById('tbodydata').appendChild(tbodyrow);
  });
})



