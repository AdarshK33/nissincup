import React from "react";

interface CommonImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
}

const CommonImage: React.FC<CommonImageProps> = ({
  loading = "eager",
  decoding = "async",
  alt = "image",
  ...rest
}) => {
  return (
    
    <img
      loading={loading}
      decoding={decoding}
   {...({ fetchpriority: "high", } as React.ImgHTMLAttributes<HTMLImageElement>)}
      alt={alt}
      {...rest}
    />
  );
};

export default CommonImage;
