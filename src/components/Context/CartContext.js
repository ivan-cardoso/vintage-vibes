import React, {useState, useEffect, createContext, useContext} from 'react'

import {useProductContext} from "../Context/ProductContext"

import {useHistory } from "react-router-dom"

import firebase from "firebase/app";
import { firestore } from "../../firebase"


export const CartContext = createContext()


export default function CartProvider ({children}){  
    
    const {id, itemDetail} = useProductContext()

    const [itemAdded, setItemAdded] = useState(()=>
        JSON.parse(window.localStorage.getItem("cartItems")) || []
    )
    const [countAdded, setCountAdded] = useState(1)
    const [compra, setCompra] = useState(false)

    function getCount(numero) {
        setCountAdded(numero);
    }

    const history = useHistory()
    
    useEffect(()=> {
        const myStorage = window.localStorage 
        myStorage.setItem("cartItems", JSON.stringify(itemAdded))
    },[itemAdded])
    
    
    function addItem (){
        const isInCart = itemAdded.find((p) => p.id === itemDetail.id)
        if(isInCart){
            const add = isInCart.countAdded += countAdded
            setItemAdded([...itemAdded])
        }else{
            setItemAdded([...itemAdded, {...itemDetail, countAdded }]);
        }
        setCompra(true)
    }
    

    const cleanProduct = (id) => {
        itemAdded.splice(
            itemAdded.findIndex(p => p.id === id),
            1
            );
            setItemAdded([...itemAdded])
        };

    
    const cleanCart = (e) => {
        e.stopPropagation()
        setItemAdded([])
    }
    
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

    const [orderBuyer, setOrderBuyer] = useState({
        name: "",
        lastName: "",
        phone: 0,
        email:"",
        comments: "",
    })

    const handleBuyerChange = (e) =>{
        const {name, value} = e.target
        setOrderBuyer({...orderBuyer, [name] : value})
    }

    const [orderId, setOrderId] = useState("")

    const createOrder = (e) => {
        e.preventDefault()
        const order = {
            buyer: orderBuyer,
            items: [...itemAdded],
            date: firebase.firestore.FieldValue.serverTimestamp(),
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
        setShowForm(false)
        setShowOrderDone(false);
        setOrderId("")
        setItemAdded([])
        history.push("/")
    } 

    const handleShowOrder = () => {
        setShowOrderDone(true)
    };


    const orderDone = () =>{
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
        cleanProduct,
        cleanCart, 
        totalCart, 
        totalCartItems,
        showForm,
        handleClose,
        handleShow,
        handleBuyerChange,
        createOrder, 
        orderId,
        orderDone, 
        showOrderDone, 
        handleShowOrder, 
        handleCloseOrder, 
    } }> {children} </CartContext.Provider>
} 

export const useCartContext = () => useContext(CartContext)


