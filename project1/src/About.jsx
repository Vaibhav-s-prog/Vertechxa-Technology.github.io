import React from "react";
import web from "../src/Photo/img1.jpeg";
import Common from "./Common";


const About = () => {
    return (
        <>
            <Common
                name="Welcom to About Page"
                imgsrc={web}
                visit="/Contact"
                btname="Contact Now" />
        </>
    );
};

export default About;