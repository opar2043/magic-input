document.getElementById('btn').addEventListener('click',function(){
    let div = document.getElementById('div');

    let name = document.getElementById('name');
    let nameValue = name.value;

    // nameValue.style.fontSize = '22px'
    

    let email = document.getElementById('email');
    emailValue = email.value ;

    let number = document.getElementById('number');
    numberValue = number.value ;

    let h4 = document.getElementById('h4');
    h4.innerText = ''; // Clear previous error message

    // Validate each input
    if (nameValue === '') {
        h4.innerText = 'Please enter your name.';
        return;
    }

    if (emailValue === '') {
        h4.innerText = 'Please enter your email.';
        return;
    }

    if (numberValue === '') {
        h4.innerText = 'Please enter your number.';
        return;
    }


    let str = `Hello my name is  ${ nameValue}.  i am a super-Duper Badaimma.(Ghorer Manush Khaite dey na) People Also Call me Abal.So, i am searching a job . if someone need a "Ghorer Kajer Manus" then contuct me this   number-${numberValue}.  For More Queries Like "Shoytani Boddi" then here is my E-Mail   ${emailValue}.  
    3 din dhore na khawa ami. 

    Yours Loving ${nameValue} (Kamla)`


    let para = document.createElement('p');

    para.innerText  = str;
    para.style.textAlign = 'left'
    para.style.fontSize = '19px'
    para.style.border = '2px solid black'
    para.style.padding = '20px '
    para.style.margin = '20px auto'
    para.style.width = '350px'
    para.style.backgroundColor = 'darkseagreen'
    para.style.color = 'black'
    para.style.borderRadius = '6px'

    div.appendChild(para);

    name.value = ''
    number.value = ''
    email.value = ''

    
})
