import styled from 'styled-components';

const time = '08:00';
const startingDate = 25;
const active = {
  30: ['08:00', ],
};

const Wrapper = styled.div`
 
  padding-left: 12%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  position: relative;
  font-size: 1.5rem;

  &::before {
    content: '09:00';
    color: #c1c1c1;
    display: block;
    position: absolute;
    top: 27px;
    left: 20px;
  }

  @media(max-width: 739.9px) {
    &::before {
    top: 78%;
    left: 8px;
    font-size: 1rem;
  }
 }
`;

const Cell = styled.div`
  height: 41px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  border-bottom: 2px solid #ebebeb;
  border-right: ${({ border }) => ((border === 'false') ? "none" : "2px solid #ebebeb")};
`;

const CellIn = styled.div`
  height: 95%;
  width: 95%;
  background-color: ${({ date, time }) => ((active[+date]?.includes(time)) ? "#ebecff" : "")};
`;

export const MainTop = () => {
  let start = startingDate;
  const getContent = () => {
    let content = [];
    for(let i = 1; i <= 6; i++) {
      content.push(<Cell border="true" key={i}><CellIn date={start} time={time} /></Cell>);
      start++;
    }
    content.push(<Cell border="false" key={7}><CellIn date={start} time={time} /></Cell>);
    return content;
  } 

  return (
    <Wrapper>
      {getContent()}
    </Wrapper>
  )
};