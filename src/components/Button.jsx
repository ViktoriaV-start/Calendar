import styled from 'styled-components';

const Wrapper = styled.section`

  color: #f60909;
  font-size: 1.6rem;
  cursor: pointer;

  @media(max-width: 575.9px) {
  font-size: 1.1rem;
  }
  `;

export const Button = ({ text }) => {

  return (
    <>
    <Wrapper>
      {text}
    </Wrapper>

    </>
  );
}