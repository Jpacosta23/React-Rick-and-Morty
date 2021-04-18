const Paginator = ({ setPage, info }) => {
  const pageNumber = new Array(info.pages);

  for (let i = 1; i <= info.pages; i++) {
    pageNumber.push(i);
  }

  const handleButton = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setPage(event.target.value);
  };
  return (
    <ul>
      {pageNumber.map((number, index) => (
        <button key={index} onClick={handleButton} value={number}>
          {number}
        </button>
      ))}
    </ul>
  );
};

export default Paginator;
