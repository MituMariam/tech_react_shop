import React from 'react'
import { ProductConsumer } from "../context";

export default function HomePage() {
    return (
        <ProductConsumer>
           {value => {console.log({value})
           return <h2>home pg</h2>
           }}
        </ProductConsumer>
    )
}
