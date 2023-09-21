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

const QDMContainer = styled(Container)(({ theme }) => ({
  // backgroundImage: `url("/assets/images/covers/cover_1.jpg")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: theme.spacing(4), // Add padding as needed
  borderRadius: '8px',       // If you want to keep the borderRadius
  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',  // If you want to keep the boxShadow
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
        <title> AI Services </title>
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
          <Container id='hero'>

            <StyledContent>

              <StyledSection>

                {/* Hero section */}
                <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '5px' }}>

                  <Typography variant="h1" gutterBottom align='center' >
                    AI
                  </Typography>



                  <Typography variant='p' align='center' paragraph>
                    Modern businesses possess an incredible volume of data, much of which remains untapped. Many organizations are hesitant to leverage AI due to confidentiality concerns and thus leaving information on the table.
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
                </div>
                {/* End of Hero section */}
              </StyledSection>
            </StyledContent>
          </Container>

        </Container>

      </StyledRoot>


      {/* Divider between hero and blog1 */}
      <Divider sx={{ my: 10, bgcolor: '#757575' }} />
      <QDMContainer maxWidth="md" align="center" id='QDM'>
        <Stack spacing={5}>

          <Typography variant="h2" gutterBottom>
            Introducing: Quantum DataMorph™
          </Typography>

          <Typography paragraph variant='h4'>
            Your Data, Your Dashboard

            <br />
            <Typography paragraph>
              With Quantum DataMorph™, you are in full control. The intuitive dashboard allows you to upload files instantly, train GPT AI seamlessly, and more.
            </Typography>
          </Typography>

          <Button  size="large" variant="contained" component={Link} to="/dashboard/app">
                    Get Started
                  </Button>

          <Typography paragraph variant='h6'>
            Confidentiality Ensured: Your data remains in your control.
            <Typography paragraph>
              Our process is designed to ensure that your data is only used to train your personal model and never shared or stored beyond that purpose.
            </Typography>

          </Typography>

          <img
            src="/assets/images/covers/QDM.png"
            alt="Detailed Overview"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}
          />
        </Stack>
        </QDMContainer>

      {/* Divider between hero and blog1 */}
      <Divider sx={{ my: 50, bgcolor: '#757575' }} />
      


      <QDMContainer maxWidth="md" align="center" id='QPL'>
        <Stack spacing={5}>

          <Typography variant="h2" gutterBottom>
            Introducing: Quantum PersonaLink™
          </Typography>

        </Stack>
        </QDMContainer>        

    </>
  );
}
