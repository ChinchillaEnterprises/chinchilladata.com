import React from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, IconButton } from '@mui/material';


// components
import Iconify from '../components/iconify';
// sections
import {
  QDM,
  DataSets,
  QDMoutput,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  // const showDatasets
  const [showDatasets, setShowDatasets] = React.useState(true);

  // toggle showDatasets
  const toggleShowDatasets = () => {
    setShowDatasets(!showDatasets);
  };


  const dataSetsList = [...Array(2)].map((_, index) => ({
    id: faker.datatype.uuid(),
    title: faker.name.jobTitle(),
    description: faker.name.jobTitle(),
    image: `/assets/images/covers/cover_${index + 1}.jpg`,
    postedAt: faker.date.recent(),
  }));

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>

          <Grid item xs={4} md={4} lg={4} />

          <Grid item xs={3} md={3} lg={3}>
            <QDM
              title="QDM"
              list={[...Array(1)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                // description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}

            />
          </Grid>

          <Grid item xs={5} md={5} lg={4} />

          <Grid item xs={5} md={5} lg={5} />

          <Grid item xs={2} md={2} lg={2}>

            <IconButton onClick={toggleShowDatasets}>
              {showDatasets ? (
                <Iconify icon="eva:eye-off-fill" /> // For Hide when datasets are showing
              ) : (
                <Iconify icon="eva:eye-fill" /> // For Show when datasets are hidden
              )}
            </IconButton>

          </Grid>

          <Grid item xs={5} md={5} lg={5} />

          {/* Fixed conditional rendering */}
          {showDatasets && dataSetsList.length > 0 && (
            <>
              <Grid item xs={12} md={dataSetsList.length * 1} lg={dataSetsList.length * 1} />
              <Grid item xs={12} md={dataSetsList.length * 4} lg={dataSetsList.length * 4}>
                <DataSets
                  title="Data Sets"
                  list={dataSetsList}
                />
              </Grid>
              <Grid item xs={12} md={dataSetsList.length * 2} lg={dataSetsList.length * 2} />
            </>
          )}

          {!showDatasets && (
            <Grid item xs={5} md={5} lg={5} />

          )}

          {/* <Grid item xs={1} md={1} lg={6} /> */}
          <Grid item xs={12} md={12} lg={12}>
            <QDMoutput
            />
          </Grid>
          {/* <Grid item xs={2} md={2} lg={0} /> */}
        </Grid>
      </Container>
    </>
  );
}
