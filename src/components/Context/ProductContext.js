import React, { useState, useEffect, createContext, useContext } from 'react'
import {useHistory} from "react-router-dom"

import { firestore } from "../../firebase"

import categories from "../../utils/categories"

export const ProductContext = createContext()

export default function ProductProvider({ children }) {

    const [item, setItem] = useState([])

    const [id, setId] = useState()

    const params = (idParams) => {
        setId(idParams)
    }

    const [categoryId, setCategoryId] = useState()

    const categoryParams = (catParams) => {
        setCategoryId(catParams)
    }
    
    const [itemsFirebase, setItemsFirebase] = useState([])
    const [itemDetail, setItemDetail] = useState([])

    const history = useHistory()

    useEffect(() => {
        const db = firestore
        const itemsCollection = db.collection("items")
        const query = itemsCollection.get()
        query
            .then((res) => {
                console.log("ID", categoryId)
                const productsFirebase = []
                res.docs.forEach(doc => {
                    productsFirebase.push({ id: doc.id, ...doc.data() })
                })

                if (categories.includes(categoryId)) {
                    setItemsFirebase([...productsFirebase.filter(item => item.category === categoryId)])
                } else if (!categoryId) {
                    
                    setItemsFirebase(productsFirebase)
                }else{
                    history.push("/")
                }

                if (id) {
                    setItemDetail([...productsFirebase.filter(item => item.id === id)][0])
                }
            })
            .catch((err) => {
                console.log("ERROR PEDIDO", err)
            })
    }, [id, categoryId])

    return <ProductContext.Provider value={{
        item,
        itemsFirebase,
        itemDetail,
        id,
        params,
        setItemsFirebase,
        categoryParams
    }}> {children} </ProductContext.Provider>

}

export const useProductContext = () => useContext(ProductContext)