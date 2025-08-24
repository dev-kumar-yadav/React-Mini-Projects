

import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import Contact_image from '../../assets/contact_img.svg';


const ContactForm = () => {
    
     const   onSubmit = (event) => {
            event.preventDefault();
            console.log(event)
            console.log(event.target[0].value)
            console.log(event.target[1].value)
            console.log(event.target[2].value)
        }
     
    

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>

                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} isoutline={false} />
                    <Button  text="VIA CALL" icon={<MdPhone fontSize="24px" />} isoutline={false} />
                </div>
                <Button text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} isoutline={true} />
                <form onSubmit={(event) => onSubmit(event)}>

                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" />


                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />


                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" id="" rows={8} />


                    </div>
                    <div style={{ display: "flex", justifyContent: "end" }}>

                        <Button text="SUBMIT" />
                    </div>

                </form>



            </div>
            <div className={styles.contact_image}>
                <img src={Contact_image} alt="contact image" />
            </div>
        </section>
    )
}

export default ContactForm