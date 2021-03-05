const fetch = require('node-fetch');
const DOMParser = require('dom-parser');
const jsonfile = require('jsonfile');
 
const file = './src/data/dbBuild.json';

const { JSDOM } = require('jsdom');

let medicamentos = [];
let dermocosmeticos = [];
let saudeBucal = [];
let perfumaria = [];

const ENUMERATE = {medicamentos: 1, dermocosmeticos: 2, saudeBucal: 3, perfumaria: 4};

const NUMERO_DE_PAGINAS = 10;
const categorias = {
    categorias: [
        { titulo: 'Medicamentos',cor:'#9cd33b', text:'Ver mais medicamentos',url: '/produtos/medicamentos', dados: [] },
        { titulo: 'Dermocosmeticos', cor:'#121691', text: 'Ver mais dermocosmeticos',url:'/produtos/dermocosmeticos', dados: [] },
        { titulo: 'Perfumaria',cor:'#6BD1FF', text: 'Ver mais produtos de perfumaria',url:'/produtos/perfumaria', dados: [] },
        { titulo: 'Saúde Bucal',cor:'orange', text:'Ver mais produtos de saúde bucal ', url:'/produtos/saudebucal',dados: [] }
    ]
};

function converterValor(str){
    let novaStr = (((str.replace(/[,]/,'.')).replace(/\W/,'')).replace(/[0-9a-zA-Z_]/, ''));
    return parseFloat(novaStr).toFixed(2);

}

function obterMedicamento(DOM,subcategoria) {

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

        console.log(`Adicionando ${tam} elementos à ${subcategoria}`);

    

        for (var i = 0; i < tam; i++ ){

            let min = parseFloat(converterValor(valorMinimo[i].textContent));
            let max = parseFloat(converterValor(valorMaximo[i].textContent));
            let media = parseFloat(((min + max) /2.0).toFixed(2)) 

            medicamentos.push({
                subcategoria: subcategoria,
                nome: nomeMedicamento[i].textContent,
                fabricante: fabricante[i].textContent,
                principioAtivo: principioAtivo[i].title,
                preco: media,
                categoriaId: ENUMERATE.medicamentos,
                emPromocao: false 
            })
        }

    return medicamentos;
}

 function obterOutrosProdutos(DOM,subcategoria, enumerate) {

     const dom = new JSDOM(DOM);
        let produtos = [];
        let nome = [];
        let valorMaximo = [];
        let valorMinimo = [];
        let arrayLength = [];
        let tam = 0;

        const $ = (require('jquery'))(dom.window);

        nome = $('.title-3.text-center.color-1.semibold').get();
        valorMinimo = $('.title-4.text-center span:nth-child(1)').get();
        valorMaximo = $('.title-4.text-center span:nth-child(2)').get();

        arrayLength.push(nome.length);
        arrayLength.push(valorMinimo.length);
        arrayLength.push(valorMaximo.length);
        arrayLength.sort();
        tam = arrayLength[0];
        console.log(`Adicionando ${tam} elementos à ${subcategoria}`);
  

        for (var i = 0; i < tam; i++ ){
          let min = parseFloat(converterValor(valorMinimo[i].textContent));
          let max = parseFloat(converterValor(valorMaximo[i].textContent));
          let media = parseFloat(((min + max) /2.0).toFixed(2)) 
    
          produtos.push({
                subcategoria: subcategoria,
                nome: nome[i].textContent,
                preco: media ,
                categoriaId: enumerate,
                emPromocao: false 

            })
        }

    return produtos;
}


async function buscaDadosMedicamentos(urlDeDestino, maxPaginas, subCategoria){
        
    let url;

    console.log(subCategoria);

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
                medicamentos.push(obterMedicamento(html, subCategoria));
            })
            .catch(err =>{
                console.log(err);
        });
        
    }

    
}

async function buscaDadosDermocosmeticos(urlDeDestino, maxPaginas, subCategoria){
        
    let url;
    console.log(subCategoria);

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
                dermocosmeticos.push(obterOutrosProdutos(html, subCategoria, ENUMERATE.dermocosmeticos));
            })
            .catch(err =>{
                console.log(err);
        });
        
    }

    
}

async function buscaDadosSaudeBucal(urlDeDestino, maxPaginas, subCategoria){
        
    let url;
    console.log(subCategoria);

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
                saudeBucal.push(obterOutrosProdutos(html, subCategoria, ENUMERATE.saudeBucal));
            })
            .catch(err =>{
                console.log(err);
        });
        
    }

    
}

async function buscaDadosPerfumaria(urlDeDestino, maxPaginas, subCategoria){
        
    let url;
    console.log(subCategoria);

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
                perfumaria.push(obterOutrosProdutos(html, subCategoria, ENUMERATE.perfumaria));
            })
            .catch(err =>{
                console.log(err);
        });
        
    }


}




 function salvarDadosBase(obj, file){

    jsonfile.writeFileSync(file, obj, {space: 2});
}

async function main(){

    await buscaDadosMedicamentos('https://www.cliquefarma.com.br/medicamentos/genericos',NUMERO_DE_PAGINAS,'Genéricos');
    await buscaDadosMedicamentos('https://www.cliquefarma.com.br/medicamentos/vitaminas',NUMERO_DE_PAGINAS,'Vitaminas');
    await buscaDadosMedicamentos('https://www.cliquefarma.com.br/medicamentos/digestivo',NUMERO_DE_PAGINAS,'Digestivos');
    await buscaDadosMedicamentos('https://www.cliquefarma.com.br/medicamentos/diabetes',NUMERO_DE_PAGINAS,'Diabetes');
    await buscaDadosMedicamentos('https://www.cliquefarma.com.br/medicamentos/anti-hipertensivo',NUMERO_DE_PAGINAS,'Anti Hipertensivo');
    await buscaDadosMedicamentos('https://www.cliquefarma.com.br/medicamentos/antialergicos',NUMERO_DE_PAGINAS,'Antialergicos');
    
    await buscaDadosDermocosmeticos('https://www.cliquefarma.com.br/dermocosmeticos/protetor-bloqueador-solar',NUMERO_DE_PAGINAS,'Protetor/Bloqueador Solar');
    await buscaDadosDermocosmeticos('https://www.cliquefarma.com.br/dermocosmeticos/olhos-rosto',NUMERO_DE_PAGINAS,'Olhos & Rosto');
    await buscaDadosDermocosmeticos('https://www.cliquefarma.com.br/dermocosmeticos/higienizacao',NUMERO_DE_PAGINAS,'Higienização');
    await buscaDadosDermocosmeticos('https://www.cliquefarma.com.br/dermocosmeticos/hidratantes',NUMERO_DE_PAGINAS,'Hidratantes');
    await buscaDadosDermocosmeticos('https://www.cliquefarma.com.br/dermocosmeticos/cabelos',NUMERO_DE_PAGINAS,'Cabelos');
    await buscaDadosDermocosmeticos('https://www.cliquefarma.com.br/dermocosmeticos/antienvelhecimento-antirrugas',NUMERO_DE_PAGINAS,'Antirrugas');
    
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/fixadores-de-protese', NUMERO_DE_PAGINAS, 'Fixadores de Protese');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/escova-dental', NUMERO_DE_PAGINAS, 'Escovas de Dente');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/enxaguatorio', NUMERO_DE_PAGINAS, 'Enxaguatório');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/creme-dental', NUMERO_DE_PAGINAS, 'Creme Dental');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/antisseptico-bucal', NUMERO_DE_PAGINAS, 'Antisséptico Bucal');
    await buscaDadosSaudeBucal('https://www.cliquefarma.com.br/saude-bucal/acessorios', NUMERO_DE_PAGINAS, 'Acessórios - Saúde Bucal');

    
    await buscaDadosPerfumaria('https://www.cliquefarma.com.br/perfumaria/unhas',NUMERO_DE_PAGINAS,'Unhas');
    await buscaDadosPerfumaria('https://www.cliquefarma.com.br/perfumaria/tintura',NUMERO_DE_PAGINAS,'Tintura');
    await buscaDadosPerfumaria('https://www.cliquefarma.com.br/perfumaria/shampoo',NUMERO_DE_PAGINAS,'Shampoo');
    await buscaDadosPerfumaria('https://www.cliquefarma.com.br/perfumaria/protetores-e-bronzeadores',NUMERO_DE_PAGINAS,'Protetores & Bronzeadores');
    await buscaDadosPerfumaria('https://www.cliquefarma.com.br/perfumaria/desodorantes',NUMERO_DE_PAGINAS,'Desodorantes');
    await buscaDadosPerfumaria('https://www.cliquefarma.com.br/perfumaria/acessorios',NUMERO_DE_PAGINAS,'Acessórios - Perfumaria');



   for (var element of medicamentos){
       for(var i in element){
            categorias.categorias[0].dados.push(element[i]);
       }
    }
    
    for (var element of dermocosmeticos){
        for(var i in element){
             categorias.categorias[1].dados.push(element[i]);
        }
    }
    
    for (var element of saudeBucal){
        for(var i in element){
             categorias.categorias[2].dados.push(element[i]);
        }
    }
    
     for (var element of perfumaria){
        for(var i in element){
             categorias.categorias[3].dados.push(element[i]);
        }
     }

     
   salvarDadosBase(categorias,'./src/data/dbBuild.json');
  
}

main();