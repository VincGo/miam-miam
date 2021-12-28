import React from 'react';

const TitleList = ({listDate}) => {
  const rawDate = new Date(listDate)
  const date = rawDate.toLocaleDateString('fr')

  return (
    <>
      {date}
    </>
  );
};

export default TitleList;