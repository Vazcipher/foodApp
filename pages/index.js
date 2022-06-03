import axios from "axios";
import React from "react";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Head from "next/head";

// const fetcher = async () => {
//   const response = await axios
//     .get("http://localhost:3000/api/products")
//     .then((res) => res.data);
//   return response;
// };

const Home = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Featured /> */}
      {/* {<AddButton setClose={setClose} />} */}
      <PizzaList pizzaList={pizzaList} />
      {/* {!close && <Add setClose={setClose} />} */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: response.data,
    },
  };
};
