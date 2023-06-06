import {useParams, Link} from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import { useState,useEffect } from "react"

export default function ProductDetail() {

    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)

    useEffect(()=>{
        fetch('https://mingkai880904.github.io/react-product.json')
            .then(response => response.json())
            .then(data => {
                let productInfo = data.find((element)=>{
                    return element.id === parseInt(params.id)
                })
                setProductDetail(productInfo)
            })
    },[params.id]) // <==  Dependency Array

    return (
        <div>
            {
                productDetail &&
                <div className="ProductDetail">
                    <Title mainTitle={productDetail.name+'商品資料'} />

                    <table width="100%">
                        <tbody>
                        <tr>
                            <td align="right">
                                <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="400" />
                            </td>
                            <td width="45%" padding="10">
                                <p>品名 : {productDetail.name}</p>
                                <p>價格 : {productDetail.price}元</p>
                                <p>描述 : {productDetail.description}</p><br/>
                                <QuantityBtn productInfo={productDetail} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
        

            <Link to="/" >
                <div className="backToGoodsListBtn">↩️ 返回商品列表</div>
            </Link>
        </div>
    )
}