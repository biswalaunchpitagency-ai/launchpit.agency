import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="section-cta section-padding bg-black">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="text-white">A Strategic and Performance-Driven Process Designed for Long-Term Scalable Growth</h2>
            <p className="text-white my-4">
              We follow a structured growth framework that aligns strategy, creative execution, and performance analytics.
              Each phase is designed to attract the right audience, convert them effectively, and continuously improve results over time.
            </p>
            <div className="btnwrapper d-flex justify-content-start">
              <Link href="#booking" className="button-body button-body-white bg-white">
                <span className="button-text text-black">Explore our Approach</span>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-wrapper rounded-3">
              <Image
                className="rounded-3"
                src="/images/2026/02/portfolio-image-two.jpg"
                alt="Strategy"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
