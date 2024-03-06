import React,{useState} from 'react'
import { Box, Button, Card, CardMedia, Paper, TextField, Typography,IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function BusinessForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle file selection
    const file = event.target.files[0];
    setSelectedFile(file);

    // You can perform additional actions with the selected file if needed
    console.log('Selected file:', file);
  };

  // Reference for the hidden file input
  const fileInputRef = React.createRef();


  return (

      <Box sx={{ display: 'flex',width:'100%',justifyContent:'space-around',gap: '3', backgroundColor: '#ABCDCD'}}>
        <Box>
        <Typography variant='h3'sx={{marginTop:-11,marginLeft:50}}>COMPANY/PRODUCT PROFILE</Typography>
        </Box>
      <Box sx={{marginLeft:25}}>
          <Box>
            <Typography  sx={{marginLeft:-130,marginTop:3,fontSize:20}}>Company Name  </Typography>
            <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-108,marginTop:-5,width:300}} />
            </Box>
          <Box>
            <Typography sx={{marginLeft:-130,fontSize:20,marginTop:3}}>Product Name </Typography>
            <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-108,marginTop:-4,width:300}} />
            </Box>
          <Box>
          <Typography sx={{marginLeft:-130,fontSize:20,marginTop:3}}>Email ID </Typography>
          <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-108,marginTop:-3,width:300}} />

 
          </Box>
        
</Box>
<Box>
  <Box>
<Typography sx={{fontSize:20,marginLeft:-65,marginTop:3}}>Address</Typography>
<TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-51,marginTop:-5,width:300}} />


  </Box>
  <Box>
  <Typography sx={{fontSize:20,marginLeft:-65,marginTop:4}}>Logo</Typography>
<TextField id="outlined-basic"  variant="outlined"label="Upload Image" InputLabelProps={{ shrink: false }} 
InputProps={{
  endAdornment: (
    <FileUploadOutlinedIcon
      sx={{ cursor: 'pointer', color: 'action', marginLeft: -5 }}
      onClick={handleFileUpload}
      />
    ),
  }}
sx={{marginLeft:-51,marginTop:-5,width:300}} />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

  </Box>
  <Box>
  <Typography sx={{fontSize:20,marginLeft:-65,marginTop:4}}>Phone No</Typography>
<TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-51,marginTop:-5,width:300}} />

  </Box>
  </Box>
<Box>
  <Typography variant='h5' sx={{marginTop:33,marginLeft:-83,fontWeight:'500',marginBottom:5}}>SOCIAL MEDIA CHANNELS</Typography> 
 </Box> 
  <Box> 
  <Checkbox {...label} sx={{marginTop:38,marginLeft:-85}} />
 </Box>

  <Box>
    <Typography sx={{marginTop:39,marginLeft:-82,fontSize:20}}>Facebook</Typography>
  </Box>
  

<Box>
    <Checkbox {...label} sx={{marginTop:43,marginLeft:-89}} />  
 </Box>

  <Box>
    <Typography sx={{marginTop:44,marginLeft:-86,fontSize:20}}>Instagram</Typography>
  </Box>
  <Box>
     <Checkbox {...label} sx={{marginTop:48,marginLeft:-93}} />   
 </Box>
          <Box>
    <Typography sx={{marginTop:49,marginLeft:-90,fontSize:20}}>LinkedIn</Typography>
  </Box>
  <Box>
  <Checkbox {...label} sx={{marginTop:38,marginLeft:-70}} />   
 </Box>
          <Box>
    <Typography sx={{marginTop:39,marginLeft:-67,fontSize:20}}>Twitter</Typography>
  </Box>
  <Box>
   <Checkbox {...label} sx={{marginTop:43,marginLeft:-74}} />  
 </Box>
          <Box>
    <Typography sx={{marginTop:44,marginLeft:-71,fontSize:20}}>YouTube</Typography>
  </Box>
<Box>
  <Button variant="contained" sx={{width:200,height:70,marginTop:57,marginLeft:-95,backgroundColor:'white',color:'black',fontSize:25}}>SUBMIT</Button>
  </Box>

  </Box>

  );
}

export default BusinessForm