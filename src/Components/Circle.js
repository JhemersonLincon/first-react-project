import {useMemo,} from 'react';

export const Circle = ({cont}) => {

  function operacaoLenta() {
    let circle = [];
    for(let i=0;i<5;i++){
      circle.push(<div key={i} className="circle"></div>)
    }
    return circle
  }
  const value = useMemo(()=> operacaoLenta(), [])
  return (
    <>  
    {value}
    </>
  )
}
