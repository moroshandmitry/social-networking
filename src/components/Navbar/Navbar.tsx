import React from 'react';

import './Navbar.scss'

export const Navbar = () => {
  return (
        <nav className={'nav'}>
            <div className={'nav-items'}>
                <div className={'nav-item'}>
                    <a className={'nav-item-link'} href={'#'}>Profile</a>
                </div>
                <div className={'nav-item'}>
                    <a className={'nav-item-link'} href={'#'}>Messages</a>
                </div>
                <div className={'nav-item'}>
                    <a className={'nav-item-link'} href={'#'}>News</a>
                </div>
                <div className={'nav-item'}>
                    <a className={'nav-item-link'} href={'#'}>Music</a>
                </div>
                <div className={'nav-item'}>
                    <a className={'nav-item-link'} href={'#'}>Settings</a>
                </div>
            </div>
        </nav>
  );
}