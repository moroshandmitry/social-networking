import React, { useState } from 'react';

import s from './Post.module.scss'


export const Post = ({message}:{[key:string]:any}) => {
    const [likeCounts, setLikeCounts] = useState(0);

    const handleIncreaseCount = (value: number) => setLikeCounts(prevState => prevState + value)

    const handleDecreaseCount = (value: number) =>
        setLikeCounts(prevState => {
            const newCount = prevState - value;

            if (newCount < 0) return prevState;

            return newCount;
        });

    return (
        <div className={s.Post}>
            <div className={s.AvatarMessageLikes}>

                <div>
                    <img className={s.Avatar} src={'https://i.pinimg.com/originals/00/3c/c9/003cc9a6329b24fdb4c1a2f843766d25.jpg'} alt="avatar" />
                </div>


                <div className={s.Message}>
                    {message}
                </div>

                <div className={s.Likes}>
                    <img src={'https://www.pinclipart.com/picdir/big/148-1480994_blue-facebook-dislike-facebook-facebook-dislike-like-and.png'}
                         alt={'Dislike'}
                         className={s.img_Like}
                         onClick={ () => handleDecreaseCount(1) }
                    />
                    { likeCounts }
                    <img src={'https://www.shareicon.net/data/2015/08/29/92758_like_606x606.png'}
                         alt={'Like'}
                         className={s.img_Like}
                         onClick={ () => handleIncreaseCount(1) }
                    />
                </div>

            </div>
        </div>
    );
}