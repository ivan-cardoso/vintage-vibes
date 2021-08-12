import React, {useState, useEffect, createContext, useContext} from 'react'

import {useProductContext} from "../Context/ProductContext"

import firebase from "firebase/app";
import { firestore } from "../../firebase"


// N° de productos seleccionados & Item seleccionado
export const CartContext = createContext()


export default function CartProvider ({children}){  
    
    const {item, id, itemDetail} = useProductContext()

    const [itemAdded, setItemAdded] = useState([])
    const [countAdded, setCountAdded] = useState(1)
    const [compra, setCompra] = useState(false)

    function getCount(numero) {
        setCountAdded(numero);
    }

    function addItem (){
        // Busco si existe el producto en el carrito
        // Si existe le agrego al countAdded
        const isInCart = itemAdded.find((p) => p.id === itemDetail.id)
        
        if(isInCart){
            isInCart.countAdded += countAdded
        }else{
            setItemAdded([...itemAdded, {...itemDetail, countAdded }]);  
        }
        setCompra(true)
    }
    
    const checkout = (e) =>{
        // setCompra(false)
    } 

    const cleanProduct = (id) => {
        itemAdded.splice(
            itemAdded.findIndex(p => p.id === id),
            1
            );
            setItemAdded([...itemAdded])
            console.log(itemAdded)
        };

    
    const cleanCart = (e) => {
        e.stopPropagation()
        setItemAdded([])
    }

    const [totalPrice, setTotalPrice] = useState(0)
    
    const totalCart = () =>{
        setCompra(false)
        return itemAdded.reduce((totalPrice, product) => (totalPrice += (product.price * product.countAdded)), 0)
    }

    useEffect(() => {
        setCompra(false)
    }, [id])

    const totalCartItems = () =>{
        return itemAdded.reduce((totalItems, product) => (totalItems += product.countAdded), 0)
    }
    

    const [showForm, setShowForm] = useState(false);

    const handleClose = () =>{
        setShowForm(false);
    } 
    const handleShow = () => setShowForm(true);


    const [orderName, setOrderName] = useState("")
    const [orderLastName, setOrderLastName] = useState("")
    const [orderPhone, setOrderPhone] = useState("")
    const [orderEmail, setOrderEmail] = useState("")
    const [orderComments, setOrderComments] = useState("")

    const [orderId, setOrderId] = useState("")

    const createOrder = (e) => {
        e.preventDefault()
        const order = {
            buyer: {
                name: orderName,
                lastName: orderLastName,
                phone: orderPhone,
                email:orderEmail
            },
            items: [...itemAdded],
            date: firebase.firestore.FieldValue.serverTimestamp(),
            comments: orderComments,
            total: totalCart()
        }

        const db = firestore
        const OrderCollection = db.collection("orders")

        OrderCollection.add(order).then(({id})=>{
            setOrderId(id)
        })
        .catch((err) =>{
            console.log(err)
    
        })
    }

    const [showOrderDone, setShowOrderDone] = useState(false);

    const handleCloseOrder = () =>{
        setShowOrderDone(false);
        setOrderId("")
        setItemAdded([])
    } 

    const handleShowOrder = () => {
        setShowOrderDone(true)
    };


    const orderDone = () =>{
        setShowForm(false)
        setShowOrderDone(true);
    }

    
    return <CartContext.Provider value={{ 
        countAdded, 
        setCountAdded, 
        itemAdded, 
        setItemAdded, 
        compra, 
        setCompra, 
        getCount, 
        addItem, 
        checkout,
        cleanProduct,
        cleanCart, 
        totalCart, 
        totalCartItems,
        showForm,
        handleClose,
        handleShow,
        createOrder,orderName,setOrderName, orderLastName, setOrderLastName,orderPhone, setOrderPhone, orderEmail, setOrderEmail, orderId,orderComments, setOrderComments,
        orderDone, showOrderDone, handleShowOrder, handleCloseOrder, 
    } }> {children} </CartContext.Provider>
} 


//Cuando cualquier componente use este Hook (useCartContext), va a usar el value de CartContext
export const useCartContext = () => useContext(CartContext)

