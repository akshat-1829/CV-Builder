import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Add as AddIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { theme } from '@cv-builder/ui-theme';


export function App() {
  const [cvCount, setCvCount] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CV Builder
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to CV Builder
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Create professional resumes in minutes with our easy-to-use builder.
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
            onClick={() => setCvCount(cvCount + 1)}
          >
            Create New CV
          </Button>
        </Box>

        {/* CV Cards Grid */}
        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <DescriptionIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">My Resume</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Software Engineer position
                </Typography>
                <Button size="small" sx={{ mt: 2 }}>
                  Edit
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <DescriptionIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">Senior Dev CV</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Senior position applications
                </Typography>
                <Button size="small" sx={{ mt: 2 }}>
                  Edit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}

        {cvCount > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography color="success.main">
              You've created {cvCount} new CV(s)!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App;
