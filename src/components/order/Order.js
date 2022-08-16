import React from 'react';
import './order.css';

const Order = ({ order }) => {
  return (
    <div className="order row mt-5 mx-auto" key={order?._id}>
      <div className="order-header col-12 d-flex align-items-center justify-content-between">
        <div className="order-number">Order-{order?._id?.slice(0, 5)}</div>
        <div className="total-bill">Total {order?.total_bill} PKR</div>
      </div>
      <div className="line-items">
        {order?.variants?.map((item) => {
          return (
            <div className="item-detail-box d-flex">
              <div className="item-image-container me-3">
                {item?.image == 'no-photo.jpg' ? (
                  <img
                    src="../assests/images/cake.jpg"
                    alt=""
                    width="auto"
                    height="auto"
                    className="item-image"
                  />
                ) : (
                  <img
                    src={item?.variant?.image}
                    alt=""
                    width="auto"
                    height="auto"
                    className="item-image"
                  />
                )}
              </div>
              <div className="item-detail d-flex flex-column w-50 ms-3 ">
                <div className="item-title">{item?.variant?.title}</div>
                <div className="item-price">PKR {item?.variant?.price}</div>
                <div className="item-description">
                  {item?.variant?.description}
                </div>
                <div className="item-quantity mt-2">
                  {item?.quantity > 1
                    ? `${item?.quantity} items`
                    : `${item?.quantity} item`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
