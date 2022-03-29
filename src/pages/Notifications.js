import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import styles from "./Contacts.module.css";

class Transactions extends Component {

  render() {

    return (
      <div className={styles.transactions}>
        <div className={styles.transactionsTitle}>
          <h1 className={styles.transactionsText}>Notifications </h1>
        </div>
        <Divider />
        <div className={styles.transactionsTitle}>
          <h4 className={styles.transactionsText}>Person name </h4>
          <button type="button" class="btn btn-primary btn-lg"><a href="https://www.walmart.ca/en">Add Items</a>
          </button>
        </div>
      </div>
    );
  }
}

export default Transactions;
