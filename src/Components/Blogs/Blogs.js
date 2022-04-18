import React from 'react';
import Footer from '../Shared/Header/Footer/Footer';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className=' container mx-auto mt-4 '>
            <h1 className='text-danger'>My Blogs</h1>
            <h5 className='mt-4'>Qes no-1: Difference between authorization and authentication?</h5>
            <h5 className='text-danger text-left'>Ans :</h5>
            <div className='row'>
                <div className='auth-one mt-3 blogs col-md-6 col-12 p-4 shadow rounded'>
                    <h5 className='text-primary text-center'>Authorization :</h5>
                    <h6>1. Authorization determines what resources a user can access.</h6>
                    <h6>2. Authorization works through settings that are implemented and maintained by the organization.</h6>
                    <h6>3. Authorization always takes place after authentication.</h6>
                    <h6>4. Authorization isn’t visible to or changeable by the user.</h6>

                </div>
                <div className=' auth-one mt-3 blogs col-md-6 col-12 p-4 shadow rounded  '>
                    <h5 className='text-primary text-center'>Authentication :</h5>
                    <h6>1.Authentication verifies who the user is.</h6>
                    <h6>2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</h6>
                    <h6>3. Authentication is the first step of a good identity and access management process.</h6>
                    <h6>4. Authentication is visible to and partially changeable by the user.</h6>
                </div>
            </div>
            <h5 className='mt-5'>Qes-2: Why are you using firebase? What other options do you have to implement authentication?</h5>
            <h5 className='text-danger'>Ans :</h5>

            <div className='blogs shadow p-3'>
                <p>Google’s Firebase is a mobile platform that lets you develop mobile apps. It is especially geared towards business apps, with the intention of helping businesses grow their user bases and increase their profits through their mobile apps.Let’s look closer at four features that make this platform essential: 1.Incredibly Built-In Analytics.2. App Development Made Easy.3. Growth and User Engagement.4. Increase Your Earnings...
                    <h6 className='mt-2'>Best Open Source Firebase Alternatives</h6>
                    Parse. Parse is a complete open-source application stack and backend framework that offers a collection of tools and features to help you develop your apps. ...
                    Back4App. ...
                    AWS Amplify. ...
                    Kuzzle. ...
                    Couchbase. ...
                    NativeScript. ...
                    RxDB. ...
                    Flutter.

                </p>

            </div>
            <h5 className='mt-5'> Qes-3 :What other services does firebase provide other than authentication
            </h5> <h5 className='text-danger'>Ans :</h5>
            <div className='mt-3 shadow rounded p-4 mb-5'>
                <p>Similarly, Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.Firebase Database: used to store users data like chat messages, users details and other metadata
                    Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.
                    Firebase Cloud Messaging: used to send notification
                    Firebase Remote Config: used to perform A/B testing on the go
                    Firebase has great features, but we’ve pointed out 19 amazing things Firebase.Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app.

                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;