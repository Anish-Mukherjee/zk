import Head from "next/head";
import Image from "next/image";
import Announcement from "../components/announcement";
import CTA from "../components/CTA";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Announcement />
      <CTA />
    </div>
  );
}
