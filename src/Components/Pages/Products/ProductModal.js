import React from "react";

const ProductModal = ({
  setOpenproductmodal,
  actiontext,
  classes,
  children,
  setGreetingText,
  singleproduct,
}) => {
  return (
    <span>
      <input type="checkbox" id="productmodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="productmodal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="mt-6">
            {children}
          </div>
        </div>
      </div>
    </span>
  );
};

export default ProductModal;
