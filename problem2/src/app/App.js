import {useEffect, useState} from "react"
import {Container, Table, Form} from "react-bootstrap"
import axios from "axios"
const App = () => {
  const [tokenPrice, setTokenPrice] = useState([])
  const [amount, setAmount] = useState("")
  useEffect(() => {
   getTokenPriceList()
  },[])
  const getTokenPriceList = () => {
    if(amount === ""){
     setAmount("")
    }
    axios.get("https://interview.switcheo.com/prices.json").then((res) => {
     let limit = res?.data?.slice(0, 4)
     setTokenPrice(limit)
    })
  }
  let logoToken = [
    "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/BLUR.svg",
    "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/bNEO.svg",
    "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/BUSD.svg",
    "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/USD.svg",
    "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/ETH.svg"
  ]
  return (
   <div className="App">
     <h1 className="text-center text-primary">Converting currency</h1>
     <Container>
      <div className="d-flex">
        <Form.Control 
          className="form-custom-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      {amount === "" ? <p className="text-center text-danger">Please enter your amount</p> : ""}
      <Table striped bordered className="mt-2">
         <thead className="bg-secondary">
           <tr>
             <th className="text-center text-white">Currency</th>
             <th className="text-center text-white">Price</th>
             <th className="text-center text-white">Convert to dollars</th>
             <th className="text-center text-white">Convert to bitcoin</th>
           </tr>
         </thead>
         {
           amount === "" 
           ? 
           ""
           :
          <tbody>
           {tokenPrice?.length > 0 && tokenPrice.map((i, index) => {
             return( 
              <tr key={index}>
                <td className="text-primary d-flex justify-content-center align-middle">
                  <img src={logoToken[index]} alt={i.currency} style={{width:"30px", height:"30px"}}/> 
                  <p style={{marginTop:"4%"}}>{i.currency}</p>
                </td>
                <td className="text-center text-secondary align-middle">{i.price}</td>
                <td className="text-center text-info align-middle">{amount === "" ? "" : "$" + amount * i.price}</td>
                <td className="text-center align-middle text-success">{((amount/i.price))}({i?.currency})</td>
              </tr>
             )
            })
            }
          </tbody>
         }
         
      </Table>
     </Container>
   </div>
  );
}

export default App;
