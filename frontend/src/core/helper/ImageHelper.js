import React from "react";
import { backendAPI } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${backendAPI}/photo/${product._id}`
    : `https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;

  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageUrl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};
export default ImageHelper;
