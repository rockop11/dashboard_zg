import React, { Component, setState } from "react";

class SmallCard extends Component {
  constructor(props) {
    super(props); //ejecuta el constructor de component que es una clase de react
    this.state = {
      products: 0,
      users: 0,
      categories: 0,
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((e) => console.log(e));
  }

  componentDidMount() {
    this.apiCall("http://localhost:3000/api/products", this.totalProductos);
    this.apiCall("http://localhost:3000/api/users", this.totalUsuarios);
    this.apiCall("http://localhost:3000/api/products", this.totalCategorias);
  }

  totalProductos = (data) => {
    this.setState({
      products: data.meta.total, // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
    });
  };

  totalUsuarios = (data) => {
    this.setState({
      users: data.meta.total,
    });
  };

  totalCategorias = (data) => {
    this.setState({
      categories: data.meta.categories
    });
  };

  render() {
    return (
      <React.Fragment>
        <div class="col-md-4 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Productos
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.products}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-film fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Total awards --> */}
        <div class="col-md-4 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    {" "}
                    Usuarios
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.users}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-award fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Actors quantity --> */}
        <div class="col-md-4 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Categorías
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.categories}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SmallCard;
