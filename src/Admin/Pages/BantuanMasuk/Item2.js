import React from "react";

// masukkan dalam 1 array sementara
// kalkulasi hasilnya dan simpan pada array hasil
// hapus data pada array sementara => array.length = 0 atau set array = []

export default function Item2({
  data,
  arr,
  arr2,
  arr3,
  bantuanUtama,
  arrSementara,
}) {
  // let arrSementara = [];
  let hasil = [];

  // return (
  //   for(let i=0; i>bantuanUtama.length; i++){
  //     data.map((data2)=> {
  //       data2.namaBarang === bantuanUtama[i].namaBarang && arrSementara.push(data2.banyaknya);
  //     })
  //   }
  // )

  return (
    <div>
      {data.map((data2) => {
        // data2.namaBarang === bantuanUtama[1].namaBarang && //coba == data2.banyaknya;
        //   arrSementara.push(data2.banyaknya);
        // .reduce((total, nilai) => total + nilai);
        arr.push(data2);
        // data2.namaBarang === bantuanUtama[0].namaBarang &&
        //   arr.push(data2.banyaknya);
        // data2.namaBarang === bantuanUtama[1].namaBarang &&
        //   arr2.push(data2.banyaknya);
        // data2.namaBarang === bantuanUtama[2].namaBarang &&
        //   arr3.push(data2.banyaknya);
      })}
    </div>
  );
  // data2.banyaknya.reduce((total, nilai) => total + nilai, 0);
  // for (let i = 0; i < 3; i++) {
  // data2.namaBarang === bantuanUtama[0].namaBarang &&
  //   arr.push(data2.banyaknya);
  // data2.namaBarang === bantuanUtama[1].namaBarang &&
  //   arr2.push(data2.banyaknya);
  // data2.namaBarang === bantuanUtama[2].namaBarang &&
  //   arr3.push(data2.banyaknya);
  // }
}
