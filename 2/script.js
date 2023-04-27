let list_form = document.forms[0];
let new_list_form = document.forms[1];
let text = document.querySelector('.text');
let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');

let button = document.querySelector('.button');

button.addEventListener('click', function(){
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let label = document.createElement('label');
    label.appendChild(document.createTextNode(new_list_form[0].value));
    let br = document.createElement('br');

    list_form.appendChild(checkbox);
    list_form.appendChild(label);
    list_form.appendChild(br);
    
    if(new_list_form[0].value === ''){
        document.querySelector('.modal1').style.display = 'block';
        for (let i = 0; i < 3; i++) {
            list_form.removeChild(list_form.lastChild);
          }
    } else {
       new_list_form[0].value = '';
    }

   
})

list_form.addEventListener('click', function () {
    let list = list_form.length - 1;
    if (list === 0) {
        document.querySelector('.modal2').style.display = 'block';
        list_form[0].checked = false;
    }
    else {
        for (let i = 0; i <= list; i++) {
            if (list_form[i].checked) {
                list_form[i].nextElementSibling.nextElementSibling.remove();
                list_form[i].nextElementSibling.remove();
                list_form[i].remove();
                list = list_form.length - 1;
            }
        }
    }
})

close1.addEventListener('click', function(){
    document.querySelector('.modal1').style.display = 'none';
})
close2.addEventListener('click', function(){
    document.querySelector('.modal2').style.display = 'none';
})