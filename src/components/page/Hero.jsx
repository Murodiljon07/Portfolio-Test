import React, { useEffect, useState } from "react";

import { aboutReq } from "../../services/about.service";

function Hero() {
  /* forma */
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [tgLink, setTgLink] = useState();
  const [github, setGithub] = useState();
  const [linkedIn, setLinkedIn] = useState();

  useEffect(() => {
    async function getAbout() {
      try {
        let res = (await aboutReq.get()).data;

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    getAbout();
  }, []);

  return (
    <div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
