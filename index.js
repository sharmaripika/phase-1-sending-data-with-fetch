// Add your code here
function submitData (name,email){
    const userData ={
        name:name,
        email:email
    }

    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers:{"Content-Type":'application/json',
        "Accept":'application/json' 
    },
    body:JSON.stringify(userData)
        
}) 
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // Append the id to the DOM
    const idElement = document.createElement('p');
    idElement.textContent = data.id;
    document.body.appendChild(idElement);
})
.catch(error => {
    // Append the error message to the DOM
    const errorElement = document.createElement('p');
    errorElement.textContent = error.message;
    document.body.appendChild(errorElement);
});
}



