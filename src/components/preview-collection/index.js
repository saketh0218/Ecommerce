import React from "react";
import PreviewItem from "../preview-item";
import { withRouter } from "react-router-dom";

import "./preview.styles.scss";

const PreviewCollection = ({ title, items, history, match, routeName }) => {
  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <PreviewItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
