let array = [

	{
	  "userId": 1,
	  "id": 1,
	  "title": "delectus aut autem",
	  "completed": false
	},
	{
	  "userId": 1,
	  "id": 2,
	  "title": "quis ut nam facilis et officia qui",
	  "completed": true
	},
	{
	  "userId": 1,
	  "id": 3,
	  "title": "fugiat veniam minus",
	  "completed": false
	},
	{
	  "userId": 1,
	  "id": 4,
	  "title": "et porro tempora",
	  "completed": false
	},
	{
	  "userId": 1,
	  "id": 5,
	  "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
	  "completed": false
	},
	{
	  "userId": 1,
	  "id": 6,
	  "title": "qui ullam ratione quibusdam voluptatem quia omnis",
	  "completed": true
	},
	{
	  "userId": 1,
	  "id": 7,
	  "title": "illo expedita consequatur quia in",
	  "completed": false
	},



	{
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  },
  {
    "userId": 2,
    "id": 21,
    "title": "suscipit repellat esse quibusdam voluptatem incidunt",
    "completed": false
  },
  {
    "userId": 2,
    "id": 22,
    "title": "distinctio vitae autem nihil ut molestias quo",
    "completed": true
  },
  {
    "userId": 2,
    "id": 23,
    "title": "et itaque necessitatibus maxime molestiae qui quas velit",
    "completed": false
  },
  {
    "userId": 2,
    "id": 24,
    "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
    "completed": false
  },
  {
    "userId": 2,
    "id": 25,
    "title": "voluptas quo tenetur perspiciatis explicabo natus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 26,
    "title": "aliquam aut quasi",
    "completed": true
  },
  {
    "userId": 2,
    "id": 27,
    "title": "veritatis pariatur delectus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 28,
    "title": "Nesciunt totam sit blanditiis sit",
     "completed": false
  },

];
// table js 
let count=0;
	for(let i=0; i<array.length;i++){
		let tbodyrow = document.createElement("tr");
		let tdata = document.createElement('td');
		let tdata2 = document.createElement("td");
		let tdata3 = document.createElement("td");
		tbodyrow.appendChild(tdata);
		tbodyrow.appendChild(tdata2);
		tbodyrow.appendChild(tdata3)
		tdata.innerHTML = array[i].id;
		tdata2.innerHTML = array[i].title;
		if(array[i].completed== true){
			tdata3.innerHTML ="completed";
			count++;
		}
		else{
			tdata3.innerHTML ="pending";
		}
		document.getElementById('tbodydata').appendChild(tbodyrow);
	}
		// outside of loop section
		// table footer data
	
		let tfoot = document.createElement("tr");
		let fdata1 = document.createElement("td");
		let fdata2 = document.createElement("td");
		let fdata3 = document.createElement("td");
		tfoot.appendChild(fdata1);
		tfoot.appendChild(fdata2);
		tfoot.appendChild(fdata3);
		fdata3.innerHTML = count + " completed items";
		document.getElementById('tfootdata').appendChild(tfoot);

// input box find value

  function findvalue(){
	let input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myinput");
    filter = input.value.toLowerCase();
    table = document.getElementById("tableappend");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
            document.getElementById("alertmessage").innerHTML = "";
        } else {
            tr[i].style.display = "none";
           document.getElementById("alertmessage").innerHTML = "no item found";
        }
    }
}
// we can create a dropdown have 3 option
// are completed, uncompleted, and all
// when user click on completed button
// then all the data shown in table in completed
// as well as with other option as well.

  function compitem(){
    for(let i=0; i<array.length;i++){
      let tbodyrow = document.createElement("tr");
      let tdata1 = document.createElement("td");
      let tdata2 = document.createElement("td");
      let tdata3 = document.createElement("td");
      tbodyrow.appendChild(tdata1);
      tbodyrow.appendChild(tdata2);
      tbodyrow.appendChild(tdata3);
      tdata1.innerHTML = array[i].id;
      tdata1.innerHTML = array[i].title;
      tdata1.innerHTML = array[i].completed;
      if(array[i].completed == true){
        document.getElementById("tbodydata").appendChild(tbodyrow);
        // document.getElementById("tfootdata").style.display = "none";
        console.log(array[i]);
      }
    }
    
  }
    // function resultchange(event){
    //   console.log(event);
    //   var x = (event.value || event.options[event.selectedIndex].value);  //crossbrowser solution =)
    //   alert(x);
      
    // }
//   document.getElementById('dropchange').onchange = function(event) {
//     alert(this.value);
// }

