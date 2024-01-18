export default function ChildrenDropMenuIn({value, onHandle, dataArray})  {
        // const handleChange =  (event) => {            
            
        //     onChange(event.target.value);
        // } ;
        
        return (<select className="filters__drop-menu" name="category" value={value} onChange={event => onHandle(event.target.value)}>
            {dataArray.map((item, i) => {                
                return (<option className={`${!item.isOn && "filters__drop-menu-inactive"}`} key={i} value={item.value} disabled={!item.isOn && 'disabled'} >{item.text}</option>)
            })}
        </select>)
};

// import React from 'react';
// // import './Dropdown.css';
// var Dropdown = require('react-simple-dropdown');
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;

// class ChildrenDropMenuIn extends React.Component {
//   render() {
//     return(
//       <Dropdown>
//           <DropdownTrigger>Profile</DropdownTrigger>
//           <DropdownContent>
//               <img src="#" /> Username
//               <ul>
//                   <li>
//                       <a href="/profile">Profile</a>
//                   </li>
//                   <li>
//                       <a href="/favorites">Favorites</a>
//                   </li>
//                   <li>
//                       <a href="/logout">Log Out</a>
//                   </li>
//               </ul>
//           </DropdownContent>
//       </Dropdown>
//     );
//   }
// }

// export default ChildrenDropMenuIn;