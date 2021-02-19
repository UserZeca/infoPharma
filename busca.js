const fetch = require('node-fetch');
const DOMParser = require('dom-parser');

const { JSDOM } = require('jsdom');


function obterMedicamento(DOM,categoria) {

     const dom = new JSDOM(DOM);
        let medicamentos = [];
        let nomeMedicamento = [];
        let fabricante = [];
        let principioAtivo = [];
        let valorMaximo = [];
        let valorMinimo = [];
        let arrayLength = [];
        let tam = 0;

        const $ = (require('jquery'))(dom.window);

    
        //console.log(typeof dom);
        nomeMedicamento = $('.title-3.text-center.color-1.semibold').get();
        fabricante = $('.shadow-1.rounded.bg-2.top-1-5.height-100 p:nth-child(3)').get();
        principioAtivo = $('.shadow-1.rounded.bg-2.top-1-5.height-100 p:nth-child(4) a').get();
        valorMinimo = $('.title-4.text-center span:nth-child(1)');
        valorMaximo = $('.title-4.text-center span:nth-child(2)');

        
        arrayLength.push(nomeMedicamento.length);
        arrayLength.push(fabricante.length);
        arrayLength.push(principioAtivo.length);
        arrayLength.push(valorMinimo.length);
        arrayLength.push(valorMaximo.length);
        arrayLength.sort();
        tam = arrayLength[0];

        console.log(principioAtivo.length);

        //medicGenericos = dom.window.document.getElementsByClassName('title-3 text-center color-1 semibold');
        //console.log($('.title-3.text-center.color-1.semibold').get());

    

        for (var i = 0; i < tam; i++ ){
            medicamentos.push({
                categoria: categoria,
                nome: nomeMedicamento[i].textContent,
                fabricante: fabricante[i].textContent,
                principioAtivo: principioAtivo[i].title,
                valorMinimo: valorMinimo[i].textContent,
                valorMaximo: valorMaximo[i].textContent,
            })
        }

    return medicamentos;
}

function obeterOutrosProdutos(DOM,categoria) {

     const dom = new JSDOM(DOM);
        let produtos = [];
        let nome = [];
        let valorMaximo = [];
        let valorMinimo = [];
        let arrayLength = [];
        let tam = 0;

        const $ = (require('jquery'))(dom.window);

    
        //console.log(typeof dom);
        nome = $('.title-3.text-center.color-1.semibold').get();
        valorMinimo = $('.title-4.text-center span:nth-child(1)');
        valorMaximo = $('.title-4.text-center span:nth-child(2)');

        arrayLength.push(nome.length);
        arrayLength.push(valorMinimo.length);
        arrayLength.push(valorMaximo.length);
        arrayLength.sort();
        tam = arrayLength[0];
        console.log(nome.length)
        //medicGenericos = dom.window.document.getElementsByClassName('title-3 text-center color-1 semibold');
        //console.log($('.title-3.text-center.color-1.semibold').get());



        for (var i = 0; i < tam; i++ ){
          //console.log(typeof valorMaximo[i].textContent)
        
            produtos.push({
                categoria: categoria,
                nome: nome[i].textContent,
                valorMinimo: valorMinimo[i].textContent,
                valorMaximo: valorMaximo[i].textContent,
            })
        }

    return produtos;
}

/*
// ___________ Obtendo Medicamentos _______________

fetch('https://www.cliquefarma.com.br/medicamentos/genericos')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obterMedicamento(html, 'Medicamentos Genéricos'));
        console.log('\n\n');
   
    })
    .catch(err =>{
        console.log(err);
    });


fetch('https://www.cliquefarma.com.br/medicamentos/antialergicos')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obterMedicamento(html, 'Antialergicos'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
    });

fetch('https://www.cliquefarma.com.br/medicamentos/anti-hipertensivo')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obterMedicamento(html, 'Anti Hipertensivo'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/medicamentos/diabetes')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obterMedicamento(html, 'Diabetes'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});


fetch('https://www.cliquefarma.com.br/medicamentos/digestivo')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obterMedicamento(html, 'Digestivos'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/medicamentos/vitaminas')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obterMedicamento(html, 'Vitaminas'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

/*

// ___________ Obtendo Dermocosméticos _______________


fetch('https://www.cliquefarma.com.br/s/antienvelhecimento-antirrugas')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Antirrugas'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/s/cabelos')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Cabelos'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/s/hidratantes')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Hidratantes'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/s/higienizacao')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Higienização'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/s/olhos-rosto')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Olhos & Rosto'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/s/protetor-bloqueador-solar')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Protetor/Bloqueador Solar'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});


// ___________ Obtendo Produtos de Perfumaria _______________



fetch('https://www.cliquefarma.com.br/perfumaria/acessorios')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Acessórios - Perfumaria'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/perfumaria/desodorantes')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Desodorantes'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/perfumaria/protetores-e-bronzeadores')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Protetores & Bronzeadores'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/perfumaria/shampoo')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Shampoo'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/perfumaria/tintura')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Tintura'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/perfumaria/unhas')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Unhas'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

// ___________ Obtendo Produtos de Saúde Bucal _______________
*/


fetch('https://www.cliquefarma.com.br/saude-bucal/acessorios')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Acessórios - Saúde Bucal'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});


fetch('https://www.cliquefarma.com.br/saude-bucal/antisseptico-bucal')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Antisséptico Bucal'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/saude-bucal/creme-dental')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Creme Dental'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/saude-bucal/enxaguatorio')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Enxaguatório'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});

fetch('https://www.cliquefarma.com.br/saude-bucal/escova-dental')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Escovas de Dente'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});


fetch('https://www.cliquefarma.com.br/saude-bucal/fixadores-de-protese')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        console.log(obeterOutrosProdutos(html, 'Fixadores de Protese'));
        console.log('\n\n');

    })
    .catch(err =>{
        console.log(err);
});


