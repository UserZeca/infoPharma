const fetch = require('node-fetch');
const DOMParser = require('dom-parser');

const { JSDOM } = require('jsdom');

let medicamentos;
let dermocosmeticos;
let perfumaria;
let saudeBucal = [];

const NUMERO_DE_PAGINAS = 10;





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

 function obterOutrosProdutos(DOM,categoria) {

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
        valorMinimo = $('.title-4.text-center span:nth-child(1)').get();
        valorMaximo = $('.title-4.text-center span:nth-child(2)').get();

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


//async function main(){}
// ___________ Obtendo Medicamentos _______________
/*

await fetch('https://www.cliquefarma.com.br/medicamentos/genericos')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {


        medicamentos.push(obterMedicamento(html, 'Medicamentos Genéricos'));
        

   
    })
    .catch(err =>{
        console.log(err);
    });


await fetch('https://www.cliquefarma.com.br/medicamentos/antialergicos')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

     
        
        medicamentos.push(obterMedicamento(html, 'Antialergicos'));
      

    })
    .catch(err =>{
        console.log(err);
    });

await fetch('https://www.cliquefarma.com.br/medicamentos/anti-hipertensivo')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

    
    
        medicamentos.push(obterMedicamento(html, 'Anti Hipertensivo'));
  
        

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/medicamentos/diabetes')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

   
        medicamentos.push(obterMedicamento(html, 'Diabetes'));
  

    })
    .catch(err =>{
        console.log(err);
});


await fetch('https://www.cliquefarma.com.br/medicamentos/digestivo')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {


        medicamentos.push(obterMedicamento(html, 'Digestivos'));
     

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/medicamentos/vitaminas')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        medicamentos.push(obterMedicamento(html, 'Vitaminas'));
      

    })
    .catch(err =>{
        console.log(err);
});

console.log(medicamentos);
*/

// ___________ Obtendo Dermocosméticos _______________


/*
await fetch('https://www.cliquefarma.com.br/dermocosmeticos/antienvelhecimento-antirrugas')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {
        dermocosmeticos.push(obterOutrosProdutos(html, 'Antirrugas'))
        

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/dermocosmeticos/cabelos')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        dermocosmeticos.push(obterOutrosProdutos(html, 'Cabelos'))
        

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/dermocosmeticos/hidratantes')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        dermocosmeticos.push(obterOutrosProdutos(html, 'Hidratantes'))
        

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/dermocosmeticos/higienizacao')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        dermocosmeticos.push(obterOutrosProdutos(html, 'Higienização'))
        

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/dermocosmeticos/olhos-rosto')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        dermocosmeticos.push(obterOutrosProdutos(html, 'Olhos & Rosto')) 
        

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/dermocosmeticos/protetor-bloqueador-solar')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        dermocosmeticos.push(obterOutrosProdutos(html, 'Protetor/Bloqueador Solar'));        
        

    })
    .catch(err =>{
        console.log(err);
});

await console.log(dermocosmeticos);

*/

// ___________ Obtendo Produtos de Perfumaria _______________

/*

await fetch('https://www.cliquefarma.com.br/perfumaria/acessorios')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        perfumaria.push(obterOutrosProdutos(html, 'Acessórios - Perfumaria'));

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/perfumaria/desodorantes')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        perfumaria.push(obterOutrosProdutos(html, 'Desodorantes'));

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/perfumaria/protetores-e-bronzeadores')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        perfumaria.push(obterOutrosProdutos(html, 'Protetores & Bronzeadores'));

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/perfumaria/shampoo')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        perfumaria.push(obterOutrosProdutos(html, 'Shampoo'));

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/perfumaria/tintura')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        perfumaria.push(obterOutrosProdutos(html, 'Tintura'));

    })
    .catch(err =>{
        console.log(err);
});

await fetch('https://www.cliquefarma.com.br/perfumaria/unhas')
  .then(
    async (respostaDoServidor) => {
        if(respostaDoServidor.ok){   
            
            return respostaDoServidor.text();
        }
        throw new Error('Não foi possível se conectar ao servidor!');
        }
    )
    .then((html) => {

        perfumaria.push(obterOutrosProdutos(html, 'Unhas'));

    })
    .catch(err =>{
        console.log(err);
});

console.log(perfumaria);

*/
// ___________ Obtendo Produtos de Saúde Bucal _______________
/*
for(var i =0; i< 10; i++){
    var url;
   
    if(i == 0)
        url = 'https://www.cliquefarma.com.br/saude-bucal/acessorios' + '/'+ i;
    else
        url = 'https://www.cliquefarma.com.br/saude-bucal/acessorios'

    await fetch(url)
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                
                return respostaDoServidor.text();
            }
            throw new Error('Não foi possível se conectar ao servidor!');
            }
        )
        .then((html) => {

            saudeBucal.push(obterOutrosProdutos(html, 'Acessórios - Saúde Bucal'));

        })
        .catch(err =>{
            console.log(err);
    });
}




*/



async function buscaDadosSaudeBucal(urlDeDestino, maxPaginas, subCategoria){
        
    let url;

    for(var i =1; i<= maxPaginas; i++){
        
        i == 1 ? url = urlDeDestino + '/'+ i : url = urlDeDestino;  
            
        await fetch(url)
        .then(
            async (respostaDoServidor) => {
                if(respostaDoServidor.ok){   
                    
                    return respostaDoServidor.text();
                }
                throw new Error('Não foi possível se conectar ao servidor!');
                }
            )
            .then(async (html) => {
                saudeBucal.push(obterOutrosProdutos(html, subCategoria));
            })
            .catch(err =>{
                console.log(err);
        });
        
    }

    //console.log(saudeBucal);
    
}

async function main(){

    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/fixadores-de-protese', NUMERO_DE_PAGINAS, 'Fixadores de Protese');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/escova-dental', NUMERO_DE_PAGINAS, 'Escovas de Dente');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/enxaguatorio', NUMERO_DE_PAGINAS, 'Enxaguatório');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/creme-dental', NUMERO_DE_PAGINAS, 'Creme Dental');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/antisseptico-bucal', NUMERO_DE_PAGINAS, 'Antisséptico Bucal');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/acessorios', NUMERO_DE_PAGINAS, 'Acessórios - Saúde Bucal');

    console.log(saudeBucal.length);
}

main();