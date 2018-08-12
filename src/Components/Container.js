import React, {Component} from 'react';
import PostPreview from './PostPreview';
import {blogPosts} from '../post';

class Container extends Component{
    render(){
        //console.log("Posts from Container", {blogPosts});

        const postPreviews = blogPosts.map((post) =>{
            return <PostPreview 
                    title = {post.postTitle}
                    subTitle = {post.postSubtitle}
                    date = {post.postDate} />
        });
        return(
            <div className="container">
                <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    
                    {postPreviews}
                    
                    <div className="clearfix">
                    <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Container;