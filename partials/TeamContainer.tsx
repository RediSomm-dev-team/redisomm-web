import styles from "../styles/TeamContainer.module.scss";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const TeamContainer = (): JSX.Element => {
    return (
    <div className={styles.teamContainerBackground}>
    <motion.div className={styles.container}>
      {data.map(({ name, src, linkedIn, github }, i) => (
        <motion.div
          className={styles.innerContainer}
          whileInView={{
            rotate: [0, 3, -3, 3, 0],
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 0.4,
            },
          }}
          viewport={{ once: true, amount: 1 }}
          whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
          transition={{ duration: ".3" }}
          key={i}
        >
          <Image
            className={styles.pic}
            src={src}
            width={100}
            height={100}
            alt={"image of " + name}
          />
          <div className={styles.name}>{name}</div>
          <div className={styles.position}>Software Engineer</div>
          <div className={styles.links}>
            <motion.a
              href={linkedIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin style={{backgroundColor: '#7E212A', color: '#f2f0eb'}} />
            </motion.a>
            <motion.a
              href={github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub style={{backgroundColor: '#7E212A', color: '#f2f0eb'}}/>
            </motion.a>
          </div>
        </motion.div>
      ))}
    </motion.div>

    </div>
    );
}


const data = [
  {
    linkedIn: "https://www.linkedin.com/in/andreabennett42/",
    github: "https://github.com/AndreaBennett42/",
    name: "Andrea Bennett",
    src: "/team_photos/andrea_bennett.jpg",
  },
  {
    linkedIn: "https://www.linkedin.com/in/andrew-c-park/",
    github: "https://github.com/andrewcpark/",
    name: "Andrew Park",
    src: "/team_photos/andrew_park.png",
  },
  {
    linkedIn: "https://www.linkedin.com/in/cartersamj/",
    github: "https://github.com/cartersamj/",
    name: "Sam Carter",
    src: "/team_photos/sam_carter.jpg",
  },
  {
    linkedIn: "https://www.linkedin.com/in/young-suk-kim-30800a240/",
    github: "https://github.com/youngs-kim/",
    name: "Young Suk Kim",
    src: "/team_photos/young_kim.png",
  },
];



export default TeamContainer