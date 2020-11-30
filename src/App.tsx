import React from 'react';

import s from './App.module.scss';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from "./components/Profile/Profile";

export const App = () => {
  return (
    <div className={s.app_wrapper}>
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
}