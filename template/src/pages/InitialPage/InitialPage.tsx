import React from 'react';

import { ReactComponent as MrRobot } from '../../assets/icons/mr-robot.svg';

import './InitialPage.scss';

const InitialPage = () => {
  return (
    <div className='page-container'>
      <MrRobot className='best-icon' />
      <div className='typewriter'>
        <h1>Hello World!</h1>
      </div>
    </div>
  );
};

export default InitialPage;
