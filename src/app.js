import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     )
// }
// ReactDOM.render(
//     <Layout>
//         <h3>
//             Page Titletrons
//         </h3>
//     </Layout>, 
//     document.getElementById("app")
// );

ReactDOM.render(<IndecisionApp options={["die", "live"]}/>, document.getElementById("app"));