import React from 'react';
import { Notes } from '../types/Notes';

interface IProjectLongProps {
    thumbnail: string
    notes: Notes
}


const ProjectLong: React.FC<IProjectLongProps> = ({thumbnail, notes}) => {
  return (
    <div className="projectContainer">
        <div>
            <img src={thumbnail} className="imageLong" />
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
                {notes.github && notes.github.liveSite && (
                    <div className="githubWrapperLiveSite">
                      <a className="githubATagSingle" href={notes.github.web} target={notes.github.web}>
                        Github
                      </a>
                      <a className="githubATagSingle" href={notes.github.liveSite} target={notes.github.liveSite}>
                        Live Site
                      </a>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};
export default ProjectLong
