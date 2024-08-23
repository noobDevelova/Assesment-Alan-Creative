import React, { useEffect } from "react";
import "../../index.css";
const PopUpAlert = ({ showed, setShow, variant, title, desc }) => {
  useEffect(() => {
    if (showed) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showed, setShow]);

  if (!showed) return null;
  return (
    <div className="alert-container">
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default PopUpAlert;
