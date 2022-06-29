const elTemp = document.getElementById('template').content;
async function my(){
    let reponce = await fetch(API)
    let data = await reponce.json()
    render(data.message);
}
function render(api){
    api.forEach(el  => {
        const temp = elTemp.cloneNode(true)
        const fname = temp.querySelector('#firstnam')
        const lname = temp.querySelector('#lastname')
        const ages = temp.querySelector('#age')
        const userName =  temp.querySelector('#editName')
        userName.textContent= el.first_name;
       const userLastname = temp.querySelector('#editLastname') 
        userLastname.textContent = el.last_name;
        const elAge =  temp.querySelector('#editAge')
        elAge.textContent = el.age;
       
        const elForms = temp.querySelector('.edit-form')
        const div = temp.querySelector('.div')
        div.id = el.student_id
        fname.placeholder = el.first_name;
        lname.placeholder = el.last_name;
        ages.placeholder = el.age;
        // forms
        elForms.addEventListener('submit', e =>{
            e.preventDefault();
            fetch(API,{
                method:'PUT',
                headers:{'Content-type' : 'application/json'},
                body:JSON.stringify({
                    studentId:el.student_id,
                    firstName: fname.value,
                    lastName:lname.value,
                    age:  ages.value 
                })
            })
            userName.textContent = fname.value 
            userLastname.textContent = lname.value  
            elAge.textContent =  ages.value

         
           

        })
        document.body.append(temp)
    });
}

my();