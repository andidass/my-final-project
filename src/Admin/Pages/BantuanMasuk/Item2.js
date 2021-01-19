import React from "react";

export default function Item2({ data, arr }) {
  return (
    <div>
      {data.map(
        (data2) =>
          data2.namaBarang === "mie instan" && arr.push(data2.banyaknya)
      )}
    </div>
  );
}
