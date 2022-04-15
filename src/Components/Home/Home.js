import React, { useEffect, useState } from 'react';
import image from '../../Image/banner.jpg'
import Guides from '../Guides/Guides';
import Footer from '../Shared/Header/Footer/Footer';
import './Home.css'
const Home = () => {

    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGuides(data))
    }, [])


    return (
        <div className=''>
            <div className='row'>
                <div className='banner'>
                    <img className='rounded' src={image} alt="" />
                    <h1 className='heading ms-5'>Perfect Travel Guide</h1>
                </div>

            </div>
            <h3 className='mt-5'>Services</h3>
            <div className='container mx-auto row row-cols-1 row-cols-md-3 g-4 mt-2 '>
                {
                    guides.map(guide => <Guides
                        key={guide.id}
                        guide={guide}
                    ></Guides>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;