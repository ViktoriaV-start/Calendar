import styled from 'styled-components';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 6.1%;
  border-bottom: 2px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 200;

  @media(max-width: 729.9px) {
    padding: 3%;
  }

  @media(max-width: 575.9px) {
  padding: 3%;
  }
  `;

const HeaderText = styled.div`
  font-size: 2.3rem;

  @media(max-width: 729.9px) {
    font-size: 2rem;
  }

  @media(max-width: 575.9px) {
  font-size: 1.3rem;
  }
`;

const HeaderButton = styled.span`
  font-size: 3.6rem;
  color: red;
  cursor: pointer;

  @media(max-width: 575.9px) {
  font-size: 2rem;
  }
`;

export const Header = () => {
  const handleClickAdd = () => {
    prompt('https://calendar.com \nEnter event time:')
  }

  return (
    <>
      <Wrapper>
        <HeaderText>Interview Calendar</HeaderText>
        <HeaderButton onClick={handleClickAdd}>+</HeaderButton>
      </Wrapper>
    </>
  );
}