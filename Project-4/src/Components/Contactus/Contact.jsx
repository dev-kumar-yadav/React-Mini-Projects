import React from 'react'
import './Contact.css'
import { TbFileLike } from "react-icons/tb";
function Contact() {
    return (
        <div id='contact'>


            <form action={"https://formspree.io/f/xqadzqav"} method='POST'>
                <div className="title">
                    <span id='contactitle'>Contact Page</span>
                </div>

                <div className="inputfield">
                    <div className="list">
                        <label htmlFor="name">UserName</label>
                        <input type="text" name='username' id='name' required />
                    </div>

                    <div className="list">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' required />
                    </div>

                    <div className="list">
                        <label htmlFor="mess">Message</label>
                        <textarea name='message' id="mess"></textarea>
                    </div>
                </div>

                <button id='contactbtn'>Submit<TbFileLike /></button>
            </form>
        </div>
    )
}

export default Contact