import React from "react";
import {
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://ptb.discord.com/widget?id=722533997145489488&theme=white"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}
