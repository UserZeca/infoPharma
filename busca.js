const fetch = require('node-fetch');
const DOMParser = require('dom-parser');

const { JSDOM } = require('jsdom');


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
        console.log(typeof html);
        const dom = new JSDOM(html);
        let medicGenericos = [];
        let fabricante = [];
        let principioAtivo = [];
        let valorMaximo = [];
        let valorMinimo = [];

        
        const dom2 = new JSDOM(`<html>  

                <head>
                    <titule>TESTE</titule>
                </head>

                <body>
                    <h1 class="a"> Olá </h1>

                    <div class="teste">
                        <h1 class="a">Oa</h1>
                        <h1 class="a">Oe</h1>
                        <h1 class="a">Oi</h1>
                        <h1 class="a">Oo</h1>
                    </div>

                </body>


            </html>
        `);

        const $ = (require('jquery'))(dom.window);

    
        console.log(typeof dom);
        medicGenericos = $('.title-3.text-center.color-1.semibold').get();
        fabricante = $('.shadow-1.rounded.bg-2.top-1-5.height-100 p:nth-child(3)').get();
        principioAtivo = $('.shadow-1.rounded.bg-2.top-1-5.height-100 p:nth-child(4) a').get();
        valorMinimo = $('.title-4.title-center').length;

        console.log(valorMinimo);

        //medicGenericos = dom.window.document.getElementsByClassName('title-3 text-center color-1 semibold');
        //console.log($('.title-3.text-center.color-1.semibold').get());

        for (var i of principioAtivo ){
            console.log(i.title);
        }

        console.log(typeof medicGenericos);

        

        //console.log(typeof html)

        //const dom = new JSDOM(html)

        /*var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        var teste = parser.parseFromString(`
            <html>  

                <head>
                    <titule>TESTE</titule>
                </head>

                <body>
                    <h1 id="a"> Olá </h1>
                
                </body>


            </html>
            `
        , "text/html");





        //var img = doc.querySelector('img');
        console.dir(teste.getElementById("a"));
        //console.log(doc);
        */
    })
    .catch(err =>{
        console.log(err);
    })



