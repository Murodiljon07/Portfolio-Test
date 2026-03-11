import { useEffect, useState } from "react";
import { repository } from "../../services/repository.service";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function FeaturedProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    repository
      .then((res) => setRepos(res.data))
      .catch((err) => toast.error(err.massage));
  }, []);

  return (
    <section className="my-[76px]">
      <h3
        className="relative flex items-center justify-center text-[24px] md:text-[32px] my-[40px] md:my-[63px]
before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-3 before:w-[80px] before:h-[4px] before:bg-(--color-primary) rounded-2xl"
      >
        Featured Projects
      </h3>

      <p className="text-center max-w-[672px] mx-auto">
        Here are some of my recent works that showcase my skills in building
        modern web applications.
      </p>

      <div className="container my-[64px]">
        {repos.slice(0, 4).map((item) => {
          let { name, language, visibility, created_at, svn_url } = item;
          return (
            <div>
              <div>
                <span>{created_at.slice(0, 11)}</span>
                <span>{visibility}</span>
              </div>
              <h3>{name}</h3>
              <p>{language}</p>
              <Link to={svn_url} target="_blank">
                go git
              </Link>
            </div>
          );
        })}
      </div>

      <label htmlFor="" className="block mx-auto text-center ">
        Want to see more?{" "}
        <Link
          to={"https://github.com/Murodiljon07"}
          className="text-(--color-primary)"
        >
          Visit my GitHub
        </Link>
      </label>
    </section>
  );
}

export default FeaturedProjects;
