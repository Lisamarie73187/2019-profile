import React from 'react';
import LightboxExample from '../components/LightboxProject';
import ProjectLong from '../components/ProjectLong';

const goalsyImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/goalsyMainSliderPage.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/goalsySliderFeatures.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/GoalsyMobileSlider4.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/goalsyBackgroundSlider.png',
];

const goalsyImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/thumbnailVertical.png';

const goalsyNotes = {
  title: 'PERSONAL PROJECT',
  subTitle: 'January 2018 | January 2019',
  github: {
    mobile: 'https://github.com/Lisamarie73187/goalsy-native',
    web: 'https://github.com/Lisamarie73187/goal-tracker',
  },
};

const rexImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/RexSliderHome1.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/RexAboutSlider2.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/RexSliderTech3.png',
];

const rexImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/rex.png';

const rexNotes = {
  title: 'FREELANCE PROJECT',
  subTitle: 'April 2018 ',
  github: {
    web: 'https://github.com/Lisamarie73187/rex-sports',
  },
};

const gyftImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/GyftHomeSlider1.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/GyftTech3.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/gyftpage2.png',
];

const gyftImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/gyftThumbnailTall.png';

const gyftNotes = {
  title: 'STYR LABS PRODUCT',
  subTitle: 'JUNE 2018',
  app: 'https://apps.apple.com/us/app/gyft-baby/id1413436624',
};

const tictacttoeImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/tictactoe/tictactoesliderone.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/tictactoe/tictactoeslider2.png',
];

const tictactoeImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/tictactoe/tictactoethumbnail.png';

const tictactoeNotes = {
  title: 'REACT FUN PERSONAL PROJECT',
  subTitle: 'March 2018',
  github: {
    web: 'https://github.com/Lisamarie73187/tic-tac-toe',
    liveSite: 'http://the-best-tic-tac-toe.surge.sh/',
  },
};

const scentricImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/scentric/scentricThumbnailLong.png';

const scentricImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/scentric/scentricTech.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/scentric/scentricSecondpage.png',
];

const scentricNotes = {
  title: 'GROUP PROJECT',
  subTitle: 'Feb 2018',
  github: {
    web: 'https://github.com/melodymennen/scentric',
  },
};

const mealLoggerImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/mealLogger/mealLoggerHome.png';

const mealLoggerImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/mealLogger/mealLogggerSlideOne.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/mealLogger/mealLogggerSlideTwo.png',
];

const mealLoggerNotes = {
  title: 'PERSONAL PROJECT',
  subTitle: 'July 2019',
  github: {
    web: 'https://github.com/Lisamarie73187/meal-logger',
  },
};

const sudokuImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/sudoku/sudokuThumbnail.png';

const sudokuImages = [
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/sudoku/SudokuSlideOne.png',
  'https://portfoliolisa.s3-us-west-1.amazonaws.com/sudoku/SudokuSlideTwo.png',
];

const sudokuNotes = {
  title: 'FUN PERSONAL PROJECT',
  subTitle: 'SEPT 2019',
  github: {
    web: 'https://github.com/Lisamarie73187/sudoku',
    liveSite: 'http://the-greatest-sudoku.surge.sh/',
  },
};

interface Props {}

export const Project = (props: Props) => {
  return (
    <div className="projectContainer">
      <div>
        <LightboxExample images={goalsyImages} thumbnail={goalsyImage} notes={goalsyNotes} />
        <LightboxExample images={scentricImages} thumbnail={scentricImage} notes={scentricNotes} />
      </div>
      <div>
        <ProjectLong images={rexImages} thumbnail={rexImage} notes={rexNotes} />
        <ProjectLong images={tictacttoeImages} thumbnail={tictactoeImage} notes={tictactoeNotes} />
        <ProjectLong images={sudokuImages} thumbnail={sudokuImage} notes={sudokuNotes} />
      </div>
      <div>
        <LightboxExample images={gyftImages} thumbnail={gyftImage} notes={gyftNotes} />
        <LightboxExample images={mealLoggerImages} thumbnail={mealLoggerImage} notes={mealLoggerNotes} />
      </div>
    </div>
  );
};
