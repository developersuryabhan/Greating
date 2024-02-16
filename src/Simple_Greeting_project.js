import React from 'react'
import './style.css'

const Simple_Greeting_project = () => {
    const curDate = new Date(2024, 2, 2, 9).getHours();
    let greetingMsg;
    const cssStyle = {}

    if (curDate >= 0 && curDate < 12) {
        greetingMsg = "Good Morning";
        cssStyle.color = 'green';
    } else if (curDate >= 12 && curDate < 19) {
        greetingMsg = "Good Afternoon";
        cssStyle.color = 'Orange';
    } else {
        greetingMsg = "Good Night";
        cssStyle.color = 'Black';
    }
    return (
        <>
            <div>
                <h1> Hello Suryabhan Sir, <span style={cssStyle}> {greetingMsg}</span>...!</h1>
            </div>
        </>
    )
}
export default Simple_Greeting_project

