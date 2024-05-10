import React,{useState} from 'react'

export default function About(props) {

    let mystyle = {
        color: props.mode==="dark"?"white":"black",
        backgroundColor: props.mode==="dark"?"rgb(100, 153, 233)":"white"
    }

    const [btntext,setbtntext] = useState("Enable Light Mode")

    const toggleStyle = ()=>{
        if(mystyle.color === "black"){
            setmystyle({
                color:"white",
                backgroundColor:'black',
                border:"1px solid white"
            })
            setbtntext("Enable Dark Mode")
        }
        else{
            setmystyle({
                color:"black",
                backgroundColor:'white'
            })
            setbtntext("Enable Light Mode")
        }
    }
    
    return (
        <div className='container my-3' style = {mystyle}>
            <h2 className='container' >About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text 1</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            You can modify any of this with custom CSS or overriding our default variables. 
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

