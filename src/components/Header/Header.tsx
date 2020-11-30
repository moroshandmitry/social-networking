import React from 'react';

import './Header.scss'

export const Header = () => {
  return (
        <header className={'header'}>
            <a href={'#'}>
                <img className={'logo'} src={'https://cdn.worldvectorlogo.com/logos/google-messages.svg'} alt={'Logo'} />
            </a>
        </header>
  );
}