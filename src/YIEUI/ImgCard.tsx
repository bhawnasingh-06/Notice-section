import React from "react";

type ImgCardProps = {
  src: string;
  classes?: string;
};
const ImgCard = ({ src, classes }: ImgCardProps) => {
  return (
    <div className={classes}>
      <img style={{ width: "100%", height: "auto" }} src={src} alt="" />
    </div>
  );
};

export default ImgCard;
