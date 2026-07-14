import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface LinkedSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

export default function LinkedSection({ id, title, children }: LinkedSectionProps) {
  return (
    <Box id={id} component="section" sx={{ my: 4, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h2" component="h3" gutterBottom sx={{fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 500}}>
                {title}
            </Typography>
        </Box>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ mt: 2 }}>
        {children}
      </Box>
      
    </Box>
  );
}
