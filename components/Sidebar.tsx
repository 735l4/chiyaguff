import React from "react";


export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <li className="sidebar-items"><a href="#"><i className="far fa-home"></i>&nbsp;Home</a></li>
            <li className="sidebar-items"><a href="#"><i className="far fa-book"></i>&nbsp;Reading List</a></li>
            <li className="sidebar-items"><a href="#"><i className="far fa-headphones"></i>&nbsp;Listening</a></li>
            <li className="sidebar-items"><a href="#"><i className="far fa-podcast"></i>&nbsp;Poadcasts</a></li>
            <li className="sidebar-items"><a href="#"><i className="far fa-video"></i>&nbsp;Videos</a></li>
            <li className="sidebar-items"><a href="#"><i className="far fa-tags"></i>&nbsp;Tags</a></li>
        </div>
    )
}