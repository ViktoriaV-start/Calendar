import styled from 'styled-components';
import { Button } from '../Button';
import { useContext } from 'react';
import { VisibilityContext } from '../VisibilityContext';

const Wrapper = styled.section`
  height: 7%;
  background-color: #f6f6f6;
  border-top: 2px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6.1%;
  position: sticky;
  bottom: 0;
  z-index: 5;
  `;

export const Footer = () => {
  const { visibility } = useContext(VisibilityContext);
  return (
    <>
      <Wrapper>
        <Button text='Today' />
        {visibility &&<Button text='Delete' />}
      </Wrapper>
    </>
  );
}