import axios, { AxiosResponse } from "axios"
import { TodoType } from "./constants"

export const GETAPI=async()=>{
    let res=await axios.get("http://localhost:8080/todos")
    return res.data
}

export const POSTAPI=async(item:TodoType)=>{
    let resp:AxiosResponse=await axios.post("http://localhost:8080/todos",item)
    return resp.data
}

export const DELETAPI=async(id:number)=>{
    let resp:AxiosResponse=await axios.delete(`http://localhost:8080/todos/${id}`)
    return resp.data
}
