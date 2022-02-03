import React, { useCallback, useEffect, useRef } from "react";


export const Header: React.FC =  () => {

    let prevKey = '';
    const textInput = useRef<HTMLInputElement>(null);

    const handleKeyPress = useCallback((event) => {
        if(prevKey == "Meta" && event.key == "k"){
            if(textInput.current != null) {
                textInput.current.focus();
            }
        }
        prevKey = event.key;
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleKeyPress]);


    return (
        <header>
            <div id="nav">
                <ul className="nav-items">
                    <li><a href="#">Chiyaguff</a></li>
                    <li>
                        <input type="text" ref={textInput} id="search" placeholder="Search...." />
                    </li>
                    <li><button className="btn btn-post">Create Post</button></li>
                    <li id="dropdown">
                        <a href="#">
                            <img src="https://randomuser.me/api/portraits/men/4.jpg" style={{height: '30px', borderRadius: '50%'}} alt="" />
                        </a>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}