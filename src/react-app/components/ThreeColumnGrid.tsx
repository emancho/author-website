import * as React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

// 1. Define the parameters (props) the component will accept
interface ThreeColumnGridProps {
    leftContent: React.ReactNode;
    middleContent: React.ReactNode;
    rightContent: React.ReactNode;
    leftTitle: string;
    middleTitle: string;
    rightTitle: string; 
}

export default function ThreeColumnGrid({ leftTitle, leftContent, middleTitle, middleContent, rightTitle, rightContent }: ThreeColumnGridProps) {
    return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>

        {/** Left Column **/}
        <Grid size={{ xs: 12, md: 4 }}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Stack spacing={2}>
              {/* Title */}
              <Typography variant="h6" component="h2">
                {leftTitle}
              </Typography>
              {/* Content */}
              <Box>
                {leftContent}
              </Box>
            </Stack>
          </Grid>

          {/** Middle Column **/}
          <Grid size={{ xs: 12, md: 4 }}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Stack spacing={2}>
              {/* Title */}
              <Typography variant="h6" component="h2">
                {middleTitle}
              </Typography>
              {/* Content */}
              <Box>
                {middleContent}
              </Box>
            </Stack>
          </Grid>

          {/** Rightt Column **/}
          <Grid size={{ xs: 12, md: 4 }}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Stack spacing={2}>
              {/* Title */}
              <Typography variant="h6" component="h2">
                {rightTitle}
              </Typography>
              {/* Content */}
              <Box>
                {rightContent}
              </Box>
            </Stack>
          </Grid>
      </Grid>
    </Box>
    );
}




