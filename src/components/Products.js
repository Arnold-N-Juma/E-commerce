export default function Products({ result, data, setData }) {

  function handleDelete(id) {
   
    if (data && data.length > 0) {
  
      const filteredData = data.filter(item => item.id !== id);
    
      setData(filteredData);

      fetch(`https://blog1-ioqo.onrender.com/data/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('Item deleted successfully from the backend.');
          } else {
            console.error('Failed to delete item from the backend.');
          }
        })
        .catch((error) => {
          console.error('Error 404:', error);
        });
    }
  }
  

  return (
    <div>
      <section className="card-container">
        {result.map((item) => (
          <div key={item.id} className="card">
            <h3 className="card-title">{item.title}</h3>
                     {item}
            <button onClick={() => handleDelete(item.id)} className="btns">Delete</button>
          </div>
        ))}
      </section>
    </div>
  );
}
