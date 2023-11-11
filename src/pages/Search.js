import {useState}  from "react"


function Search ({onSubmit}) {

    const [term, setTerm ] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(term)
    }

    function handleChange (e) {
        setTerm(e.target.value)
    }
    console.log(term)

    return (
        <div>
           <form 
           onSubmit={handleSubmit}
           >
        <input
        value={term}
        onChange={handleChange}
        placeholder="Enter a song..."
        >
        </input>
        <button>
            Search
        </button>
      </form>
        </div>
    )
    

}



export default Search