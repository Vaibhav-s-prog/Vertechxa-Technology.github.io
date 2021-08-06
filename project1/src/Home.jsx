import React from "react";
import web from "../src/Photo/img1.jpeg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your Business with "
                imgsrc={web}
                visit="/Services"
                btname="Get Started" />

        </>
    );
};

export default Home;