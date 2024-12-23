import { useRef, useEffect } from "react";

import { mountMarketing } from "marketing/MarketingApp";

export const MarketingApp = () => {
  const marketingAppRef = useRef(null);

  useEffect(() => {
    if (marketingAppRef.current) {
      mountMarketing(marketingAppRef.current);
    }
  }, [marketingAppRef]);

  return <div ref={marketingAppRef}></div>;
};
