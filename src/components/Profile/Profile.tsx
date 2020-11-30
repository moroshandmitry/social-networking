import React from 'react';

import s from './Profile.module.scss'

export const Profile = () => {
  return (
        <div className={s.profile}>
            <div>
                <img className={s.banner} src={'https://wardleonard.com/wp-content/uploads/2016/04/back_globalsolutions-1200x300.jpg'} alt={'Banner'} />
            </div>
            <div>
                Ava + descriptions
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                </div>
            </div>
        </div>
  );
}