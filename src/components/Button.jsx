import styled from 'styled-components';

const Wrapper = styled.section`

  color: #f60909;
  font-size: 1.6rem;
  cursor: pointer;
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