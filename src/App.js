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
  const [sortingCriteria, setSortingCriteria] = useState(null);
  const [selectedShoeType, setSelectedShoeType] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/data')
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
  

  const handleRecommendedClick = (category) => {
    setSelectedCategory(category);
  };

const filteredData = data.filter((item) => {
  const { category, color, company, newPrice, title } = item;
  const filterLowerCase = searchFilter.toLowerCase();
  const categoryLowerCase = category.toLowerCase();
 
  const newPriceLowerCase = newPrice.toLowerCase();
  const titleLowerCase = title.toLowerCase();

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
  const sortedData = data.slice().sort((a, b) => {
    if (sortingCriteria) {
      return a[sortingCriteria] - b[sortingCriteria];
    }
    return 0;
  });
  function handleUpdateOnSubmission(NewData){
    const serverOptions ={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(NewData)
    }
    fetch('http://localhost:8001/data',serverOptions)
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
