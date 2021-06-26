const Else = (props)=> {
  if(props.condition){
    return null;
  }else{
    return props.children;
  }
}
export default Else;