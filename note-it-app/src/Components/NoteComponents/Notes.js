import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note"
import React, { useState } from 'react';



function Notes() {
 
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");



    return (
    




    <div className="notes">
      <Note />
      <Note />
      <Note />
    </div>
  );
}
export default Notes;