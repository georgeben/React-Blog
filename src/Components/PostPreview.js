import React, { Component } from 'react';

class PostPreview extends Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log("title", this.props.title);        

        return(
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                    {this.props.title}
                    </h2>
                    <h3 className="post-subtitle">
                    {this.props.subTitle}
                    </h3>
                </a>
                <p className="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on {this.props.date}</p>

                <hr />
                </div>
        );
    }
}

export default PostPreview;