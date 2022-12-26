const button = document.querySelector('#btn');
button.addEventListener('click', ()=> {
    alert("Hello World!");

    const bodyvar = document.querySelector('body');

    const para = document.createElement('p');
    para.textContent = "Hey! I'm red!";
    para.setAttribute('style', 'color: red;');

    const head3 = document.createElement('h3');
    head3.textContent = "Hey! I'm Blue h3!";
    head3.setAttribute('style', 'color: blue;');

    const divvar = document.createElement('div');
    divvar.setAttribute('style', 'background-color: blue; border: 10px solid pink;');

    const head1 = document.createElement('h1');
    head1.textContent = "I'm in a div";

    const innerpara = document.createElement('p');
    innerpara.textContent = "Me too!";

    bodyvar.appendChild(para);
    bodyvar.appendChild(head3);
    bodyvar.appendChild(divvar);
    divvar.appendChild(head1);
    divvar.appendChild(innerpara);
});