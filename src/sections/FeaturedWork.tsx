import React from "react";
import Image from "next/image";

const FeaturedWork = () => {
  const projects = [
    {
      title: "AHS Properties",
      href: "https://ahs-properties.com/",
      image: "/images/2026/03/ahs-image.jpg",
      tags: ["SEO", "Social Media Management"],
      colClass: "col-sm-6 col-md-8 mb-5",
    },
    {
      title: "Estudypal",
      href: "https://www.instagram.com/estudypal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      image: "/images/2026/03/estudypal-image.jpg",
      tags: ["SEO", "Social Media Management"],
      colClass: "col-sm-6 col-md-4 mb-5",
    },
    {
      title: "SP Legal",
      href: "https://splegal.ae/",
      image: "/images/2026/03/sp-legal-image.jpg",
      tags: ["Video Editing", "Content Creation"],
      colClass: "col-sm-6 col-md-4 mb-5 mb-sm-0",
    },
    {
      title: "Juriszone",
      href: "https://juriszone.com/",
      image: "/images/2026/03/juriszone-image.jpg",
      tags: ["Video Editing", "Content Creation"],
      colClass: "col-sm-6 col-md-8 mb-5 mb-sm-0",
    },
  ];

  return (
    <section className="featured-section section-padding bg-silver-gray">
      <div className="container-fluid">
        <div className="section-header text-center mb-5">
          <h2 className="big-text">Featured work</h2>
          <div className="grey-vertline"></div>
          <p>
            Explore how we turn strategy into measurable growth. Each project reflects our ability to generate leads,
            increase sales,{" "}
            <span className="d-lg-block">
              and build scalable marketing systems across SEO, paid ads, content, and social media.
            </span>
          </p>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className={project.colClass}>
              <div className="portwrapper">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="portlink">
                  <div className="portimage mb-3 rounded-3">
                    <Image
                      className="rounded-3"
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="portwrapper d-flex align-items-center justify-content-between">
                    <div className="procontent">
                      <h4>{project.title}</h4>
                      <div className="smbtn d-flex flex-wrap gap-3">
                        {project.tags.map((tag, i) => (
                          <div key={i} className="bordersm-btn">
                            <div className="sub-text border border-dark px-3 py-2 rounded-pill">{tag}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="porlinknbtn rounded-pill bg-black px-4 py-1">
                      <Image src="/images/2026/02/white-arrow.svg" alt="Arrow" width={20} height={20} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
