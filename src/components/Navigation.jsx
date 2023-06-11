import styled from 'styled-components';
import { ArrowLeft } from './ArrowLeft';
import { ArrowRight } from './ArrowRight';
import { Dates } from './Dates';
import { Days } from './Days';


const Wrapper = styled.section`
  padding: 3% 0% 6% 12%;
  border-bottom: 2px solid #ebebeb;
  background-color: #f6f6f6;
  `;

const WeekWrap = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  grid-row-gap: 10%;
  `;

const Text = styled.span`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 7;
`;


export const Navigation = () => {
  return (
    <Wrapper>
      <WeekWrap>
        <Days />
        <Dates />
        <ArrowLeft />
        <Text>March 2019</Text>
        <ArrowRight />
      </WeekWrap>
    </Wrapper>
  );
}