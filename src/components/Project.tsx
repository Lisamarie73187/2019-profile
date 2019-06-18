import React from 'react';
import LightboxExample from './LightboxProject';
import ProjectLong from './ProjectLong';

const goalsyImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/goalsyMainSliderPage.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/goalsySliderFeatures.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/GoalsyMobileSlider4.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/goalsyBackgroundSlider.png',
];

const goalsyImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/thumbnailVertical.png';

const rexImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/RexSliderHome1.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/RexAboutSlider2.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/RexSliderTech3.png',
];

const rexImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/rex.png';

const gyftImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/GyftHomeSlider1.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/GyftTech3.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/gyftpage2.png',
];

const gyftImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/gyftThumbnailTall.png';

interface Props {}

export const Project = (props: Props) => {
  return (
    <div className="projectContainer">
      <LightboxExample images={goalsyImages} thumbnail={goalsyImage} />
      <ProjectLong images={rexImages} thumbnail={rexImage} />
      <LightboxExample images={gyftImages} thumbnail={gyftImage} />
    </div>
  );
};
