import React, { useState, useEffect } from "react";
import Item2 from "./Item2";

export default function Item({ bantuanUtama, bantuanMasuk }) {
  useEffect(() => {
    setHasil1(arr.length > 0 && arr.reduce((total, nilai) => total + nilai));
    setHasil2(arr2.length > 0 && arr2.reduce((total, nilai) => total + nilai));
    setHasil3(arr3.length > 0 && arr3.reduce((total, nilai) => total + nilai));
  });
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let arrSementara = [];
  const [hasil1, setHasil1] = useState(0);
  const [hasil2, setHasil2] = useState(0);
  const [hasil3, setHasil3] = useState(0);
  return (
    <div>
      {bantuanMasuk.map((data, index) => (
        <Item2
          bantuanUtama={bantuanUtama}
          key={index}
          data={data.dataItemBantuan}
          arrSementara={arrSementara}
          arr={arr}
          arr2={arr2}
          arr3={arr3}
        />
      ))}
      {bantuanUtama.map((data, index) => (
        <div>{data.namaBarang} :</div>
      ))}
      {console.log(arrSementara.reduce((total, nilai) => total + nilai, 0))}
      {JSON.stringify(arrSementara)}
      {/* {console.log(arrSementara)} */}
      <div>index 0 : {hasil1 && hasil1}</div>
      <div>index 1 : {hasil2 && hasil2}</div>
      <div>index 2 : {hasil3 && hasil3}</div>
      {/* {JSON.stringify(nilai)} */}
    </div>
  );
}
