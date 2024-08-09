"use client";

const PictureFramesComponent = ({ children, className = "mt-[4.38rem]" }) => {
  return (
    <section
      className={`lg:w-[41.5625rem] p-[0.5rem] lg:p-[1rem] lg:h-[26.125rem] bg-white rounded-[0.5rem] lg:rounded-[1.5rem] ${className}`}
    >
      <div className="overflow-hidden w-full h-full rounded-[0.5rem] lg:rounded-[1rem] box_shadow_custom">
        {children}
      </div>
    </section>
  );
};

export default PictureFramesComponent;
