
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';

const ContactForm = () => {
  const[name, setName]=useState("Shivani");
  const[email, setEmail]=useState("shiv@gmail.com");
  const[text, setText]=useState("ABC");
 const onSubmit = (event) =>{
  event.preventDefault();
 setName(event.target[0].value);
 setEmail(event.target[1].value);
 setText(event.target[2].value);
 }
  return (
   <section className={styles.container}>
    <div className={styles.ContactForm}>
      <div className={styles.top_btn}>

      <Button  text="VIA SUPPORT CHAT" icon=  {<BiMessageDetail fontSize="24px"/>}/>
      <Button  text="VIA CALL" icon=  {<IoMdCall fontSize="24px"/>}/>
      </div>
      <Button
      isOutline={true}
      text="VIA EMAIL FORM" 
      icon=  {<HiMail fontSize="24px"/>}/>

      <form onSubmit={onSubmit}> 
        <div className={styles.form_control}>
        <label htmlFor="Name">Name</label>
        <input type="text" name='Name' />
        </div>
        <div className={styles.form_control}>
        <label htmlFor="Email">Email</label>
        <input type="email" name="email"  />
        </div> 
         <div className={styles.form_control}>
        <label htmlFor="TextArea">Text</label>
        <textarea name="text"/>
        </div>
      <div style={{display:"flex",
        justifyContent:"flex-end"
      }} > 
      <Button
      text="SUBMIT BUTTON" 
/>
      </div>
      <div>
      {name + " " + email +" " + text + " "}
      </div>
      </form>
    </div>
    <div className={styles.ContactImage}>
      <img src="images/contact.png" alt="Contact image" />
    </div>
   </section>
  )
}

export default ContactForm
