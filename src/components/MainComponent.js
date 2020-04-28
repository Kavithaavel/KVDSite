// import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
// import HotelDirectory from "./HotelDirectoryComponent";
// import HotelsiteInfo from "./HotelsiteInfoComponent";
// import { HOTELSITES } from "../shared/hotelsites";

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hotelsites: HOTELSITES,
//       selectedHotelsite: null,
//     };
//   }

//   onHotelsiteSelect(hotelsiteId) {
//     this.setState({ selectedHotelsite: hotelsiteId });
//   }

//   render() {
//     return (
//       <div>
//         <Navbar dark color="info">
//           <div className="container">
//             <NavbarBrand href="/">KVD Tourism</NavbarBrand>
//           </div>
//         </Navbar>
//         <HotelDirectory
//           hotelsites={this.state.hotelsites}
//           onClick={(hotelsiteId) => this.onHotelsiteSelect(hotelsiteId)}
//         />
//         <HotelsiteInfo
//           hotelsite={
//             this.state.hotelsites.filter(
//               (hotelsite) => hotelsite.id === this.state.selectedhotelsite
//             )[0]
//           }
//         />
//       </div>
//     );
//   }
// }

// export default Main;
