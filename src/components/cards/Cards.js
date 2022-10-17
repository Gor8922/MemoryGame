import React, { useEffect, useState } from "react";
import { data } from "../assets/data";

import CardPaint from "../cardpaint/CardPaint";

export default function Cards() {
  const [flags, setflags] = useState(data.sort(() => Math.random() - 0.5));
  const [imgname, setimgname] = useState([]);

  useEffect(() => {
    handleStat();
  }, [imgname]);

  const handlename = (id) => {
    flags.map((item) => {
      if (item.id === id) {
        setimgname([...imgname, [id, item.name]]);
      }
      return item;
    });
  };

  const hamdleClickid = (e, id) => {
    e.stopPropagation();
    setflags(
      flags.map((item) => {
        if (item.id === id) {
          item.stat = true;
        }
        return item;
      })
    );
  };

  const handleReset = () => {
    setflags(
      flags.map((item) => {
        item.stat = false;
        return item;
      })
    );
  };
  const handleStat = () => {
    if (imgname.length > 1) {
      let timeOutId = setTimeout(() => {
        if (imgname[0][1] !== imgname[1][1]) {
          setflags(
            flags.map((item) => {
              if (item.id === imgname[0][0] || item.id === imgname[1][0]) {
                item.stat = false;
              }
              return item;
            })
          );
        }
        clearTimeout(timeOutId);
      }, 500);
      setimgname([]);
    }
  };

  return (
    <div className="cards">
      {flags.map((item, i) => {
        return (
          <CardPaint
            handleReset={handleReset}
            key={i}
            handlename={handlename}
            hamdleClickid={hamdleClickid}
            {...item}
          />
        );
      })}
      <div className="reset">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
