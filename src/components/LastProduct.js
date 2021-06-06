import React, { Component } from "react";
import imagenFondo from '../img/mandalorian.jpg';

class LastProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lastProduct: []
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3000/api/products/lastProduct", this.lastProduct);
    }

    lastProduct = (data) => {
        this.setState({
            name: data.data[0].name,
            description: data.data[0].description,
            image: data.data[0].image,
            price: data.data[0].price,
        })
    }

    render() {
        return (
          <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                  <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Listado - {this.state.name} </h5>
                  </div>
                  <div className="card-body">
                      <div className="text-center">
                          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.image} alt=" Ultimo producto "/>
                      </div>
                      <p>{this.state.description}</p>
                      <p>{this.state.price}</p>
                      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                  </div>
              </div>
          </div>
        );
    }
};

export default LastProduct;