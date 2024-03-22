import React, { memo } from "react";
import "./Product.scss";
import CardProductCbn from "../card/cardProduct/CardProductCbn";
import smallLogo from "../../styles/image/smallLogo.png";
function Product({ data, category }) {
  return (
    <div className="content">
      <div className="box-product">
        {data && data?.length > 0 && (
          <div className="box-product--main">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={smallLogo}
                className="right--image"
                alt=""
                style={{ width: "30px", height: "30px", marginBottom:"5px", marginRight:"5px"}}
              />
              <h1>{category?.name}</h1>
            </div>
            <div className="box-product--product">
              {data?.map((item) => (
                <CardProductCbn data={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Product);
