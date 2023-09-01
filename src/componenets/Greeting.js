import React,{useState,useEffect} from "react";


const Greeting = () => {
    const [flag,setFlag]=useState("");
    
    useEffect(() => {
        let d=new Date();
        if(d.getHours()<12){
            setFlag("Morning")
        }
        else if(d.getHours()<18){
            setFlag("Afternoon")
        }
        else{
            setFlag("Evening")
        }
    }, []);

    return <div className="greeting"><h1>Good {flag}</h1></div>;
};


export default Greeting;
