import React,{useContext} from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import StockContext from "../store/stock-context";
import './InputForm.css';


const InputForm=props=>{
    const context=useContext(StockContext);
    const addProductHandler=e=>{
        e.preventDefault();
        const obj={
            title:document.getElementById('medicine_name').value,
            description:document.getElementById('description').value,
            price:document.getElementById('price').value
        }
        context.onAdd(obj);
    }
    return(
        <form className="input-form" onSubmit={addProductHandler}>
            <Input 
            title="Medicine Name" 
            attributs={{
                id:"medicine_name",
                type:'text'
            }}
            />
            <Input 
            title="Description" 
            attributs={{
                id:"description",
                type:'text'
            }}
            />
            <Input 
            title="Price" 
            attributs={{
                id:"price",
                type:'number',
                min:0,
            }}
            />
            <Button title="Add Product" type="submit"/>
        </form>
    );
}

export default InputForm;