import React from "react";

export default function CardPaint({
  stat,
  handlename,
  hamdleClickid,
  id,
  name,
  flag,
}) {
  const handleClickAndName = (e) => {
    hamdleClickid(e, id);
    handlename(id);
  };
  return (
    <div className="paintcard">
      {stat ? (
        <img src={flag} name={name} alt="flag" />
      ) : (
        <div onClick={(e) => handleClickAndName(e, id)} className="show">
          Show
        </div>
      )}
    </div>
  );
}
