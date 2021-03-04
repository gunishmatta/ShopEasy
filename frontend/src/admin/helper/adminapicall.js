import { backendAPI } from "../../backend";


//category calls
export const createCategory = (userId, token, category) => {
    return fetch(`${backendAPI}/category/create/${userId}`, {
        method: "POST",
        headers:
        {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(category)

    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}

//get all categories
export const getCategories = () =>
{
    return fetch(`${backendAPI}/categories`,
    {
        method:"GET"
    }).then(response => response.json()).catch(err=>console.log(err))
}


//product calls
export const createProduct = (userId, token, product) => {
    return fetch(`${backendAPI}/product/create/${userId}`, {
        method: "POST",
        headers:
        {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const getProducts = () =>
{
    return fetch(`${backendAPI}/products`,
    {
        method:"GET"
    }).then(response => response.json()).catch(err=>console.log(err))
}

//delete a product

export const deleteProduct = (userId, token, productId) => {
    return fetch(`${backendAPI}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers:
        {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}


// get one product

export const getProduct = (productId) =>
{
    return fetch(`${backendAPI}/product/${productId}`,{
        method:"GET"
    }).then(response => response.json()).catch(err=>console.log(err))
}


//update a product
export const updateProduct = (productId,userId,token,product) =>
{
    return fetch(`${backendAPI}/product/${productId}/${userId}`, {
        method: "PUT",
        headers:
        {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
   
}