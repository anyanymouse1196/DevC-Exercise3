function test() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterAja");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabel");
    tr = table.getElementsByTagName("tr");
    // console.log(tr.length);
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
          console.log(td);
        if (td) {
            txtValue = td.textContent || td.innerText;
            // console.log(td.innerText);
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }       
        }
  }



fetch("https://swapi.co/api/planets/?format=json").then(function(resp){
    return resp.json();
}).then(function(data){
    var results = data.results;   // karena data pada Array result banyak, maka saya ambil data dari Array = results saja.

    var temp = "";
    console.log(data);

    var thArray = [
        "Climate",
        "Created",
        "Diameter",
        "Edited",
        "Films",
        "Gravity",
        "Name",
        "Orbital period",
        "Population",
        "Residents",
        "Rotation period",
        "Surface water",
        "Terrain",
        "Url"];

    
    thArray.forEach(myFunction);

    function myFunction(item) {
      document.getElementById("tableHead").innerHTML += "<th>"+item+"</th>"; 
    }

    results.forEach(ul => {
        temp +="<tr>";
        temp +="<td>"+ul.climate+"</td>";
        temp +="<td>"+ul.created+"</td>";
        temp +="<td>"+ul.diameter+"</td>";
        temp +="<td>"+ul.edited+"</td>";
        temp +="<td>"+ul.films.pop()+"</td>"; // karena data terlalu banyak, saya ambil data pertama saja
        temp +="<td>"+ul.gravity+"</td>";
        temp +="<td>"+ul.name+"</td>";
        temp +="<td>"+ul.orbital_period+"</td>";
        temp +="<td>"+ul.population+"</td>";
        temp +="<td>"+ul.residents.pop()+"</td>";  // karena data terlalu banyak, saya ambil data pertama saja
        temp +="<td>"+ul.rotation_period+"</td>";
        temp +="<td>"+ul.surface_water+"</td>";
        temp +="<td>"+ul.terrain+"</td>";
        temp +="<td>"+ul.url+"</td>";
        temp +="</tr>";
    });
    document.getElementById("dataIni").innerHTML = temp;
});

