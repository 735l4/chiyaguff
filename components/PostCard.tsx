import React, { useState } from "react";

interface postInterface {
    data: {
        id: number,
        title: string,
        avatar: string,
        author: string,
        date: string,
        reaction: number,
        comment: number,
        readCount: number
    },
}


export const PostCard: React.FC<postInterface> = ({children, data}) => {
    const [post, setPost] = useState(data);
    const [isLiked, setisLiked] = useState(false);

    function reactionUpdate() {
        setisLiked(!isLiked);
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="user-info">
                    <img className="avatar" src={post.avatar} alt="man" />
                    <span className="user-name">{post.author} </span>
                    <span className="date"> {post.date}</span>
                </div>
                <span className="post-title">{post.title}</span>
                <span className="tags">
                    <a href="#">react-js</a>
                    <a href="#">component</a>
                    <a href="#">webpage</a>
                </span>
            </div>
            <div className="card-footer">
                <div className="right-section">
                    <button className={`btn btn-react ${isLiked ? 'active' : ''}`} onClick={reactionUpdate}>
                        <i className={`${isLiked ? 'text-red fa' : 'far'} fa-heart`}></i>&nbsp;
                        {isLiked ? post.reaction + 1 : post.reaction} reactions
                    </button>
                    <button className="btn cmt-btn">
                        <i className="far fa-comment"></i>&nbsp;
                        {post.comment} comments
                    </button>
                </div>
                <div className="left-section">
                    <span style={{fontSize: '0.5rem', paddingRight: '10px'}}>{post.readCount} min read</span>
                    <a href="#" className="btn"><i className="far fa-bookmark"></i></a>
                </div>
            </div>
        </div>
    );
}