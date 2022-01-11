import React from 'react';
import { Notes } from '../types/Notes';

interface IProjectTallProps {
    thumbnail: string
    notes: Notes
}


const ProjectTall: React.FC<IProjectTallProps> = ({thumbnail, notes}) => {
  return (
    <div className="projectContainer">
        <div>
            <img src={thumbnail} className="imageTall" />
            <div className="notesWrapper">
                <div className="notesTitle">{notes.title}</div>
                <div className="notesSubTitle">{notes.subTitle}</div>
                {notes.github && notes.github.mobile && (
                    <div className="githubWrapper">
                        <div className="github">Github:</div>
                        <a className="githubATag" href={notes.github.web} target={notes.github.web}>
                            Web
                        </a>
                        <a className="githubATag" href={notes.github.mobile} target={notes.github.mobile}>
                            Mobile
                        </a>
                    </div>
                )}
                {notes.github && notes.github.web && !notes.github.mobile && (
                    <div className="githubWrapper">
                        <a className="githubATagSingle" href={notes.github.web} target={notes.github.web}>
                            Github
                        </a>
                    </div>
                )}
                {notes.app && (
                    <div className="githubWrapper">
                        <a className="githubATagSingle" href={notes.app} target={notes.app}>
                            Checkout the App
                        </a>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};
export default ProjectTall