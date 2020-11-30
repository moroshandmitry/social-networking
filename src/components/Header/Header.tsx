import React from 'react';

import s from './Header.module.scss'

export const Header = () => {
  return (
        <header className={s.header}>
            <a href={'#'}>
                <img className={s.logo} src={'https://cdn.worldvectorlogo.com/logos/google-messages.svg'} alt={'Logo'} />
            </a>
        </header>
  );
}