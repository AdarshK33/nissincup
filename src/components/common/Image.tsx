import React from "react";

interface CommonImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
}

const CommonImage: React.FC<CommonImageProps> = ({
 
  alt = "image",
  
  ...rest
}) => {
  return (
    
    <img
 loading = "eager"
  decoding = "async"
   {...({ fetchpriority: "high", } as React.ImgHTMLAttributes<HTMLImageElement>)}
      alt={alt}
      {...rest}
    />
  );
};

export default CommonImage;
