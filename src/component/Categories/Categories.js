import React, { useEffect } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=> {
        fetch('/fakeSubjects.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Categories;