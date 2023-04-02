import React from 'react'

export default function Productos() {

    return (
        <div id="productos" className="margin clear col-8 offset-2">
            <h3 className="title">PRODUCTOS DESTACADOS</h3>   <br />

            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/slider1.jpg" className="d-block w-100 " alt="..."/>
                        <p className='text-center'> Toda la variedad de panaderia con la mejor calidad </p>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/slider2.jpg" className="d-block w-100 " alt="..."/>
                        <p className='text-center'> Pan franses, mignon y especiales (a pedido) </p>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/slider3.jpg" className="d-block w-100 " alt="..."/>
                        <p className='text-center'> Masas finas secas y humedas </p>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/pastafrola.jpg" className="d-block w-100 " alt="..."/>
                        <p className='text-center'> Tartas y pastafrolas </p>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/medialuna.jpg" className="d-block w-100 " alt="..."/>
                        <p className='text-center'> facturas con crema, Dulce de leche y Dulce de membrillo. Medialunas </p>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* <div className="container-fluid text-center fondo my-4 py-4 position-relative">
                <div>
                    <h2 className="tituloSlider"><b>PRODUCTOS</b></h2>
                    <img id="imagenSlider" src="./img/slider1.jpg" alt="" width="75%" />
                    <button className="btn btn-dark botonP "></button>
                    <button className="btn btn-dark botonN "></button>
                    <div className="textoSlider"> Los mejores productos <br />con la mejor calidad</div>
                </div>
            </div> */}
        </div>
    )
}
