// components/PageLoader.tsx
"use client";
import { useEffect, useState } from "react";
import "../app/loader.css";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-t from-[#111] to-[#252525] flex items-center justify-center">
          <div className="socket">
      <div className="gel center-gel">
        <div className="circle"></div>
      </div>
      <div className="gel c1 r1">
        <div className="circle"></div>
      </div>
      <div className="gel c2 r1">
        <div className="circle"></div>
      </div>
      <div className="gel c3 r1">
        <div className="circle"></div>
      </div>
      <div className="gel c4 r1">
        <div className="circle"></div>
      </div>
      <div className="gel c5 r1">
        <div className="circle"></div>
      </div>
      <div className="gel c6 r1">
        <div className="circle"></div>
      </div>
      <div className="gel c7 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c8 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c9 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c10 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c11 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c12 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c13 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c14 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c15 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c16 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c17 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c18 r2">
        <div className="circle"></div>
      </div>
      <div className="gel c19 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c20 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c21 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c22 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c23 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c24 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c25 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c26 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c28 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c29 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c30 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c31 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c32 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c33 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c34 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c35 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c36 r3">
        <div className="circle"></div>
      </div>
      <div className="gel c37 r3">
        <div className="circle"></div>
      </div>
    </div>
    </div>
  );
};

export default PageLoader;
