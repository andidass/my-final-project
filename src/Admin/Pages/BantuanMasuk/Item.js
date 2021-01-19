import React, { useState, useEffect } from "react";
import Item2 from "./Item2";
import { Button } from "@material-ui/core";

export default function Item({ bantuanUtama, bantuanMasuk }) {
  useEffect(() => {
    setHasil(arr.reduce((total, nilai) => total + nilai));
  });
  let arr = [];
  const [hasil, setHasil] = useState(0);
  return (
    <div>
      {bantuanMasuk.map((data, index) => (
        <Item2 key={index} data={data.dataItemBantuan} arr={arr} />
      ))}
      <div>Stok Mie Instan :{hasil && hasil}</div>
    </div>
  );
}
