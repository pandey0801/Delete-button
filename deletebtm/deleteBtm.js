// Having Delete Functionality

function handleFormSubmit(event)
{
    // event.preventDefault();
    event.preventDefault();
    // console.log(1)

    const name = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

   const obj={
    name,
    email,
    phone
    };

    // locat Storage
    const st = JSON.stringify(obj);
    localStorage.setItem(email,st)
    console.log(st) 


    const form = document.querySelector("form")
    
    
    const list = document.createElement('ul');

    const para = document.createElement('li')
    const addNode = document.createTextNode(`${name} - ${email} - ${phone}`)
    para.appendChild(addNode);

    const btm = document.createElement("button");
    const btmpara = document.createTextNode("Delete")
    btm.appendChild(btmpara);

    list.appendChild(para);
    list.appendChild(btm);
    form.appendChild(list)

    btm.addEventListener('click', function (){
        // console.log(1)
        list.remove();
        localStorage.removeItem(email);
    });


}