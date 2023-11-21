const Todos = () => {
    return (
        <div className="flex flex-col p-10">
      <div className='flex justify-left'>
        <h2
        className='text-2xl font-bold'
        >Todos</h2>
        </div>
        <table className='flex flex-col'>
          <ul>
            <li><input type="checkbox"/>Todo 1</li>
            <li><input type="checkbox"/>Todo 2</li>
          </ul>
          </table>
      </div>  
    )
  }
  export default Todos;