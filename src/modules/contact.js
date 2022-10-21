function createContact(){
const contact=document.createElement('div');
contact.classList.add('contact');
const phonenumber=document.createElement('p');
phonenumber.textContent="Call this number '📞 123 456 789' and we will send you the location";
contact.append(phonenumber);
return contact;
}
function loadContact(){
    const main=document.querySelector("#main");
    main.textContent='';
    main.append(createContact());
}
export default loadContact;