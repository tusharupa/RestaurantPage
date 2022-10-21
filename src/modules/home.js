    
    function createContent(){
    const about=document.createElement('div');
    about.classList.add('about');
    const pname=document.createElement('p');
    pname.classList.add('name');
    pname.textContent="Fake's Restaurant";
    about.append(pname);
    const detail=document.createElement('p');
    detail.classList.add('detail');
    detail.textContent="Fake's restaurant is the best in the buisness started by Phukin Fake.You can find here all kinds of real dishes made with real exotic ingrediets that will make your stomach scream, with excitement and joy ofcourse! This is the place to come to with your family and loved ones (if you have any) to spend some family time.There is no issue of parking as we take care of your vehicles using cutting edge valet parking system where our attendents will park your car... somewhere.The biggest highlight is everybody after eating will be given a completely harmless pill that will help you in digestion.It's totally real and we will not scam you that some reports have said about us.";
    about.append(detail);
    
    
    const timings=document.createElement('div');
    timings.classList.add('timings');
    const ptimings=document.createElement('p');
    ptimings.setAttribute('id','timings');
    ptimings.textContent="Timings";
    timings.append(ptimings);
    const list=document.createElement('ul');
    const dayarr=['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday'];
    dayarr.forEach((item)=>{
        const litimings=document.createElement('li');
        const ptime=document.createElement('p');
        ptime.textContent=`${item}: 12pm-10pm`;
        litimings.append(ptime);
        list.append(litimings);
    })
    timings.append(list);
    about.append(timings);

    return about;
}
  
function loadHome(){
    const main=document.getElementById('main');
    main.textContent="";
    main.append(createContent());
}
    export default loadHome;
    