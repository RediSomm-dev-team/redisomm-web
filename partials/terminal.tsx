import React, { Children, useState } from "react";
import { Browser } from 'react-window-ui';
import Typewriter from "typewriter-effect";
import styles from "../styles/TerminalDisplay.module.scss";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { motion } from "framer-motion";
import { Popover, Text } from "@mantine/core";

interface TerminalProps {
  command: string;
  children?: JSX.Element;
}

const TerminalDisplay = ({ command, children }: TerminalProps) => {
  const [termHover, setTermHover] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <div className={styles.container}>
      <Browser
        background='lightgray'
        className={styles.terminalContainer}
        onMouseOver={(_:any) => setTermHover(true)}
        onMouseLeave={(_:any) => setTermHover(false)}
      >
        <pre>
          <code>
            <Typewriter
              options={{
                strings: [command],
                autoStart: true,
                loop: true,
              }}
            />
          </code>
        </pre>
        <motion.div
          className={styles.copy}
          animate={{ opacity: termHover ? 1 : 0 }}
          onClick={() => {
            setCopied(true);
            setTimeout((_:any) => setCopied(false), 1000);
            navigator.clipboard.writeText(command);
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Popover
            opened={copied}
            onClose={() => setCopied(false)}
            target={<HiOutlineClipboardCopy size={20} />}
            position='right'
            placement="center"
            transition="fade"
            trapFocus={false}
            withArrow
            spacing="sm"
          >
            <div style={{ display: "flex" }}>
              <Text size='sm'>Copied!</Text>
            </div>
          </Popover>
        </motion.div>
      </Browser>
      {children}
    </div>
  );
};

export default TerminalDisplay;