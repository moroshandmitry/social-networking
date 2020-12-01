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
            <Post message={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}/>
            <Post message={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'}/>
        </div>
    );
}