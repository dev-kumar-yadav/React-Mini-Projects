import React, { useContext } from 'react'
import './Listing.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { DataContext } from '../Context/UserContext';
function Listing() {
   
 
       let {
            title,setTitle,
            addListing,setaddListing,
            addImg1,setaddImg1,
            addImg2,setaddImg2,
            addImg3,setaddImg3,
            price,setprice
        } = useContext(DataContext);
         console.log(title,addImg1, addImg2, addImg3,price);
 
    return (
        <div id='listing'>
            <form onSubmit={(event) => { alert("Add Listing Successfully"); event.preventDefault(); setaddListing(true)}}>
                <div className="title">
                    <span id='listingtitle'>Add Your Listing</span>
                </div>

                <div className="inputfield">
                    <div className="list">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' required onChange={(event) => setTitle(event.target.value)} value={title}/>
                    </div>

                    <div className="list">
                        <label htmlFor="des">Description</label>
                        <textarea id="des"></textarea>
                    </div>

                    <div className='list'>
                        <label htmlFor="img1">Image 1</label>
                        <input type="file" id='img1' required  onChange={(event) => setaddImg1(event.target.files[0])} />
                    </div>
                    <div className='list'>
                        <label htmlFor="img2">Image 2</label>
                        <input type="file" id='img2' required onChange={(event) => setaddImg2(event.target.files[0])}/>
                    </div>
                     <div className='list'>
                        <label htmlFor="img3">Image 3</label>
                        <input type="file" id='img3' required onChange={(event) => setaddImg3(event.target.files[0])}/>
                    </div>
                     <div className="list">
                        <label htmlFor="price">Price</label>
                        <input type="number" id='price' required onChange={(event) => setprice(event.target.value)} value={price}/>
                    </div>
                     <div className="list">
                        <label htmlFor="loc">Location</label>
                        <input type="text" id='loc' />
                    </div>

                </div>

                <button id='listingbtn'>  Add<IoMdAddCircleOutline/>  </button>
            </form>
        </div>
    )
}

export default Listing