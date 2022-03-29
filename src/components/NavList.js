import React from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ContactsIcon from '@material-ui/icons/Contacts';
import styles from "./NavList.module.css";

function ListItemLink(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ListItem button component="a" {...props} />;
}

export default function NavList() {
  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <Divider />
        <ListItem button className={styles.navButton}>
          <PaymentIcon className={styles.navIcon} />
          <ListItemLink href="#/home/transactions" className={styles.navButton}>
            <ListItemText
              primary="Transactions"
              className={styles.unselectedNavText}
            />
          </ListItemLink>
        </ListItem>
        <Divider />
        <ListItem button>
          <PeopleOutlineIcon className={styles.navIcon} />
          <ListItemLink href="#/home/split">
            <ListItemText
              primary="Split a Bill"
              className={styles.unselectedNavText}
            />
          </ListItemLink>
        </ListItem>
        <Divider />
        <ListItem button className={styles.navButton}>
          <ContactsIcon className={styles.navIcon} />
          <ListItemLink href="#/home/contacts" className={styles.navButton}>
            <ListItemText
              primary="Contacts"
              className={styles.unselectedNavText}
            />
          </ListItemLink>
        </ListItem>
        <Divider />
        <ListItem button className={styles.navButton}>
          <NotificationsActiveIcon className={styles.navIcon} />
          <ListItemLink href="#/home/notifications" className={styles.navButton}>
            <ListItemText
              primary="Notifications"
              className={styles.unselectedNavText}
            />
          </ListItemLink>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
