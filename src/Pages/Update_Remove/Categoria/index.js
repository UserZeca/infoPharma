import React , { useState ,useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import EnhancedTable from '../../../components/Table'


const menuWithButtonLink = false;

function UpdateRemove_Categoria(){

    return (
        <PageDefault menuWithButtonLink={menuWithButtonLink}>
            
            <EnhancedTable />
            


        </PageDefault>
    )

}


export default UpdateRemove_Categoria;