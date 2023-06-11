import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { VisibilityContext } from '../VisibilityContext';


const time = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',];
const days = [0, 1, 2, 3, 4, 5];
const active = {
  25: ['13:00', ],
  26: ['13:00', '21:00', ],
  27: ['13:00', ],
  28: ['13:00', '16:00' ],
  29: ['13:00', '18:00'],
  30: ['09:00', '13:00', ],
  31: ['13:00', ],
};
const startingDate = 25;

const GridWrap = styled.div`
  display: grid;
  grid-template-rows: repeat(11, 1fr);
`;

const Wrapper = styled.div`
  padding-left: 12%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;
  font-size: 1.5rem;

  &::before {
    content:  '${props => props.time}';
    color: #c1c1c1;
    display: block;
    position: absolute;
    top: 80%;
    left: 20px;
  }

  @media(max-width: 739.9px) {
    &::before {
    top: 83%;
    left: 5px;
    font-size: 1rem;
  }
 }
`;

const Cell = styled.div`
position: relative;
  width: 100%;

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding: 37%;
  }

border-bottom: 2px solid #ebebeb;
border-right: ${({ border }) => ((border === 'false') ? "none" : "2px solid #ebebeb")};
`;

const CellIn = styled.div`

position: absolute;
  top: 3.5%;
  left: 1.5%;
  right: 0;
  bottom: 0;

  height: 94%;
  width: 95%;
  
  background-color: ${({ date, time }) => ((active[+date]?.includes(time)) ? "#ebecff" : "")};
`;

export const MainMiddle = () => {
  const { toggleVisibility } = useContext(VisibilityContext);
  const [elem, setElem] = useState(null);

  const getContent = (time) => {
    let content = [];

    days.map((day) => {
      let date = startingDate + day;
      content.push(<Cell border="true" time={time} date={date} key={day}><CellIn onClick={(e) => handleClickEvent(e)} date={date} time={time} /></Cell>);
    });

    content.push(<Cell border="false" key={7}><CellIn onClick={(e) => handleClickEvent(e)} date={(startingDate + 6)} time={time} /></Cell>);
    return <Wrapper time={time} key={time}>{content}</Wrapper>;
  };

  const handleClickEvent = (e) => {
    toggleVisibility(false);
    if(elem) {
      elem.classList.remove('selected');
    }

    const time = e.target.getAttribute('time');
    const date = e.target.getAttribute('date');

    if(active[+date]?.includes(time)) {
      toggleVisibility(true);
      setElem(e.target);
    }
  };

  useEffect(() => {
    if(elem) {
      elem.classList.add('selected');
    }
  }, [elem]);

  return (
    <GridWrap>
      {time.map((item) => getContent(item))}
    </GridWrap>
  )
};