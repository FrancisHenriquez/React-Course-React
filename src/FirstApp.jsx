import React from 'react'
const getResult = (a,b) => {
    return a + b;
}
export const FirstApp = () => {

    const newMesage = {
        message: 'Hola',
        title:'Francis'
    }
  return (
    <> 
    <h1>{
        getResult(1,2)
        }</h1>
    {/* <h1>{JSON.stringify(newMesage) }</h1> */}
    <p>Subtitulo</p>
    </>
   
  )
}
