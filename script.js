let hardik=fetch("https://reqres.in/api/users")
.then((value)=>{
    return value.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    document.write("Error:404 Server can't Found");
})