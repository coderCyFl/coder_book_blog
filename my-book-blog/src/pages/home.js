import React from "react";
import {MasonryPost, PostMasonry} from '../components/common'
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";


const trendingCongig = {
    1 : {
        gridArea: '1 / 2 / 3 / 3'
    }
}


// tbc
const featuredConfig = {
    1 : {
        gridArea: '1 / 1 / 3 / 3'
    }

}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
} 

mergeStyles(trending,trendingCongig)
mergeStyles(featured,featuredConfig)

const lastFeatured = featured.pop();

// <section className="featured-post-container"> 
// <PostMasonry post={featured} columns={2} tagsOnTop={true}/>
// <MasonryPost post={lastFeatured} tagsOnTop={true}/>
// </section>


export default function Home () {
    return (
        <section className="container home">
            <div className="row">
                <h1>Featured Post</h1> 
                <section className="featured-post-container">
                    <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
                    <MasonryPost post={lastFeatured} tagsOnTop={true}/>                    
                </section>
                <h1>Recent Post</h1>
                <PostMasonry posts ={trending} columns={3}/>
            </div>
        </section>
        
    )
}