import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Stack
        bgcolor="common.white"
        spacing={2}
        display="flex"
        alignItems="center"
        my={5}
        mx={8}
        borderRadius={{ xs: '35%', sm: '50%' }}
        height={'33rem'}
        justifyContent="center"
        minWidth={{ xs: '70%', sm: '35rem' }}
        p={{ xs: 2, sm: 3 }}
      >
        <Typography variant="h4" align="center" fontWeight={600}>
          Paginas de contacto
        </Typography>
        <Button
          sx={{ width: 0.45, borderRadius: 50 }}
          variant="contained"
          startIcon={<GitHubIcon />}
          href="https://github.com/Omar-Code1"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          sx={{ width: 0.45, borderRadius: 50 }}
          variant="contained"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/omar-octavio-sucre-d%C3%ADaz-20a61223a/"
          target="_blank"
        >
          LinkedIn
        </Button>
        <Button
          sx={{ width: 0.45, borderRadius: 50 }}
          variant="contained"
          startIcon={<EmailIcon />}
          href="mailto:mr.omaroctavio@gmail.com"
          target="_blank"
        >
          Gmail
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactPage;
