import React from "react";
import loading from "../img/loading.gif"
const Loading = () => {
  return (

 <div class="loading">
  <div class="loader">
    <h2 class="loading-text cd-headline clip is-full-width"> <span class="cd-words-wrapper"> <b class="is-visible">Hey please wait</b> <b>Still loading</b></span> </h2>
    <div class="loading-image"><img src={loading} alt="loading"/></div>
    </div>
   </div>
  );
};

export default Loading;
