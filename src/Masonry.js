import React from 'react'

export default ({
  images = [],
  text = [],
  padding = 0,
  columns = 'auto',
  style = {},
  className = ''
}) => (
  <div style={{
    display: "layout(masonry)",
    '--padding': padding,
    '--columns': columns}}
  >
    {images.length > 0 && images.map((item, index) => 
      <img
        src={item}
        alt=""
        key={index}
        className={className ? className : 'image'}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          ...style
        }}
      />
    )}

    {text.length > 0 && text.map((item, index) => 
      <p
        key={index}
        className={className ? className : 'text'}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style
        }}
      >
      {item}
      </p>
    )}
  </div>
);