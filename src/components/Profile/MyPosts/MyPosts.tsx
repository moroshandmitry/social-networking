import React from 'react';

import s from './MyPosts.module.scss'
import { Post } from "./Post/Post";


export const MyPosts = () => {
    return (
        <div className={s.my_posts}>
            <div>
                <textarea className={s.add_post} placeholder={ 'Insert your post!' } />
            </div>
            <div>
                <button className={s.btn_add_post}>Add post</button>
            </div>
            <Post />
        </div>
    );
}