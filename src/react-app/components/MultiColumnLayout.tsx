import * as React from 'react';
import { Container, Grid } from '@mui/material';

interface MultiColumnLayoutProps {
  leftContent: React.ReactNode; 
  middleContent?: React.ReactNode; 
  rightContent?: React.ReactNode;
}

export default function MultiColumnLayout({ leftContent, middleContent, rightContent }: MultiColumnLayoutProps) {  
  const activeColumns = 1 + (middleContent ? 1 : 0) + (rightContent ? 1 : 0);
  const mdSize = 12 / activeColumns;

  return (
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ alignItems: "center" }}>
          
          {/* COLUMN 1: Always renders because leftContent is required */}
          <Grid size={{ xs: 12, md: mdSize }}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {leftContent}
          </Grid>
          
          {/* COLUMN 2: Only renders if middleContent was provided */}
          {middleContent && (
            <Grid size={{ xs: 12, md: mdSize }}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {middleContent}
            </Grid>
          )}

          {/* COLUMN 3: Only renders if rightContent was provided */}
          {rightContent && (
            <Grid size={{ xs: 12, md: mdSize }}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {rightContent}
            </Grid>
          )}
        </Grid>
      </Container>
  );
}