import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosComponent() {

  const[data,setData]=useState([])
// const[id,setId]=useState()
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res.data)
    setData(res.data);
    })
    .catch(err=>console.log(err))
  })

  const arr=data.map((data,index)=>
  {
    return(
      <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.body}</td>
      </tr>
    )
  })
  return (
    <div>
      <h1>let use Axios</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {arr}
      </table>
    </div>
  )
}

export default AxiosComponent