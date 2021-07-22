import React from "react";
import "../styles/About.scss";

import NicPic from "../images/nic_forcki_1.jpg";

export default function About() {
  return (
    <div className="AboutContainer">
      <div className="AboutText">
        <h4>
          I started out exploring hobby-coding for web in my teens,
          and had then the amazing opportunity to go to a school teaching practical basic use of many different technologies.<br></br> 
          <br></br>
          To explore and practically learn graphic design, web design, photography, tv-production, video-editing and much more - was a dream come true.
          <br></br>
          <br></br>
          So with those skills, I took on at age 19 to help the nightclub/event company 'Clean Group' (Stockholm) with creating all graphic and web - that broke through in big success.
          <br></br>
          <br></br>
          This led me to study Interactive Communications at Berghs School Of
          Communication (Stockholm),
          <br></br> followed by Web Development at DCI (Berlin).
          <br></br>
          <br></br>
          I understood early my interest for design, technology and communication<br></br>
          - and can barely wait to see what adventures lies ahead!
          <br></br><br></br>
      
        </h4>
      </div>

      <div className="NicCropper">
        <img className="NicPic" src={NicPic} alt="Nic Solitom" />
      </div>

      <div className="MyPath MyPathFirst">
        <h4 className="PathTitle">DCI - Digital Career Institute</h4>
        <h4 className="PathInfo">
          I studied: Web Development<br></br>
          2019 - 2020 > Berlin
        </h4>
      </div>

      <div className="MyPath">
        <h4 className="PathTitle">Berghs School of Communication</h4>
        <h4 className="PathInfo">
          I studied: Interactive Communication in Digital Media<br></br>
          2008 - 2009 > Stockholm
        </h4>
      </div>

      <div className="MyPath">
        <h4 className="PathTitle">MediaGymnasiet</h4>
        <h4 className="PathInfo">
          I studied: 3 years learning while exploring all 9 different mediums. The last year focused on Tv-Production, but here I first began to dance with Graphic Design, Web Design, Video Editing and more..<br></br>
          2002 - 2005 > Stockholm
        </h4>
      </div>

      <div className="MyPath">
        <h4 className="PathTitle">Freelance</h4>
        <h4 className="PathInfo">
          Graphic Design<br></br>
          2010 - 2016 > Stockholm / Berlin / Remote
        </h4>
      </div>



      <div className="MyPath">
        <h4 className="PathTitle">Clean Group</h4>
        <h4 className="PathInfo">
          Head Graphic Designer<br></br>
          2006 - 2009 > Stockholm
        </h4>
      </div>

      <div className="MyPath">
        <h4 className="PathTitle">Nordisk Film TV</h4>
        <h4 className="PathInfo">
          Video Editing Assistance (Batcher) for stand-up comedy show 'TeveTeve'<br></br>
          2004 - 2005 > Stockholm
        </h4>
      </div>

    </div>
  );
}
