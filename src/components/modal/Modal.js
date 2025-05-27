import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { RxCross1 } from "react-icons/rx";
import { Heading } from 'components';
import LogoutImg from '../../Assests/Images/LogoutIcon.png'
import CustomButton from 'components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: '40%', // Set dialog width to 40%
    maxWidth: 'none', // Prevent MUI's default maxWidth limitation
    
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    localStorage.clear();
    setOpen(false)
    navigate('/admin-login');
  };
  return (
    <React.Fragment>
      <Heading  onClick={handleClickOpen}>
       Logout
      </Heading>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{fontFamily:"NeueMontreal', sans-serif"}}>
       
        Logout
         
          </DialogTitle>    
        {/* </DialogTitle> */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
         <RxCross1  style={{color:'#EA352B'}}/>

        </IconButton>
        <DialogContent >
          <img src={LogoutImg} className='w-[100%] object-contain h-[8em]' />
          
          <p className='text-center pt-2' style={{fontFamily:"NeueMontreal', sans-serif"}}>
          Are you sure you want to log out?
          </p>
        </DialogContent>
        <DialogActions sx={{width:"100%",justifyContent:'space-between',padding:'20px'}} >
           <CustomButton handleClick={handleClose}  textButton="Cancel" width="7em" height="40px"/>
          <CustomButton handleClick={handleLogout} background="red" textButton="Logout" width="7em" height="40px"/>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
