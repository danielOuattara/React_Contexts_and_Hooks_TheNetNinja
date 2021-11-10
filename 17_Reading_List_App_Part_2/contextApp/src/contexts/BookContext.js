
import React, {Component, createContext, useState} from "react";

export const BookContext = createContext();

export class BookContextProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [           
                {title: "The way of King", id: 1} ,
                {title: "The name of the wind", id: 2} ,
                {title: "The final empire", id: 3} ,
            ]
 
        }
    }
    
    render() {
        return (
            <BookContext.Provider value= {{...this.state.books}}>
                {this.props.children}
            </BookContext.Provider>
        );
    }
}

export default BookContextProvider;


// BookContext using function component !

// import React, { createContext, useState} from "react";

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//     const [books, setbBooks] = useState([           
//         {title: "The way of King", id: 1 },
//         {title: "The name of the wind", id: 2 },
//         {title: "The final empire", id: 3 },
//     ]);
//     return (
//         <BookContext.Provider value={{books}}>
//             {props.children}
//         </BookContext.Provider>
//     );
// }

// export default BookContextProvider;
