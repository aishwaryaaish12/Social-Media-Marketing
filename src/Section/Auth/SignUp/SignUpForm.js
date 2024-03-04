import React,{useState} from 'react'
import { Box, Button, Card, CardMedia, Paper, TextField, Typography,IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (passwordType) => {
    if (passwordType === 'password') {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    } else if (passwordType === 'confirmPassword') {
      setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    }
  };

  return (
    // <Box >

      <Box sx={{ display: 'flex',width:'100%',justifyContent:'space-around',gap: '3', backgroundColor: '#ABCDCD'}}>
        <Box
          component="img"
          sx={{ width: '40%',objectFit:'contain' }}
          src="/Assets/undraw_Sign_up_n6im.png"
          alt="Live from space album cover"
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
          <Typography variant="h6" sx={{ marginBottom: 4, textAlign: 'center', fontWeight: 'bold',fontSize: 20,marginLeft:18,marginTop:5 }}>
            Sign Up
          </Typography>
          <TextField label="Name" fullWidth variant="outlined" sx={{ marginBottom: 6 , width: 350, marginLeft: 15}} InputProps={{ startAdornment: (<InputAdornment position='start'><EmailIcon color='action' /> </InputAdornment>) }} />

          <TextField label="Email ID" fullWidth variant="outlined" sx={{ marginBottom: 6 , width: 350, marginLeft: 15}} InputProps={{ startAdornment: (<InputAdornment position='start'><EmailIcon color='action' /> </InputAdornment>) }} />
          <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 6, width: 350, marginLeft: 15 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LockIcon color='action' />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => togglePasswordVisibility('password')} edge='end'>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
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
                <IconButton onClick={() => togglePasswordVisibility('confirmPassword')} edge='end'>
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

          <Button variant="outlined" color="primary" fullWidth sx={{ color: 'black', fontWeight: 'bold', borderRadius: 20, width: 200, height: 50, marginBottom: 2, marginLeft: 24, fontSize: 20 ,borderColor:'black',backgroundColor:'#ABCDCD', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
            Sign Up
          </Button>
          <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center', fontSize: 16, fontWeight: 'bold', cursor: 'pointer', marginLeft: 19 }}>
            Already have an account? Login</Typography>
        </Box>
      </Box>
    // </Box>


  );
}

export default SignUpForm