import React from 'react';

const MenuTitle = ({menu}) => {
  const eventStart = new Date(menu && menu.startDate)
  const eventEnd = new Date(menu && menu.endDate)
  const startDate = eventStart.toLocaleDateString('fr')
  const endDate = eventEnd.toLocaleDateString('fr')

  return (
    <>
      Du {startDate} au {endDate}
    </>
  )
};

export default MenuTitle;