import React, { useState, useEffect } from "react" //React Hook
import { Link } from "react-router-dom"
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {

    let [productList, setproductList] = useState([])
    let [input, setInput] = useState('')


    console.log(productList)


    useEffect(() => {
        //1:無第二參數，component 每次render都會觸發
        //2:Dependency Array是空array，只會在第一次網頁render時會觸發
        //3:Dependency Array是有變數時，第一次網頁render+指定變數改變時會觸發

        fetch('https://mingkai880904.github.io/react-product.json')
            .then(response => response.json())
            .then(data => setproductList(data))

        console.log(productList)
    }, [])//Dependency Array

    // useEffect(()=>{
    //     if(input.length>4)
    //         console.log('字串夠長')
    //     else
    //         console.log('字串夠短')

    // },[input])



    return (
        <>
            <div>
                {/* <input type="text" onChange={e=>setInput(e.target.value)} />  */}
                <Title mainTitle="請選擇要購買的飲料" subTitle="即日起至11/3 買三送一!!" />
                <div className="container">
                    {
                        productList.map(product => (
                            <React.Fragment key={product.id}>

                                <div className="containerItem">
                                    <Link to={'/product/' + product.id}>
                                        <img src={process.env.PUBLIC_URL + '/img/' + product.image} alt={product.name} />
                                    </Link>

                                    <div className="productName">
                                        {product.name}  -  {product.price}元/杯
                                    </div>

                                    <QuantityBtn productInfo={product} />
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    )
} 