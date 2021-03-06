import React , { useState } from 'react';
import ContainerTable from './styles';
import categoriesRepository from '../../../../repositories/categorias';
import { useHistory } from 'react-router-dom';
import useForm from '../../../../hooks';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import FilterListIcon from '@material-ui/icons/FilterList';





import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

/*
const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];
*/

var rows = [];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



const ab = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];



var headCells = []; 

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  console.log('Renderizando Head Cells');
  console.log(headCells.length);
  headCells.map((e)=>{
    console.log(e);

  })

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color='primary'
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: 'var(--primary)',
          backgroundColor: 'white',
          fontWeight: 'bold',
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

  
  

const EnhancedTableToolbar = (props) => {
  
    const classes = useToolbarStyles();
    const { numSelected , selected} = props;
    const history = useHistory();    
    const [open, setOpen] = React.useState(false);    // useState para setar o abrir/fechar do popUp do form de edit/remove
    
   

  
    

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


    const remove = (objetoCategoria) =>{

      categoriesRepository.deleteCategoria(objetoCategoria)
      .then((res)=>{        
          alert(`Sucesso ao remover categoria id[${objetoCategoria.id}] nome: ${objetoCategoria.titulo}`);
            
          return res;
      })
      .catch(err =>{    
        alert(`Erro ao remover categoria id[${objetoCategoria.id}] nome: ${objetoCategoria.titulo}`);
        console.log(err);
      })
    }

    const update = (objetoCategoria, previusData) =>{

      console.log('Objeto da Categoria');
      console.log(objetoCategoria);

      categoriesRepository.updateCategoria({
          id: previusData.id,
          titulo: objetoCategoria.titulo == '' ? previusData.titulo : objetoCategoria.titulo,
          cor: objetoCategoria.cor,
          text: objetoCategoria.text == '' ? previusData.text : objetoCategoria.text,
          url: objetoCategoria.url == '' ? previusData.url : objetoCategoria.url
      })
      .then((res)=>{        
          alert(`Sucesso ao atualizar categoria id[${objetoCategoria.id}] nome: ${objetoCategoria.titulo}`)  
          return res;
      })
      .catch(err =>{    
        alert(`Erro ao atualizar categoria id[${objetoCategoria.id}] nome: ${objetoCategoria.titulo}`);
        console.log(err);
      })
    }

    var dadosIniciais = {       // <- Objeto que armazena valores iniciais para o formulário
      cor: '#000',
      text: '',
      titulo: '',
      url: '',
    };

    var previusData;

    if(selected.length <= 1){
      console.log('Alvo');
      previusData = (rows.filter(row => {
        return row.id == selected;
      }))[0];

      console.log('Marcou');
      console.log(previusData);
      
    }
    
    const { valores ,handleDoValorCampo, clearForm} = useForm(dadosIniciais);     // Contruindo Hooks de formulário



    console.log('OPÇÂO');
  //  console.log(selected);
    
    //console.log(open);
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} {numSelected > 1 ? 'itens selecionados': 'item selecionado'}
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Categorias
          </Typography>
        )}

        {numSelected > 0 ? (
          <>
              <Tooltip title="Remover">
                  <IconButton 
                      aria-label="remover" 
                      onClick={() => { 
                            selected.map((item)=>{
                              var dataRows = rows.filter(row => {
                                return row.id == item;
                              });
                              
                              for(let i in dataRows){
                                  console.log(remove(dataRows[i]));
                              }

                          })
                          history.push('/update-remove/categoria'); 
                          history.go();
                        }
                      }>
                      <DeleteIcon />
                  </IconButton>
              </Tooltip>
              {selected.length <= 1 && (

                <>
                  <Tooltip title="Atualizar">
                      <IconButton 
                          aria-label="atualizar" 
                          onClick={handleOpen}>
                          <UpdateIcon />
                      </IconButton>
                  </Tooltip>
            
                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edição de categoria</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                          Abaixo insira as novas informações para a categoria:
                        </DialogContentText>

                        <TextField
                          autoFocus
                          onChange={handleDoValorCampo}
                          margin="dense"
                          name="titulo"
                          label="Titulo"
                          type="text"
                          placeholder={previusData.titulo}
                          fullWidth
                        />
                        <TextField
                            autoFocus
                            onChange={handleDoValorCampo}
                            margin="dense"
                            name="text"
                            label="Descrição"
                            placeholder={previusData.text}
                            type="text"
                            fullWidth
                        />

                        <TextField
                          autoFocus
                          onChange={handleDoValorCampo}
                          margin="dense"
                          name="cor"
                          label="*Cor"
                          type="color"
                          fullWidth
                        />

                        <TextField
                          autoFocus
                          onChange={handleDoValorCampo}
                          margin="dense"
                          name="url"
                          label="URL"
                          placeholder={previusData.url}
                          type="text"
                          fullWidth
                        />

                        
                        
                    </DialogContent>
                    
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancelar
                      </Button>
                      <Button onClick={()=> {
                            update(valores, previusData);
                            handleClose();
                            history.push('/update-remove/categoria');
                            history.go();

                        }} 
                        color="primary">
                        Salvar
                      </Button>
                    </DialogActions>
                  </Dialog>
              </>
            )} 
          </>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>

    );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    backgroundColor: '#f5deb3',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    padding: '20px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));



export default function EnhancedTable(data) {

  console.log(data);
  //setDataHeadCells(data.headCells);
  headCells = data.headCells;
  //setDataRows(data.rows);
  rows = data.rows;
  console.log('Dentro da Table');
  console.log(data.headCells);
  //console.log(data.rows);
  

  const classes = useStyles();

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
  
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }


    console.log(`Clicou em ${name}`);
    console.log(`${newSelected}`);

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  console.log('Testando tamanho');
  console.log(rows.length);
  console.log(headCells.length);

  return (
    <ContainerTable className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} selected={selected} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>

                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.titulo}</TableCell>
                      <TableCell align="left">{row.cor}</TableCell>
                      <TableCell align="left">{row.text}</TableCell>
                      <TableCell align="left">{row.url}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        color='primary'
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Diminuir espaçamento" 
      />
    </ContainerTable>
  );
}




  