"use client";
import { useEffect } from "react";

const VerticalAd = () => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
      data-ad-slot={process.env.NEXT_PUBLIC_AD_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default VerticalAd;
