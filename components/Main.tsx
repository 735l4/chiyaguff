import React, { useCallback, useEffect, useRef, useState } from "react";
import { PostCard } from "./PostCard";
import { Sidebar } from "./Sidebar";
import data from '../posts.json';

export const Main: React.FC = () => {
    const [posts, setPosts] = useState(data);

    return (
        <main>
            <div className="container">
                <div id="grid">
                    <Sidebar />
                    <div className="col" style={{width: '100%'}}>
                        {posts.map((data) => {return <PostCard key={data.id} data={data} />})}
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-title">
                                <img src="https://picsum.photos/800/500" alt="" />
                            </div>
                            <div className="card-body">
                                Black Lives Matters
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">
                                <img src="https://picsum.photos/800/500" alt="" />
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquam error explicabo, nisi consequatur soluta aperiam ipsam omnis a iste pariatur dignissimos aut molestias? Soluta itaque doloribus ea obcaecati maxime!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

}