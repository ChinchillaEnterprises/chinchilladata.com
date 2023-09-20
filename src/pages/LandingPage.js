import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, Grid } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // boxShadow: theme.customShadows.card,
  // backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />


        <Container maxWidth="sm">
          <StyledContent>

          <StyledSection>

            <Typography variant="h1" gutterBottom align='center' >
              AI Services
            </Typography>


              <Stack spacing={1} sx={{ p: 3 }}>
              {/* <Grid container spacing={1}> */}
            {POSTS.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
            </Stack>
          {/* </Grid> */}


          <Button fullWidth size="large" variant="contained" component={Link} to="/dashboard/app">
              Get Started
            </Button>
                </StyledSection>

          </StyledContent>


        </Container>

      </StyledRoot>
    </>
  );
}
