const Saying = ({saying}) =>{
    return(
        <>
        <strong style={{fontSize:"30px"}}>{saying.word}</strong>
        <br/>
        <br/>
        <span style={{fontSize:"20px"}}>-{saying.people || "불명"}-</span>
        </>
    )

}


export default Saying;