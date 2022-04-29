import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
           {/*  <Helmet>
                <title> About-genious-car </title>
            </Helmet> */}

            <PageTitle title='About' ></PageTitle>
            <h3>This is About</h3>
        </div>
    );
};

export default About;