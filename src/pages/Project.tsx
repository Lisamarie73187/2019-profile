import React from 'react';
import ProjectLong from '../components/ProjectLong';
import ProjectTall from '../components/ProjectTall';


const goalsyImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/thumbnailVertical.png';

const goalsyNotes = {
  title: 'PERSONAL PROJECT',
  subTitle: 'January 2018 | January 2019',
  github: {
    mobile: 'https://github.com/Lisamarie73187/goalsy-native',
    web: 'https://github.com/Lisamarie73187/goal-tracker',
  },
};

const rexImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/rex.png';

const rexNotes = {
  title: 'FREELANCE PROJECT',
  subTitle: 'April 2018 ',
  github: {
    web: 'https://github.com/Lisamarie73187/rex-sports',
  },
};

const gyftImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/gyft/gyftThumbnailTall.png';

const gyftNotes = {
  title: 'STYR LABS PRODUCT',
  subTitle: 'JUNE 2018',
  app: 'https://apps.apple.com/us/app/gyft-baby/id1413436624',
};

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

const scentricNotes = {
  title: 'GROUP PROJECT',
  subTitle: 'Feb 2018',
  github: {
    web: 'https://github.com/melodymennen/scentric',
  },
};

const mealLoggerImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/mealLogger/mealLoggerHome.png';


const mealLoggerNotes = {
  title: 'PERSONAL PROJECT',
  subTitle: 'July 2019',
  github: {
    web: 'https://github.com/Lisamarie73187/meal-logger',
  },
};

const sudokuImage = 'https://portfoliolisa.s3-us-west-1.amazonaws.com/sudoku/sudokuThumbnail.png';


const sudokuNotes = {
  title: 'FUN PERSONAL PROJECT',
  subTitle: 'SEPT 2019',
  github: {
    web: 'https://github.com/Lisamarie73187/sudoku',
    liveSite: 'http://the-greatest-sudoku.surge.sh/',
  },
};


export const Project = () => {
  return (
    <div className="projectContainer">
      <div>
        <ProjectTall thumbnail={goalsyImage} notes={goalsyNotes}/>
        <ProjectTall thumbnail={scentricImage} notes={scentricNotes}/>
      </div>
      <div>
        <ProjectLong thumbnail={rexImage} notes={rexNotes} />
        <ProjectLong thumbnail={tictactoeImage} notes={tictactoeNotes} />
        <ProjectLong thumbnail={sudokuImage} notes={sudokuNotes} />
      </div>
      <div>
          <ProjectTall thumbnail={gyftImage} notes={gyftNotes}/>
          <ProjectTall thumbnail={mealLoggerImage} notes={mealLoggerNotes} />
      </div>
    </div>
  );
};

export default Project
