import React from 'react'

function Bat() {
    const products = [
  {
    id: 1,
    brand: "SG",
    name: "a classic",
    price: 2100,
    img: "SGbat1.png",
  },
  {
    id: 2,
    brand: "SG",
    name: "RP Icon",
    price: 2300,
    img: "SGbat2.png",
  },
  {
    id: 3,
    brand: "SG",
    name: "Kashmir Willow Bat",
    price: 1900,
    img: "SGbat3.png",
  },
  {
    id: 4,
    brand: "SG",
    name: "Players Edition Bat",
    price: 2500,
    img: "SGbat4.png",
  },
  {
    id: 5,
    brand: "SG",
    name: "Power Drive Bat",
    price: 2200,
    img: "SGbat5.png",
  },
  {
    id: 6,
    brand: "SG",
    name: "Classic Cricket Bat",
    price: 2400,
    img: "SGbat6.png",
  },
   {
    id: 7,
    brand: "SG",
    name: " KLR Ultimate",
    price: 2400,
    img: "SGbat7.png",
  },
   {
    id: 8,
    brand: "SG",
    name: "Classic Cricket Bat",
    price: 2400,
    img: "SGbat8.png",
  },
  {
    id: 9,
    brand : "SG",
    name: "Triple Crown",
    price : 4500,
    img : "SGbat9.png"
  },
  {
  id: 10,
  brand:"SG",
  name:"",
  price: 3700,
  img : "SGbat10.png"
  },
  {
  id : 11,
  barnd:"SG",
  name:"",
  price:4000,
  img : "SGbat11.png"
  },
  {
  id:12,
  brand:"SG",
  name:"",
  price:3500,
  img : "SGbat12"
  }
];


  return (
    <>
   
    <h1>Bat</h1>
   <div className="container mt-4">
  <div className="row">
    {products.map((item) => (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={item.id}>
        <div className="card shadow text-center product-card">

          <img
            src={item.img}

            className="card-img-top p-2"
            alt={item.name}
          />

          <div className="card-body">
            <p className="card-text fw-bold text-dark mb-1">
               {item.brand}
            </p>

            <p className="card-text text-muted mb-1">
              {item.name}
            </p>

            <p className="card-text fw-bold text-success">
              <i className="fa-solid fa-indian-rupee-sign"></i>{item.price}
            </p>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>


    </>
  )
}


export default Bat