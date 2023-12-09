import React from 'react';
import { categoryColors } from './style';

export default function MasonryPost({ post, tagsOnTop }) {
    // Check if post and post.categories are defined
    if (!post || !post.categories) {
        return null; // Or handle the case where post or post.categories is undefined
    }

    const imageBackground = { backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")` };
    const style = { ...imageBackground, ...post.style };

    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className='image-text'>
                <div className='tag-container'>
                    {post.categories?.map((tag, ind) =>
                        <span key={ind} className='tag' style={{ backgroundColor: categoryColors[tag] }}>
                            {tag.toUpperCase()}
                        </span>
                    )}
                </div>
                <h2 className='image-title'>{post.title}</h2>
                <span className='image-date'>{post.date}</span>
            </div>
        </a>
    );
}
