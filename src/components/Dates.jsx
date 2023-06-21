import { useEffect, useState } from 'react';
import styled from 'styled-components';


const startDate = 25;
const selectedDate = 29;
const week = startDate + 7;

const WeekDates = styled.span`
font-size: 1.6rem;
display: flex;
align-items: center;
justify-content: center;
width: 3.5rem;
height: 3.5rem;
font-weight: 500;
border-radius: 50%;
cursor: pointer;

color: ${({ selected, active }) => ((selected === active) ? "#ffffff" : "#000000")};
background-color: ${({ selected, active }) => ((selected === active) ? "#f60909" : "none")};

@media(max-width: 729.9px) {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
}

@media(max-width: 439.9px) {
  font-size: 1rem;
  width: 1.9rem;
  height: 1.9rem;
}
`;

export const Dates = () => {

  const [dates, setDates] = useState([]);
  const [active, setActive] = useState(selectedDate);

  const handleClickDate = (e) => {
    const selected = e.currentTarget.dataset.id;
    setActive(+selected);
  };

  useEffect(() => {
    for (let i = startDate; i < week; i++) {
      setDates((prevDates) => [...prevDates, i]);
    }
    return () => {
      setDates([]);
    }
  }, []);

  return (
    <>
    {dates.map((item) =>
            <WeekDates data-id={item} key={item} selected={item} active={active}>{item}</WeekDates>
        )}
    </>
  );
}