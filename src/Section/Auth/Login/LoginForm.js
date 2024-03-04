import React,{useState} from 'react'
import { Box, Button, Card, CardMedia, Paper, TextField, Typography,IconButton} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  return (
    // <Box >

      <Box sx={{ display: 'flex',width:'100%',justifyContent:'space-around',gap: '3', backgroundColor: '#ABCDCD'}}>
        <Box
          component="img"
          sx={{ width: '40%',objectFit:'contain' }}
          src="/Assets/peoplesocial.png"
          alt="Live from space album cover"
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
          <Typography variant="h6" sx={{ marginBottom: 4, textAlign: 'center', fontWeight: 'bold',fontSize: 20,marginLeft:18 }}>
            Login
          </Typography>
          <TextField label="Email ID" fullWidth variant="outlined" sx={{ marginBottom: 6 , width: 350, marginLeft: 15}} InputProps={{ startAdornment: (<InputAdornment position='start'><EmailIcon color='action' /> </InputAdornment>) }} />
          <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 3, width: 350, marginLeft: 15 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LockIcon color='action' />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={togglePasswordVisibility} edge='end'>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
          <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center', fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}>
            Forgot password?
          </Typography>
          <Button variant="outlined" color="primary" fullWidth sx={{ color: 'black', fontWeight: 'bold', borderRadius: 20, width: 200, height: 50, marginBottom: 2, marginLeft: 24, fontSize: 20 ,borderColor:'black'}}>
            Login
          </Button>
          <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center', fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}>
            Don't have an account? Sign Up
          </Typography>
        </Box>
      </Box>
    // </Box>


  );
}

export default LoginForm