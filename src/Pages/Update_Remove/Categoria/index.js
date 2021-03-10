import React , { useState ,useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import EnhancedTable from '../../../components/Table'
import categoriesRepository from '../../../repositories/categorias';



/*
function dataTable(){

     const rows = [];
     const headCells = [];

    setTimeout((async () => {
         await categoriesRepository.getAll()
            
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

function UpdateRemove_Categoria(){

    //var data = [];
    var rows = [];
    
    const [data, setDados ] = useState([]); 
  
  
    useEffect(() => {
        categoriesRepository.getAll().then( (respostaDoServidor) => {

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
    

    for(let element of data){
        rows.push({id: element.id ,titulo: element.titulo, cor: element.cor, url: element.url, text: element.text });
    }
    
    
    var headCells = [
        {id: 'id', numeric: false, disablePadding: false, label: 'id'},
        {id: 'titulo', numeric: false, disablePadding: false, label: 'Titulo'},
        {id: 'cor', numeric: false, disablePadding: false, label: 'Cor'},
        {id: 'text', numeric: false, disablePadding: false, label: 'Texto do Link'},
        {id: 'url', numeric: false, disablePadding: false, label: 'url'},
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


export default UpdateRemove_Categoria;