import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

function createHeader(){
    const header=document.createElement('div');
    header.classList.add('header');
    const home=document.createElement('button');
    home.setAttribute('id','home');
    home.classList.add('tab');
    home.textContent="Home";
    home.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active')) 
        return;
        setActiveButton(home);
        loadHome();

    });
    const menu=document.createElement('button');
    menu.setAttribute('id','menu');
    menu.classList.add('tab');
    menu.textContent="Menu";
    menu.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active')) 
        return;
        setActiveButton(menu);
        loadMenu();

    });
    const contact=document.createElement('button');
    contact.setAttribute('id','contact');
    contact.classList.add('tab');
    contact.textContent="Contact";
    contact.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active')) 
        return;
        setActiveButton(contact);
        loadContact();

    });
    header.append(home,menu,contact);
    return header;
    }
    function setActiveButton(button){
        const buttons=document.querySelectorAll('.tab');
        buttons.forEach((button)=>{
            if(button!==this)
            button.classList.remove('active');
        });
        button.classList.add('active');
    }                    
function createMain(){
    const main=document.createElement('main');
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}
function initializeWebsite(){
    const content=document.querySelector('#content');
    content.append(createHeader());
    content.append(createMain());
    home.classList.add('active');
    loadHome();
}
initializeWebsite();
