import styled from 'styled-components';
import { MainTop } from './MainTop';
import { useState } from 'react';
import { MainMiddle } from './MainMiddle';
import { MainBottom } from './MainBottom';


const Grid = styled.section`
background: #ffffff;
padding: 0;
`;

export const Main = () => {
  
  return (
    <Grid>
      {/* <MainTop /> */}
      <MainMiddle />
      <MainBottom />
    </Grid>
  )
};
