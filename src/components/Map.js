import React, { memo } from "react";

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102101.70178449029!2d30.635703455962545!3d36.89804638528151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya!5e0!3m2!1str!2str!4v1735912148925!5m2!1str!2str"
      width="100%"
      frameBorder="0"
      allowFullScreen
      height="450"
      style={{ border: 0 }}
      loading="lazy"
    />
  );
}

export default memo(Map);
