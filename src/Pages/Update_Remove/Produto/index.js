import React , { useState ,useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import EnhancedTable from './Table'
import produtosRepository from '../../../repositories/produtos';



/*
function dataTable(){

     const rows = [];
     const headCells = [];

    setTimeout((async () => {
         await produtosRepository.getAll()
            
        .then((res) => {


         for(let element of res){
             rows.push({titulo: element.titulo, cor: element.cor, url: element.url, text: element.text });
         
         }
 
         let dataKeys = [];
         dataKeys.push(Object.keys(res[0]));
 
 
         for(let element of dataKeys[0]) {
         
             headCells.push({ id: element, numeric: false, disablePadding: false, label: element});
         } 
         
         console.log('TESTANDO');

     })
    
    }), 2000 );

    console.log('Teste');
    console.log(headCells);

    return {headCells, rows};   

}
*/


const menuWithButtonLink = false;

function UpdateRemove_Produto(){

    //var data = [];
    var rows = [];
    
    const [data, setDados ] = useState([]); 
  
  
    useEffect(() => {
        produtosRepository.getAll().then( (respostaDoServidor) => {

            console.log("resposta do servidor ... zelda");
            console.log(respostaDoServidor);
            
            setDados(respostaDoServidor);
            

        })
        .catch((err) =>{
            // Mostrar erro ao usuário ( Tratar o erro)
            console.log(err);
        });
        }
    ,[]);
    

    console.log('Lendo data');
    console.log(data);

    for(let element of data){
        rows.push({id: element.id ,nome: element.nome, subcategoria: element.subcategoria,preco: element.preco,  url: element.url, emPromocao: element.emPromocao });
    }
    
    
    var headCells = [
        {id: 'id', numeric: false, disablePadding: false, label: 'id'},
        {id: 'nome', numeric: false, disablePadding: false, label: 'Nome'},
        {id: 'subcategoria', numeric: false, disablePadding: false, label: 'Subcategoria'},
        {id: 'preco', numeric: false, disablePadding: false, label: 'Preco'},
        {id: 'url', numeric: false, disablePadding: false, label: 'url'},
        {id: 'emPromocao', numeric: false, disablePadding: false, label: 'Produto em promoção'},
    ];
    
    /*
    let dataKeys = [];
    dataKeys.push(Object.keys(data));

    console.log('KEYS');
    console.log(dataKeys);

    for(let element of dataKeys) {
    
        headCells.push({ id: element[0], numeric: false, disablePadding: false, label: element[0]});
    } 
    */
    console.log("UVA");
    console.log(rows);
    console.log(headCells)
    console.log('PASSA');

    return (
        <PageDefault menuWithButtonLink={menuWithButtonLink}>
            
            <EnhancedTable headCells={headCells} rows={rows} />
            


        </PageDefault>
    )


}


export default UpdateRemove_Produto;