import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = ({
  alt = "image",

  ...rest
}) => {
  return (
    <img
      loading="eager"
      decoding="async"
      {...({
        fetchpriority: "high",
      } as React.ImgHTMLAttributes<HTMLImageElement>)}
      alt={alt}
      {...rest}
    />
  );
};

export default Image;
