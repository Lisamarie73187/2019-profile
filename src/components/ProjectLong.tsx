import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

interface Github {
  mobile?: string;
  web?: string;
  liveSite?: string;
}

interface Notes {
  title: string;
  subTitle: string;
  github?: Github;
}

interface Props {
  images: string[];
  thumbnail: string;
  width?: number | string;
  notes: Notes;
}
interface State {
  photoIndex: number;
  isOpen: boolean;
}

export default class ProjectLong extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const {photoIndex, isOpen} = this.state;
    const {images, thumbnail, notes} = this.props;

    return (
      <div className="projectWrapper">
        <div>
          <div onClick={() => this.setState({isOpen: true})}>
            <img src={thumbnail} className="imageLong" />
          </div>
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
            {notes.github && notes.github.web && !notes.github.liveSite && (
              <div className="githubWrapper">
                <a className="githubATagSingle" href={notes.github.web} target={notes.github.web}>
                  Github
                </a>
              </div>
            )}
            {notes.github && notes.github.liveSite && (
              <div className="githubWrapperLiveSite">
                <a className="githubATagSingle" href={notes.github.web} target={notes.github.web}>
                  Github
                </a>
                <a className="githubATagSingle" href={notes.github.mobile} target={notes.github.mobile}>
                  Live Site
                </a>
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <Lightbox
            enableZoom={false}
            imagePadding={50}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
