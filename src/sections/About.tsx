"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;

      const distance = scrollTop + windowHeight - elementTop;
      const maxDistance = 400;

      let progress = Math.min(Math.max(distance / maxDistance, 0), 1);
      let colorValue = 160 - 160 * progress;

      element.style.color = `rgb(${colorValue},${colorValue},${colorValue})`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="about-section section-padding bg-silver-gray">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="sub-text">About Us</div>
            <h2 ref={textRef} className="mt-0 scroll-text">
              We are a performance-driven digital marketing agency focused on delivering measurable results. From SEO and
              paid advertising to content creation, social media management, and video production, we design integrated
              marketing systems that attract qualified traffic and turn it into revenue
            </h2>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="imgwrapper rotate-image-wrapper text-end">
              <Image src="/images/2026/02/about_icon.png" alt="" width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
