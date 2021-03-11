import React from 'react';

import {LogoImg, MenuWrapper} from './styles';
//import Button from '../../../Button';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const Logo = `${process.env.PUBLIC_URL}/img/logoinfoPharm.png`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));




function Menu({menuWithButtonLink}){
    
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
        }
    , [open]);

    return (
        <MenuWrapper>
            <Link to="/">    
                <LogoImg src={Logo} alt="infoPhama logo" />
            </Link>

            <div className={classes.root}>

                <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                     Menu 
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <Link to="/cadastro/categoria">
                                    <MenuItem onClick={handleClose}>Criar categoria</MenuItem>
                                </Link>
                                <Link to="/cadastro/produto">
                                    <MenuItem onClick={handleClose}>Criar produto</MenuItem>
                                </Link>
                                <Link to="/update-remove/categoria">
                                    <MenuItem onClick={handleClose}>Remover/Editar categoria</MenuItem>
                                </Link>
                                <Link to="/update-remove/produto">
                                    <MenuItem onClick={handleClose}>Remover/Editar produto</MenuItem>
                                </Link>
                            </MenuList>
                        </ClickAwayListener>
                        </Paper>
                    </Grow>
                    )}
                </Popper>
                </div>
            </div>
        </MenuWrapper>
    );
    
    /*
    console.log('botão valor:',menuWithButtonLink);
    return (
        <MenuWrapper>
            <Link to="/">    
                <LogoImg src={Logo} alt="infoPhama logo" />
            </Link>
            {menuWithButtonLink === true && (
               <Link to="/cadastro/produto">
                    <Button>
                        Novo produto
                    </Button>
                </Link>
            )}
        </MenuWrapper>



    );
    */

}




export default Menu;