import React from "react";

function SayHello(){
    const sayHello=()=>{
        console.log("Hey You invoked me!!");
    };
    return (
        <div>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}
export default SayHello;