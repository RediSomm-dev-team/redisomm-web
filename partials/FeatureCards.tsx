import React from "react";
import styles from "../styles/FeatureCards.module.scss";
import { BiGitBranch } from "react-icons/bi";
import { MdCompare } from "react-icons/md";
import { RiRouteLine } from "react-icons/ri";
import { motion } from "framer-motion";

const FeatureCards = () => {
  return (
    <div className={styles.container}>
      <h4>Integrate Google Lighthouse into your development process with automated data capture and insightful comparisons.</h4>
    
      <span>
        RediSomm is a data collection and reporting suite that developers can add to their Redis project to gather <a href=
        'https://developers.google.com/web/tools/lighthouse'>Google Lighthouse</a> metrics during development.  Vantage runs automatically and in the background when you commit, gathering data over time and allowing you to explore results and recommendations via a user-friendly interface. 
      </span>
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
    icon: <BiGitBranch />,
    color: "2096F3",
    backgroundColor: "#E3F2FD",
  },
  {
    title: "TTL LOGS",
    desc: "See exactly which recommendations changed from one commit to the next, and how your updates have directly influenced metrics",
    icon: <MdCompare />,
    color: "#673AB6",
    backgroundColor: "#EDE7F6",
  },
  {
    title: "DATABASE METRICS",
    desc: "RediSomm provides varities of metrics such as keyspace misses over time, usage, number of keys by data type, and many more to come.",
    icon: <RiRouteLine />,
    color: "#00C852",
    backgroundColor: "#c8f7d5",
  },
  {
    title: "DESKTOP GUI",
    desc: "Experience standalone desktop app that provides an intuitive and efficient GUI for Redis. RediSomm allows to interact with your databases, monitor, and manage your data.",
    icon: <RiRouteLine />,
    color: "#00C852",
    backgroundColor: "#c8f7d5",
  },
];

export default FeatureCards;