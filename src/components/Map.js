import React, { memo } from "react";

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.013013292073!2d30.713366315819!3d36.89601397993569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e2b9b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1!2sAntalya%20Hay%C4%B1r%20Lokmac%C4%B1s%C4%B1!5e0!3m2!1str!2str!4v1629783660004!5m2!1str!2str"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
    />
  );
}

export default memo(Map);
