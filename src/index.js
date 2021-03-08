import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroProduto from './Pages/Cadastro/Produto';
import CadastroCategoria from './Pages/Cadastro/Categoria';
import Erro404 from './Pages/Erros/Erro404';
import UpdateRemove_Categoria from './Pages/Update_Remove/Categoria'




ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/cadastro/produto" component={CadastroProduto}  />
      <Route path="/cadastro/categoria" component={CadastroCategoria}  />
      <Route path="/update-remove/categoria" component={UpdateRemove_Categoria}  />


      <Route component={Erro404} />
        
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

