import React from 'react';
import profilePic from '../assets/ProfilePic.jpg';

export const About = () => {
  return (
    <div className="aboutMeWrapper">
      <img className="profilePic" src={profilePic} alt="profile picture" width='30%' height='40%'/>
      <div className="aboutMe">
        <div className="aboutMeTitle">About Me</div>
        <p>
          Hello! I came to discover my passion in technology later in life. I first inspired to succeed in the health and wellness field, which I soon found out that not only
          was I not satisfied I was not challenged enough. As I was trying to find my perfect career I started taking classes in computer programing and design, from there I
          enrolled in the Dev Mountain boot camp and the rest is history. I was able to use my creativity and outside of the box thinking to excel throughout the course. My craving for
          constant learning and challenging work made this career the perfect fit and due to my previous experience I was able to apply my knowledge of customer satisfaction into
          my work.
        </p>
        <p>
          When I am not at my computer coding, you will typically find me enjoying the outdoors or doing some sort of craft. I love learning and finding new activities and hobbies. I recently
          have picked up knitting and macrame. If you see me outdoors, it will most likely be running, hiking, or playing beach volleyball. Feel free to message me I love meeting new people!
        </p>
      </div>
    </div>
  );
};
