
const Displayitems = (props )=> {
   
    //create a list of items
    const List = ({ list }) => {
        if(list) {
           return list.map((item, index) => {
             return <div key={index}>{item.name}</div>
           })
        }
    }

   
   
    //return the JSX
      return(
        <div>{List(props)}</div>
      )
}

export default Displayitems