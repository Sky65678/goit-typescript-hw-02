import React from "react";
import css from "../LoadMoreBtn/LoadMoreBth.module.css";

type PropsSubmit = {
  handleLoadMore: () => void;
};

const LoadMoreBtn: React.FC<PropsSubmit> = ({ handleLoadMore }) => {
  return (
    <div className={css.butCont}>
      <button className={css.button} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
