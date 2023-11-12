import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import Products from './components/Products';
import Recommended from './components/Recommended';
import SideBar from './components/SideBar';
import NewData from './components/NewData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [setSortingCriteria] = useState(null);
  const [selectedShoeType, setSelectedShoeType] = useState('');

  useEffect(() => {
    fetch('https://blog1-ioqo.onrender.com/data')
      .then((resp) => resp.json())
      .then((transc) => setData(transc));
  }, []);

  const handleInputChange = (event) => {
    setSearchFilter(event.target.value);
  };
  const handleChange = (event) => {
    const selected = event.target.value;
    console.log('Selected :', selected);
    setSelectedCategory(selected);
  };
  

  const filteredData = data.filter((item) => {
    const { category, title } = item || {};
    const filterLowerCase = searchFilter.toLowerCase();
    const categoryLowerCase = category?.toLowerCase() || '';
    const titleLowerCase = title?.toLowerCase() || '';
  
    return (
      (!searchFilter || 
        titleLowerCase.includes(filterLowerCase) ||
        categoryLowerCase.includes(filterLowerCase)) &&
      (!selectedCategory || categoryLowerCase === selectedCategory)
    );
  });
  


  const result = filteredData.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
    <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
    />
  ));
  function handleSort(criteria) {
    setSortingCriteria(criteria);
  }
  
  function handleUpdateOnSubmission(NewData){
    const serverOptions ={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(NewData)
    }
    fetch('https://blog1-ioqo.onrender.com/data',serverOptions)
    .then(r=>r.json())
    .then(newItem=> setData(data=>[...data,newItem]))
    .catch(err=>console.log(err))
  }
  return (
    <div className="HappyCoding">


     <Nav searchFilter={searchFilter} handleInputChange={handleInputChange} />
      <NewData onSubmission={handleUpdateOnSubmission}/>
      <SideBar handleChange={handleChange} />
      <Recommended handleSort={handleSort} setSelectedShoeType={setSelectedShoeType} />
      <Products result={result} />
      {selectedShoeType && (
        <div className="selected-shoe-type">Selected Shoe Type: {selectedShoeType}</div>
      )}
      
      
    </div>
  );
}
