import axios from "axios";
import { useEffect, useState } from "react";
import "../..//index.css";
import {
  MenuCard,
  PopUpAlert,
  PopUpCharge,
  ReceiptContainer,
} from "../../components";
import { ListMenu } from "../../fragments/ListMenu";
import { Receipt } from "../../fragments/Receipt";

const Home = () => {
  const [order, setOrder] = useState([]);
  const [clickCount, setClickCount] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);
  const [savedPopUp, setShowSavedPopUp] = useState(false);

  const totalPrice = order?.reduce(
    (total, item) => total + item.menu_price * item.quantity,
    0
  );

  const addMenu = (item) => {
    setClickCount((prevClickCount) => {
      const newCount = (prevClickCount[item.menu_name] || 0) + 1;
      return { ...prevClickCount, [item.menu_name]: newCount };
    });

    setOrder((prevOrder) => {
      const existingIndex = prevOrder.findIndex(
        (orderItem) => orderItem.menu_name === item.menu_name
      );

      if (existingIndex !== -1) {
        const clickTimes = clickCount[item.menu_name] || 1;

        if (clickTimes > 1) {
          const newOrder = [...prevOrder];
          newOrder[existingIndex] = {
            ...newOrder[existingIndex],
            quantity: newOrder[existingIndex].quantity + 1,
          };
          setClickCount((prevClickCount) => ({
            ...prevClickCount,
            [item.menu_name]: 0,
          }));
          return newOrder;
        } else {
          return prevOrder;
        }
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const handleChargeClick = () => {
    setShowPopUp(true);
  };

  const handleCloseCharge = () => {
    setShowPopUp(false);
  };

  const handleShowSaved = () => {
    setShowSavedPopUp(true);
  };

  return (
    <div className="container">
      <ListMenu addMenu={addMenu} />
      <Receipt
        handleChargeClick={handleChargeClick}
        handleShowSaved={handleShowSaved}
        data={order}
      />
      {showPopUp && (
        <PopUpCharge
          handleClose={() => handleCloseCharge()}
          totalPrice={totalPrice}
        />
      )}

      {setShowSavedPopUp && (
        <PopUpAlert
          setShow={setShowSavedPopUp}
          title="Saved"
          desc="Bill Successfully Saved"
          showed={savedPopUp}
        />
      )}
    </div>
  );
};

export default Home;
