"use client";
import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card as NewArrivalCard } from "@/app/home/components/NewArrivals";
import { Card as FeaturedCard } from "@/app/home/components/Featured";

interface SliderProps {
  data: any[];
  cardType: string;
}

const Slider = ({ data, cardType }: SliderProps) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth || 0
      );
    }
  }, []);

  const styles = {
    slider__inner_container: {
      display: "flex",
    },
    slider__container: {
      overflow: "hidden",
    },
    __card: {
      padding: "1rem 0.5rem",
    },
  };
  var Card: React.ComponentType<any>;
  if (cardType === "new_arrivals") {
    Card = NewArrivalCard;
  } else if (cardType === "featured") {
    Card = FeaturedCard;
  }

  return (
    <motion.div className="slider__container" style={styles.slider__container}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        ref={carousel}
        initial={{ x: 0 }}
        className="slider__inner-container"
        style={styles.slider__inner_container}
      >
        {data?.map((data, index) => {
          return (
            <motion.div className="__card" style={styles.__card} key={index}>
              <Card data={data} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
