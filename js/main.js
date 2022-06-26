const elForm = document.getElementById('form');
const elFname = document.getElementById('fname');
const elLname = document.getElementById('lname');
const elAge = document.getElementById('age');
const API = 'https://student-express.herokuapp.com/site/student'


elForm.addEventListener('submit' , e =>{
    e.preventDefault();
    fetch(API, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            firstName: elFname.value,
            lastName:elLname.value,
            age:elAge.value,
        })
    })
    .then(res =>res.json())
    .then(data => console.log(data))
    e.target.reset();
})
