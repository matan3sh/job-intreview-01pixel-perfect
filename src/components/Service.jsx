import React from 'react';
import Rectangle from '../assets/img/Rectangle_Red.png';
import iconPerson from '../assets/img/icon-person.svg';
import iconChart from '../assets/img/icon-chart.svg';
import iconCog from '../assets/img/icon-cog.svg';

const Service = () => {
  return (
    <div className='service-wrapper'>
      <div>
        <img className='rec-red' src={Rectangle} alt='' />
        <p className='service-desc'>
          Build & manage distributed teams like no one else.
        </p>
      </div>
      <div className='service-right'>
        <div>
          <img src={iconPerson} alt='' />
        </div>
        <div>
          <div>
            <p className='service-title'>Experienced Individuals</p>
            <p className='service-content'>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
        </div>

        <div>
          <img src={iconCog} alt='' />
        </div>
        <div>
          <div>
            <p className='service-title'>Experienced Individuals</p>
            <p className='service-content'>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
        </div>

        <div>
          <img src={iconChart} alt='' />
        </div>
        <div>
          <div>
            <p className='service-title'>Experienced Individuals</p>
            <p className='service-content'>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
