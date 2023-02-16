function Fillo(props) {

  function Borra(){
    props.funcionIncrementar(props.est+1)
  }

    return (
      <div style={{borderStyle: "solid"}}>
        <button onClick={Borra}>Borra</button>
        
      </div>
    );
  }
  
  export default Fillo;