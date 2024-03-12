import React, { createContext, useContext, useState, useRef, useEffect, FC } from "react"; // Add FC here

  import { cn } from "@/utils/cn";
  
  const MouseEnterContext = createContext<any>(undefined);

  
  export const CardContainer = ({
    children,
    className,
    containerClassName,
  }: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
  
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
  
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
  
    const handleMouseEnter = () => {
      setIsMouseEntered(true);
    };
  
    const handleMouseLeave = () => {
      setIsMouseEntered(false);
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      }
    };
  
    return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <div
          className={cn(
            "py-12 flex items-center justify-center",
            containerClassName
          )}
          style={{ perspective: "1000px" }}
        >
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "flex items-center justify-center relative transition-all duration-200 ease-linear",
              className
            )}
            style={{ transformStyle: "preserve-3d" }}
          >
            {children}
          </div>
        </div>
      </MouseEnterContext.Provider>
    );
  };
  
  export const CardBody = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
          className
        )}
      >
        {children}
      </div>
    );
  };
  
  export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateZ = 0,
    ...rest
  }: {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    translateZ?: number | string;
  }) => {
    const [isMouseEntered] = useMouseEnter();
  
    return (
      <Tag
        className={cn(
          "w-fit transition duration-200 ease-linear", 
          isMouseEntered ? 'hover-effect' : '', 
          className
        )}
        style={{ transform: `translateZ(${translateZ}px)` }} // Add default Z translation
        {...rest}
      >
        {children}
      </Tag>
    );
  };
  
  export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
      throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
  };
  