import React, { Component } from "react";
import { Header } from './Searchbar.styled'

// export class Searchbar extends Component {
//   render() {
//     return(
//       <>
//         <Header>
//           {this.props.children}
//         </Header>
//       </>
//     );
//   }
// }

export const Searchbar = ({children}) => {
  return(
    <>
      <Header>
        {children}
      </Header>
    </>
  );
}
