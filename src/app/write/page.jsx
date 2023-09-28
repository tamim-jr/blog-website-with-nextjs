"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { BsFillPlusCircleFill, BsFillImageFill, BsUpload, BsPlayBtnFill } from "react-icons/bs";
const WritePage = () => {


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text"  placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
        <BsFillPlusCircleFill className={styles.addicon}/> 
        </button>
       {open && (
         <div className={styles.add}>
          <button className={styles.addButton}>
              <h2  href=""><BsFillImageFill className={styles.addicon}/></h2> 
          </button>
          <button className={styles.addButton}>
          <h2  href=""><BsUpload className={styles.addicon}/></h2> 
          </button>
          <button className={styles.addButton}>
          <h2  href=""><BsPlayBtnFill className={styles.addicon}/></h2> 
          </button>
        </div>
         )} 


        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;