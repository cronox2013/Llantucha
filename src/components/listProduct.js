import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Product = props => (
  <tr>
    <td>{props.product.title}</td>
    <td>{props.product.image}</td>
    <td>{props.product.content}</td>
    <td>{props.product.category}</td>
    <td>{props.product.precio}</td>
    <td>
      <Link to={"/edit/"+props.product._id}>editar</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>eliminar</a>
    </td>
  </tr>
)

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Conten</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            { this.productList() }
          </tbody>
        </table>
      </div>
    )
  }
}