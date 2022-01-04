import React from 'react';

const TitleList = ({list}) => {
  const eventStart = new Date( list?.menu?.startDate)
  const eventEnd = new Date(list?.menu?.endDate)
  const startDate = eventStart.toLocaleDateString('fr')
  const endDate = eventEnd.toLocaleDateString('fr')
  return (
    <>
      {startDate} - {endDate}
    </>
  );
};

export default TitleList;