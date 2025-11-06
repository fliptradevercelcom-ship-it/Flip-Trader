import React from "react";

const Title = ({ title, color, ish1 }) => {
  return (
    <div>
      {ish1
        ? <h1
            data-aos="fade-up"
            className={`${color}  font-medium title_text`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        : <h2
            data-aos="fade-up"
            className={`${color}  font-medium title_text`}
            dangerouslySetInnerHTML={{ __html: title }}
          />}
    </div>
  );
};

export default Title;
