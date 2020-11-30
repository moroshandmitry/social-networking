import React from 'react';

import s from './Profile.module.scss'
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
        <div className={s.profile}>
            <div>
                <img className={s.banner} src={'https://wardleonard.com/wp-content/uploads/2016/04/back_globalsolutions-1200x300.jpg'} alt={'Banner'} />
            </div>
            <div className={s.avatar_desc}>
                Ava + descriptions
            </div>
            <MyPosts />
        </div>
  );
}