import styled from 'styled-components';

const weekDays =['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const WeekDays = styled.span`
font-size: 1rem;
font-weight: 500;

@media(max-width: 739.9px) {
  font-size: 0.8rem;
}
`;

export const Days = () => {
  return (
    <>
      {weekDays.map((item, idx) =>
          <WeekDays key={idx}>{item}</WeekDays>
      )}
    </>
  )
}