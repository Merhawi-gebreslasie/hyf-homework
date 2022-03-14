import React from 'react';
// functional Components
export const Header=({header})=>{
    return(<div className='header'>
    <h1>{header}</h1>
    </div>)
}




// class Components
// class Header extends Component{
//     render(){
//         return(

//             <div className='header'>
//             <h1>{this.props.header}</h1>
//             </div>) 
//         )
//     }
// }
// export default Header;