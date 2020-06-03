import React from 'react';
import logo from '../assets/img/myteam.png';
import bgPattern from '../assets/img/bg-pattern-home-1.svg';
import Rectangle from '../assets/img/Rectangle.png';
import bgPattern2 from '../assets/img/bg-pattern-home-2.svg';

const Header = () => {
  return (
    <section>
      <div className='navbar'>
        <div className='nav-left'>
          <img src={logo} alt='' />
          <p>home</p>
          <p className='active'>about</p>
        </div>
        <button className='btn'>contact us</button>
      </div>

      <div className='header-wrapper'>
        <img src={bgPattern} alt='' />
        <p className='header-slogen'>
          Find the best <span>talent</span>
        </p>
        <div>
          <img className='border-rec' src={Rectangle} alt='' />
          <p className='header-description'>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <img className='bg-pattren-2' src={bgPattern2} alt='' />
    </section>
  );
};

export default Header;
