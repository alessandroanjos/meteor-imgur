//creat out image list component
//Import React
import React from 'react';
import ImageDetail from './image_detail'
/*
const IMAGES = [
  {title : 'Pen', link: 'http://dummyimage.com/600x400'},
  {title : 'Pipe Tree', link: 'http://dummyimage.com/600x400'},
  {title : 'Mug', link: 'http://dummyimage.com/600x400'}
];

*/
//Create our component
const ImageList = (props) => {

const validImages = props.images.filter(image => !image.is_album);

const RenderedImages = validImages.map(image =>
   <ImageDetail key={image.title} picture={image} />
);

  return (
    <ul className="media-list list-group">
        {RenderedImages}
    </ul>
  );
};

//Export our component
export default ImageList;
