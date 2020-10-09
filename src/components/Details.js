import React, { Component } from 'react'
import { ProductConsumer} from "../context"
import {Link} from "react-router-dom";
import ButtonContainer from "../components/Button";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const {id,company,img,info,price,title,inCart} = value.detailProduct;
                       return (
                           <div className = "conatiner py-5">
                               <div className="row">
                                   <div className ="col-10 mx-auto text-center text-slanted text-blue my-5">
                                       <h1>{title}</h1>
                                   </div>
                               </div>
                               <div className = "row">
                                    <div className ="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                       <img src = {img} className = "img-fluid" alt="product"/>
                                    </div>
                                    {/* product text */}
                                    <div className ="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                       <h2>model : {title}</h2>
                                       <h4 className="text-title text-uppercase text-muted ml-3 mb-2">Made By: 
                                            <span className = "text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className = "text-blue">
                                            <strong>
                                                <span>Price : $ {price}</span>
                                            </strong>
                                        </h4>
                                        <p className = "text-capitalize font-weight-bold mt-3 mb-0">
                                            info about product
                                        </p>
                                        <p className = "text-muted lead">
                                            {info}
                                        </p>
                                        {/* button */}
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>Back to Products</ButtonContainer>
                                            </Link>
                                                <ButtonContainer cart
                                                    disabled = {inCart ? true : false} 
                                                    onClick={()=>{
                                                        value.addToCart(id);
                                                        value.openModal(id);
                                                    }}>
                                                {inCart ? "InCart" : "Add to Cart"}</ButtonContainer>
                                            
                                        </div>
                                    </div>
                               </div>
                           </div>
                       )
                    }
                }
            </ProductConsumer>
        )
    }
}
