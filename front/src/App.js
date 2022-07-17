import './App.css';
import {React,useEffect,useState} from 'react'
import HistorySingle from './components/historySingle/HistorySingle'
import axios from 'axios';


function App() {
  const [expression,setExpression] = useState('')
  const [result,setResult] = useState('')
  const [history, setHistory] = useState([])
  const [isloading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchHisotry = async () => {
      try{
        setIsLoading(true)
        const res = await axios.get("/history");
        setHistory(res.data)
        setIsLoading(false)
        }catch(err){
          alert(err);
          setIsLoading(false)
        }
      }
      fetchHisotry();
    },[result])

  const handleClick = async(e) => {
    e.preventDefault();
    setExpression(expression + e.target.value)
  }
  
  const submit = async(e) => {
    e.preventDefault();
    try{
      setIsLoading(true)
      const calResult = await axios.post('/calculate',{expression: expression})
      setResult(calResult.data)
      setIsLoading(false)

    }catch(err){
      setIsLoading(false)
      alert(err)

    }
  }


  return (
    <div className="App container ">
      <h1 className='bg-warning bg-gradient '>Calculator</h1>
        <div className='row border border-dark'>
          <div className='col-lg-8 col-md-8 col-sm-12 bg-info bg-gradient opacity-75'>
            <div className="mb-3 ">
              <label className="mb-2 text-white"></label>
              <input id="expresion" type="text" className="form-control mb-2"  placeholder="Please type using keys only" autoFocus value={expression}  />
              <input id="result" type="text" className="form-control mb-3"  placeholder="This will show result"  value={result}  />
              <div className='buttonPanel container bg-warning '>
                <div className='d-flex justify-content-between my-1 py-1'>
                  <button onClick={handleClick}  value="clear" className='btn btn-lg bg-dark text-white' >C</button>
                  <button onClick={handleClick}  value="/" className='btn btn-lg bg-dark text-white' >/</button>
                </div>
                <div className='d-flex justify-content-between my-2 py-1'>
                  <button onClick={handleClick}  value="7" className='btn btn-lg bg-dark text-white' >7</button>
                  <button onClick={handleClick}  value="8" className='btn btn-lg bg-dark text-white' >8</button>
                  <button onClick={handleClick}  value="9" className='btn btn-lg bg-dark text-white' >9</button>
                  <button onClick={handleClick}  value="*" className='btn btn-lg bg-dark text-white' >*</button>
                </div>
                <div className='d-flex justify-content-between my-2 py-1'>
                  <button onClick={handleClick}  value="4" className='btn btn-lg bg-dark text-white' >4</button>
                  <button onClick={handleClick}  value="5" className='btn btn-lg bg-dark text-white' >5</button>
                  <button onClick={handleClick}  value="6" className='btn btn-lg bg-dark text-white' >6</button>
                  <button onClick={handleClick}  value="+" className='btn btn-lg bg-dark text-white' >+</button>
                </div>
                <div className='d-flex justify-content-between my-2 py-1'>
                  <button onClick={handleClick}  value="1" className='btn btn-lg bg-dark text-white' >1</button>
                  <button onClick={handleClick}  value="2" className='btn btn-lg bg-dark text-white' >2</button>
                  <button onClick={handleClick}  value="3" className='btn btn-lg bg-dark text-white' >3</button>
                  <button onClick={handleClick}  value="-" className='btn btn-lg bg-dark text-white' >-</button>
                </div>
                <div className='d-flex justify-content-between my-2 py-1'>
                  <button onClick={handleClick}  value="0" className='btn btn-lg bg-dark text-white zero' >0</button>
                  <button onClick={submit}  value="-" className='btn btn-lg bg-dark text-white' >=</button>
                </div>
              </div>

            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-12'>
            <div className='row text-danger justify-content-center fw-bold fs-1'>History</div>
              {isloading ? 'Loading...' : history.map((history)=>(
                <HistorySingle key={history._id} history={history} />
              ))}
          </div>
        </div>

    </div>
  );
}

export default App;
