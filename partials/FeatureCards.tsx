import React from "react";
import styles from "../styles/FeatureCards.module.scss";
import { motion } from "framer-motion";
import {CgSandClock} from "react-icons/cg";
import {BsGraphUp} from 'react-icons/bs'
import {GoBrowser, GoBook} from 'react-icons/go'

const FeatureCards = () => {
  return (
    <div className={styles.container}>
   
      <div className={styles.cardContainer}>
        {featureData.map(({ title, desc, icon, color, backgroundColor }, i) => (
          <motion.div
            key={i}
            className={styles.card}
            whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
            transition={{duration: '.3'}}
          >
            <div className={styles.iconContainer} style={{ backgroundColor }}>
              {React.cloneElement(icon, { size: 40, color })}
            </div>
            <h4>{title}</h4>
            <span>{desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const featureData = [
  {
    title: "TTL LIVE COUNTER",
    desc: "RediSomm provides TTL LIVE COUNTER information to allow you to receive notification for Time to live you setup for your keywords and help free up space.",
    icon: <CgSandClock />,
    color: "#462639",
    backgroundColor: "#dc7178",
  },
  {
    title: "TTL LOGS",
    desc: "See exactly which recommendations changed from one commit to the next, and how your updates have directly influenced metrics",
    icon: <GoBook />,
    color: "#dc7178",
    backgroundColor: "#462639",
  },
  {
    title: "DATABASE METRICS",
    desc: "RediSomm provides varities of metrics such as keyspace misses over time, usage, number of keys by data type, and many more to come.",
    icon: <BsGraphUp />,
    color: "#462639",
    backgroundColor: "#dc7178",
  },
  {
    title: "DESKTOP GUI",
    desc: "Experience standalone desktop app that provides an intuitive and efficient GUI for Redis. RediSomm allows to interact with your databases, monitor, and manage your data.",
    icon: <GoBrowser />,
    color: "#dc7178",
    backgroundColor: "#462639",
  },
];

export default FeatureCards;