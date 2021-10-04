import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=> {
        fetch('/fakeSubjects.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)'  }} className="pt-2">
            <h2 className='text-center mx-5 p-2 rounded mx-auto ' style={{border: '1px dotted', width:'400px' }}>Categories</h2>
             <Row xs={1} md={3} className="g-4 mx-5 pb-5 mt-3">
                {
                    categories?.map(category => <Category key={category.id} category={category}></Category>)
                }
            </Row>
        </div>
    );
};

export default Categories;