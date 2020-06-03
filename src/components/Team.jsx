import React from 'react';

import qoute from '../assets/img/icon-quotes.svg';
import bgPattern from '../assets/img/bg-pattern-home-4-about-3.svg';
import imageOne from '../assets/img/avatar-kady.jpg';
import imageTwo from '../assets/img/avatar-aiysha.jpg';
import imageThree from '../assets/img/avatar-arthur.jpg';

const Team = () => {
  return (
    <section>
      <img className='img-pattern' src={bgPattern} alt='' />
      <div className='team-section'>
        <div className='team-section-header'>
          <h2>Delivering real results for top companies.</h2>
          <h2>
            Some of our <span>success stories</span>
          </h2>
        </div>
        <div className='team-container'>
          <div className='team-item'>
            <img className='svg-qoute' src={qoute} alt='' />
            <p className='team-member-description'>
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <h3 className='team-member-name'>Kady Dexler</h3>
            <p className='team-member-title'>Product Manager at Bookmark</p>
            <img className='team-item-img' src={imageOne} alt='' />
          </div>
          <div className='team-item'>
            <img className='svg-qoute' src={qoute} alt='' />
            <p className='team-member-description'>
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <h3 className='team-member-name'>Aiysha Rexas</h3>
            <p className='team-member-title'>Founder of Manage</p>
            <img className='team-item-img' src={imageTwo} alt='' />
          </div>
          <div className='team-item'>
            <img className='svg-qoute' src={qoute} alt='' />

            <p className='team-member-description'>
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <h3 className='team-member-name'>Arthur Clarke</h3>
            <p className='team-member-title'>Co-founder of MyPhysio</p>
            <img className='team-item-img' src={imageThree} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
