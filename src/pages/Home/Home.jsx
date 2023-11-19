import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import TabPanel from '../../components/TabPanel/TabPanel';
import Posts from '../../components/Posts/Posts';
import AuthModal from '../../components/AuthModal/AuthModal';

const Home = () => {
    return (
        <div>
           <Header/>
           <Banner/>
           <TabPanel/>
           <Posts/>

            
        </div>
    );
};

export default Home;