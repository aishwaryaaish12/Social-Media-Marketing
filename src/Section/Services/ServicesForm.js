import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function ServicesForm (){
  return(
    <Box sx={{ display: 'flex',justifyContent:'space-around',gap: '3', backgroundColor: '#ABCDCD',flexDirection:'column'}}>

      <Box sx={{display:'flex',flexDirection:'row'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
        <Box
        component="img"
          sx={{ width: '25%',objectFit:'contain',display:'flex',flexDirection:'column',marginTop:8,marginLeft:38 }}
          src="/Assets/scheduling and posting.png"
          alt=""/>
          <Typography variant='h5' sx={{marginLeft:32,marginTop:1}}>Scheduling and Posting</Typography>
          <Typography variant='h6' sx={{marginLeft:30,fontSize:18,marginTop:1}}>Users can plan and schedule social<br></br> media
posts in advance. This helps <br></br>maintain a 
consistent posting schedule<br></br> and reach 
the audience at optimal times.</Typography>
</Box>
      <Box sx={{display:'flex',flexDirection:'column'}}>
        <Box         component="img"
          sx={{ width: '20%',objectFit:'contain',display:'flex',flexDirection:'column',marginTop:8,marginLeft:38 }}
          src="/Assets/Content Calender.png"
          alt=""/>
                    <Typography variant='h5' sx={{marginLeft:37,marginTop:1}}>Content Calender</Typography>
                    <Typography variant='h6' sx={{marginLeft:33,fontSize:18,marginTop:1}}>Content calendar that provides a<br></br> visual overview 
of scheduled posts,<br></br> making it easier to plan and 
organize<br></br> content across different platforms.</Typography>



      </Box>
      </Box>

      <Box sx={{display:'flex',flexDirection:'row'}}>

      <Box sx={{display:'flex',flexDirection:'column'}}>
       <Box         component="img"
          sx={{ width: '20%',objectFit:'contain',display:'flex',flexDirection:'column',marginTop:5,marginLeft:38  }}
          src="/Assets/Cross platform posting.png"
          alt=""/>
                    <Typography variant='h5' sx={{marginTop:1,marginLeft:34}}>Cross-Platform Posting</Typography>
                    <Typography variant='h6' sx={{marginLeft:30,fontSize:18,marginTop:1}}>Support posting on multiple social<br></br> media platforms
 simultaneously, saving<br></br> time for users managing 
accounts on<br></br> various channels.</Typography>


      </Box>
<Box sx={{display:'flex',flexDirection:'column'}}> 
       <Box         component="img"
          sx={{ width: '25%',objectFit:'contain',display:'flex',flexDirection:'column',marginTop:5,marginLeft:7 }}
          src="/Assets/Email and whatsapp campaign.png"
          alt=""/>
                              <Typography variant='h5' sx={{marginTop:1,marginLeft:0}}>Email and Whatsapp Campaign</Typography>
                    <Typography variant='h6' sx={{marginLeft:0,fontSize:18,marginTop:1}}>
                    Support Email and WhatsApp campaign</Typography>


</Box>
      </Box>
      </Box>

      
  );
}

  export default ServicesForm