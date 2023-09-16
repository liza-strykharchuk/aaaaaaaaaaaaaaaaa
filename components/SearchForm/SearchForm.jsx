import PropTypes from "prop-types";

import React from "react";
import { Formik } from 'formik';
import { Forma, Input, SearchButton, Label } from './SearchForm.styled';

// export class SearchForm extends Component {

// handleSubmit = (values, actions) => {
//     this.props.handlSearcPphoto(values.search)
//     actions.resetForm();
//   };

//   render() {
//     return(
//       <>
//         <Formik
//           initialValues={{ search: '' }}
//           onSubmit={this.handleSubmit}
//           >

//             <Forma >
//               <SearchButton type="submit" >
//                 <Label>S</Label>
//               </SearchButton>

//               <Input
//                 type="text"
//                 name="search"
//                 placeholder="Search images and photos"
//               />
//           </Forma>
//         </Formik>
//       </>
//     );
//   }
// }

export const SearchForm = ({handlSearcPphoto}) => {
  const handleSubmit = (values, actions) => {
    handlSearcPphoto(values.search)
    actions.resetForm();
  };

      return(
        <>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={handleSubmit}
            >

              <Forma >
                <SearchButton type="submit" >
                  <Label>S</Label>
                </SearchButton>

                <Input
                  type="text"
                  name="search"
                  placeholder="Search images and photos"
                />
            </Forma>
          </Formik>
        </>
      );
  }

SearchForm.propTypes = {
   handlSearcPphoto: PropTypes.func,
};
