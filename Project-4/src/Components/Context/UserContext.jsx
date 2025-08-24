import React, { createContext, useState } from 'react'
export const DataContext = createContext();

export function UserContext({ children }) {
    let [title, setTitle] = useState("");
    let [addListing, setaddListing] = useState(false);
    let [addImg1, setaddImg1] = useState();
    let [addImg2, setaddImg2] = useState();
    let [addImg3, setaddImg3] = useState();
    let [price, setprice] = useState();
    
    let value = {
        title, setTitle,
        addListing, setaddListing,
        addImg1, setaddImg1,
        addImg2, setaddImg2,
        addImg3, setaddImg3,
        price, setprice
    }

    return (
        <div>
            <DataContext.Provider value={value} >
                {children}
            </DataContext.Provider>
        </div>
    )
}
