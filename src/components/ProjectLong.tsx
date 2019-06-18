import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

interface Props {
  images: string[];
  thumbnail: string;
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
    const {images, thumbnail} = this.props;

    return (
      <div>
        <div>
          <div onClick={() => this.setState({isOpen: true})}>
            <img src={thumbnail} className="imageLong" />
          </div>
          <div>Notes</div>
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
