import React from 'react';

import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
        <nav className={s.nav}>
            <div className={s.items}>
                <div className={s.item}>
                    <a className={s.item_link} href={'#'}>Profile</a>
                </div>
                <div className={s.item}>
                    <a className={s.item_link} href={'#'}>Messages</a>
                </div>
                <div className={s.item}>
                    <a className={s.item_link} href={'#'}>News</a>
                </div>
                <div className={s.item}>
                    <a className={s.item_link} href={'#'}>Music</a>
                </div>
                <div className={s.item}>
                    <a className={s.item_link} href={'#'}>Settings</a>
                </div>
            </div>
        </nav>
  );
}