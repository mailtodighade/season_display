import React from "react";

const ImageList = (props) => {
  console.log(props.imageList);

  //render the list of images.
  const renderImageList = () => {
    return props.imageList.map((image) => <img src={image.urls.regular} />);
  };

  return <div>{renderImageList()}</div>;
};

export default ImageList;
