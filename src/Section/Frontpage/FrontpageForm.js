import React,{useState} from 'react'
import { Box, Button, Card, CardMedia, Paper, TextField, Typography,IconButton} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function FrontpageForm() {


  return (
    <Box sx={{ display: 'flex',justifyContent:'space-around',gap: '3', backgroundColor: '#ABCDCD'}}>



    <Box sx={{ width: '500%', maxWidth: 500,display:'flex',flexDirection:'column',marginLeft:-10 }}>

    <Typography variant="h1" sx={{marginLeft:7,marginTop:5}}>
      Dive into a world of influence-
    </Typography>
    <Typography variant='h4' sx={{marginLeft:7,marginTop:3}}>
      our social media mastery ensures your brand not only stands out but stays ahead
    </Typography>
    <Button variant="contained" sx={{fontSize:30,backgroundColor:'white',color:'black',marginTop:3,
    width:280,borderRadius:3,height:90,textAlign:'center',marginLeft:15,    '&:hover': {
      backgroundColor: 'white',
    },
}}>GET STARTED </Button>
</Box>
        <Box
        component="img"
        sx={{ width: '50%',objectFit:'contain',marginTop:20 }}
        src="/Assets/peoplesocial.png"
        alt="Live from space album cove">
          </Box>
</Box>

  )

}

export default FrontpageForm