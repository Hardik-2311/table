fetch('https://reqres.in/api/users').then((data) => {
    return data.json();
}).then((Odata) => {
    // console.log(Odata.data[0].id);// how to check the value of json
    let tabledat = "";
    Odata.data.map((values) => {
        tabledat += `<tr>
    <th>${values.id}</th>
    <td>${values.email}</td>
    <td>${values.first_name}</td>
    <td>${values.last_name}</td>
    <td><img src="${values.avatar}" alt=""></td>
</tr>`;
    })
    document.getElementById("table-body").innerHTML = tabledat;

}).catch((err) => {
    document.write("Error: 404 Server Not Found");
})