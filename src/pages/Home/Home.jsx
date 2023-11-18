import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import TabPanel from '../../components/TabPanel/TabPanel';
import Posts from '../../components/Posts/Posts';

const Home = () => {
    return (
        <div>
           <Header/>
           <Banner/>
           <TabPanel/>
           <Posts/>
            This is tab panel and buttons.
            This is main content posts in the middle & groups on the side.
            
        </div>
    );
};

export default Home;