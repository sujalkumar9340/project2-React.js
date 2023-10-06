import React ,{useState}from "react"
export default function About() {
  // let ae = fetch("https://get.weavy.io/verify/1a462d7ca00341e5bfcce5bea8cda33c");

   const [mystyle, setmystyle]=useState( {
    color: "black",
    backgroundColor: "white"
  })
  const[btntext,setbtntext] =useState("Enable dark mode")
   const Togglestyle=()=>{
    if(mystyle.color === "black"){
      setmystyle({
        color:"white",
        backgroundColor:"black",
        border:"1px solid white"
        
      })
      setbtntext("Enable light mode")
    }
    else{
      setmystyle({
        color:"black",
        backgroundColor:"white",
       
        
      })
      setbtntext("Enable Dark mode")
    }
  }
 
  return (
  
    <div className="container"  style={mystyle}>
      <h1 className="my-3">about us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show"  style={mystyle} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
    
      <h2 className="accordion-header">
        
        <button className="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse"  style={mystyle} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"  style ={mystyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" style={mystyle}  data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{color:"red"}}>
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
  {console.log("this is here")}
  {/* {agar intrnially function define karega to sirf usi  scope m exxceable hai uske bahr usko call bhi nahi kar sakthe hai} */}
  {
   function (){
    let obj={
      name:"sujal"}
      return <h1>here is extra function {obj.name}</h1>
    } ()
   }
  

  <div className="container my-3" onClick={Togglestyle}><button type="button" className="btn btn-primary">{btntext}</button></div>
  
      </div>

  )
}
