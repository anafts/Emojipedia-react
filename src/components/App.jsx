import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function Card(info) {

  return (

    <Entry
    key = {info.id}
    emoji = {info.emoji}
    name = {info.name}
    meaning = {info.meaning}
     />
  );
};

function App() {
  return (

    <div>

      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary"> {emojipedia.map(Card)} </dl>


      <footer> </footer>
      
    </div>

    
  );
}

export default App;
