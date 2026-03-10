import React, { useEffect } from "react";
import { contactReq } from "../../services/contact.service";

function SklExpSection() {
  useEffect(() => {
    contactReq.get().then((res) => console.log(res.data));
  }, []);

  return (
    <section className="bg-(--color-nd-secondary)">
      <div>
        <h3>Skills & Expertise</h3>
      </div>

      <div></div>
    </section>
  );
}

export default SklExpSection;
