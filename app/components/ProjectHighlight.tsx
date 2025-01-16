"use client";

import { ReactNode, useState, useRef } from "react";

interface ImgMeta {
  title?: string;
  link: string;
}

interface ProjectHighlightProps {
  title1: string;
  title2?: string;
  description: string;
  img1?: string;
  img2?: string;
  img1Meta?: ImgMeta;
  img2Meta?: ImgMeta;
  children?: ReactNode;
}

const ProjectHighlight: React.FC<ProjectHighlightProps> = ({
  title1,
  title2,
  description,
  img1,
  img2,
  img1Meta,
  img2Meta,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const hasImg2Title = !!img2Meta?.title;
  return (
    <div
      className="group/card relative flex flex-col rounded-xl py-5 px-4 shadow-sm hover:shadow-xl transition-shadow duration-700"
      ref={containerRef}
    >
      <div className="h-16 col-start-1 col-end-6 text-lg leading-5 font-bold self-start text-gray-800 mix-blend-hard-light">
        {title1}
        {title2 && (
          <span>
            <br />
            {title2}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-lg leading-6 text-gray-800 mix-blend-hard-light">
          {description}
        </h2>
      </div>
      <div className="group/imgs relative mt-8 flex flex-col md:flex-col-reverse md:justify-end">
        <div className="peer absolute z-10 w-full h-full"></div>
        {img1 && (
          <a
            href={img1Meta?.link}
            target="_blank"
            className={`pointer-cursor z-10 md:w-[90%] h-auto md:absolute md:bottom-0 transition-transform md:z-30 md:group-hover/imgs:z-50 xl:group-hover/imgs:scale-110 md:group-hover/imgs:scale-[70%] xl:group-hover/imgs:translate-y-[5%] md:group-hover/imgs:translate-y-[15%] xl:group-hover/imgs:-translate-x-[20%] md:group-hover/imgs:-translate-x-[15%] xl:group-hover/imgs:-rotate-3 xl:group-hover/imgs:duration-200 duration-50 ${hasImg2Title ? "md:group-hover/imgs:brightness-75" : ""} hover:!brightness-100 peer-hover:!brightness-100`}
          >
            {img1Meta && (
              <div className="pointer-events-none mb-2 transition-all duration-200 flex flex-row justify-center md:opacity-0 md:group-hover/imgs:opacity-100">
                <div className="font-medium text-sm md:group-hover/imgs:scale-150 xl:group-hover/imgs:scale-100 text-gray-600 bg-white/90 md:mix-blend-multiply px-1 py-0.5 rounded-md shadow-xl underline">
                  {img1Meta.title}
                </div>
              </div>
            )}
            <img className="shadow-2xl" src={img1} />
          </a>
        )}
        {img2 && (
          <a
            href={img2Meta?.link}
            target="_blank"
            className={`mt-12 z-10 md:mt-0 pointer-cursor md:w-[90%] h-auto transition-transform md:z-20 group-hover/imgs:z-40 md:translate-x-[10%] md:-translate-y-[5%] xl:group-hover/imgs:scale-110 md:group-hover/imgs:scale-[70%] xl:group-hover/imgs:translate-x-[30%] md:group-hover/imgs:translate-x-[25%] xl:group-hover/imgs:-translate-y-[20%] md:group-hover/imgs:-translate-y-[20%] xl:group-hover/imgs:rotate-6 xl:group-hover/imgs:duration-200 duration-50 ${hasImg2Title ? "md:group-hover/imgs:brightness-75" : ""} hover:!brightness-100 peer-hover:!brightness-100`}
          >
            {hasImg2Title && (
              <div className="pointer-events-none mb-2 transition-all duration-200 w-full flex flex-row justify-center md:opacity-0 md:group-hover/imgs:opacity-100">
                <div className="font-medium text-sm md:group-hover/imgs:scale-150 xl:group-hover/imgs:scale-100 bg-white/90 text-gray-600 px-1 py-0.5 rounded-md shadow-xl md:mix-blend-multiply underline">
                  {img2Meta.title}
                </div>
              </div>
            )}
            <img className="shadow-2xl" src={img2} />
          </a>
        )}
      </div>
      <div className="absolute left-0 top-0 overflow-clip w-full h-full rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default ProjectHighlight;
