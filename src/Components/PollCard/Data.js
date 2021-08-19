

const Data=(obj)=>{
    const {a, b, c, d} = obj;
    return (
      <div>
        {console.log(a)}
        {console.log(b)}
        {console.log(c)}
        {console.log(d)}
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
        <h1>{d}</h1>  
        {/* {these dont actually render out, but it stops the compilier from bitching about unused variables} */}
      </div>
    );
}

export default Data