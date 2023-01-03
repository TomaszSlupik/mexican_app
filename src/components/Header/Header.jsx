import React, { useState } from 'react'
import './Header.scss'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Headerbox from '../Headerbox/Headerbox';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

export default function Header() {


  const style = {
    btn: {position: 'absolute',  top: '12%', right: '2%', marginLeft: '3em'}, 
    bin: {marginRight: '0.6em'}
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      // border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };



  return (
    <div>
        <div className="header">
            <div className="header__text">Mexican Meals</div>
            <div className="header__btn">
              <button onClick={handleClickOpen}>sdasdasdsad</button>
            <div>
            <Button 
            style={style.btn} variant="contained"
            >
              
            <IconButton aria-label="cart" style={style.bin}>
              <StyledBadge badgeContent={12} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            
              Twoja karta
            </Button>
              <div>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Anuluj</Button>
                  <Button onClick={handleClose}>Zamawiam</Button>
                </DialogActions>
              </Dialog>
              </div>
              </div>
            </div>
        </div>
        <Headerbox />
    </div>
  )
}
