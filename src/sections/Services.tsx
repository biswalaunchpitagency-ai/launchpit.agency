import React from "react";

const Services = () => {
  const services = [
    {
      id: "service1",
      num: "01",
      title: "SEO",
      desc: "Dominate search rankings and bring in organic traffic that converts.",
    },
    {
      id: "service2",
      num: "02",
      title: "Paid Ads",
      desc: "Google, Meta, YouTube — we run campaigns that spend smart and scale fast.",
    },
    {
      id: "service3",
      num: "03",
      title: "Video Creation",
      desc: "High-impact video content for social, ads, and brand storytelling.",
    },
    {
      id: "service4",
      num: "04",
      title: "Content Creation",
      desc: "Blogs, scripts, copy — every word crafted to engage and convert.",
    },
    {
      id: "service5",
      num: "05",
      title: "Social Media",
      desc: "Strategy, creation, and management across every major platform.",
    },
    {
      id: "service6",
      num: "06",
      title: "Website Design",
      desc: "Stunning, fast, conversion-optimized websites that work as hard as you do.",
    },
    {
      id: "service7",
      num: "07",
      title: "AI Workflows",
      desc: "Automate your operations with custom AI systems built for your business.",
    },
    {
      id: "service8",
      num: "08",
      title: "Brand Strategy",
      desc: "Positioning, identity, and messaging that makes you unforgettable.",
    },
  ];

  return (
    <section className="service-section section-padding">
      <div className="container-fluid">
        <div className="section-header text-center mb-5">
          <div className="sub-text">Services</div>
          <h2>What We Do</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="col-md-4 col-lg-3 mb-4">
              <div className="darkbox-wrapper h-100">
                <div className="boxnum">
                  <h2>{service.num}</h2>
                </div>
                <div className="box-heading">
                  <h4 className="text-white">{service.title}</h4>
                </div>
                <div className="box-content">
                  <p className="text-white">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
