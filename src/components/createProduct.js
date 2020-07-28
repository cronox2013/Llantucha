import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import 'bootstrap/dist/css/bootstrap.min.css';


export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePrecio = this.onChangePrecio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      image: '',
      content: '',
      category:0,
      precio:0,
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  onChangePrecio(e) {
    this.setState({
      precio: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      title: this.state.title,
      image: this.state.image,
      content: this.state.content,
      category: this.state.category,
      precio: this.state.precio
    }

    console.log(product);

    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data));

    window.location = '/adminproduct';
  }

  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title:  </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group"> 
          <label>Imagen:  </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
              />
        </div>
        <div className="form-group"> 
          <label>Descripcion:  </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.content}
              onChange={this.onChangeContent}
              />
        </div>
        <div className="form-group">
          <label>Categoria: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
              />
        </div>
        <div className="form-group">
          <label>Precio: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.precio}
              onChange={this.onChangePrecio}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}