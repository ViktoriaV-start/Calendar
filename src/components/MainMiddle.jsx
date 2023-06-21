import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { VisibilityContext } from '../VisibilityContext';


const time = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',];
const days = [0, 1, 2, 3, 4, 5];
const active = {
  5: ['13:00', ],
  6: ['13:00', '21:00', ],
  7: ['13:00', ],
  8: ['13:00', '16:00' ],
  9: ['13:00', '18:00'],
  10: ['09:00', '13:00', ],
  11: ['13:00', ],
};
const startingDate = 5;

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
    left: 3%;
  }


 @media(max-width: 659.9px) {
    &::before {
    left: 2%;
  }
 }

 @media(max-width: 589.9px) {
    &::before {
    left: 1%;
    font-size: 1rem;
  }

  @media(max-width: 399.9px) {
    &::before {
    left: 0.8%;
    font-size: 0.8rem;
    }
  }

  @media(max-width: 299.9px) {
    &::before {
    left: 0.5%;
    font-size: 0.7rem;
    }
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
    padding-top: 80%;
  }

  border-bottom: 2px solid #ebebeb;
  border-right: ${({ border }) => ((border === 'false') ? "none" : "2px solid #ebebeb")};
`;

const CellIn = styled.div`

  position: absolute;
  top: 2.5%;
  left: 2.5%;
  right: 0;
  bottom: 0;

  height: 95%;
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