import React, { useState, useEffect, createContext, useContext } from 'react'

import { firestore } from "../../firebase"

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

    useEffect(() => {
        const db = firestore
        const itemsCollection = db.collection("items")
        const query = itemsCollection.get()
        query
            .then((res) => {
                const productsFirebase = []
                res.docs.forEach(doc => {
                    productsFirebase.push({ id: doc.id, ...doc.data() })
                    
                })

                if (categoryId) {
                    setItemsFirebase([...productsFirebase.filter(item => item.category === categoryId)])
                    
                } else {
                    setItemsFirebase(productsFirebase)
                }

                if (id) {
                    setItemDetail([...productsFirebase.filter(item => item.id === id)][0])
                }

            })
            .catch((err) => {
                console.log(err)
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