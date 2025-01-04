import React from 'react'

export default function Learn() {

    let welcome = "hello world"
    let mod = "bye"
    let time = new Date();
    let hours = time.getHours();
    let headerStyle = { };
  
    if(hours > 18) {
        headerStyle = {
            backgroundColor: 'blue'
        }
    } else if (hours < 18) {
        headerStyle = {
            backgroundColor: 'red'
        }
    }


  return (
    <div className='Learn' style={headerStyle}>
        
        <h1>{`${welcome} ${mod}`}</h1>



    </div>
  )
}
