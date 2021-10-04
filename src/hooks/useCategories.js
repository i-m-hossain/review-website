import { useEffect, useState } from "react"

const useCategories = () =>{
    const[categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('/fakeSubjects.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return [categories, setCategories];
}
export default useCategories;