import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


export default function Strategy({ data }) {

  let navigate = useNavigate();

  return (
    <Box>
      {
        data.map((text, index) => {
              return <Typography key={index}>
                {text}
              </Typography>
            })
        }
        <Grid item xs={12} md={6}>
            <Button
              onClick={() => navigate('/')}
              variant="contained"
              size="large"
              sx={{
                color: "white",
                font: "bold",
                backgroundColor: "#D2042D",
                ":hover": {
                  bgcolor: "#D2042D",
                  color: "white",
                },
                textTransform: "none",
                fontFamily: "arial",
                margin: 2
              }}
            >
              Home
            </Button>
        </Grid>
    </Box>
    
  );
}