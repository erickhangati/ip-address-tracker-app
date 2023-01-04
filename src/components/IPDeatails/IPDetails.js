import React from "react";

import DetailsItem from "./DetailsItem";

import styles from "./IPDetails.module.scss";

const IPDetails = ({ details, error }) => {
  // IP Details as received through props.
  const addressTitle = "IP ADDRESS";
  const addressDescription = details.ipAddress;
  const locationTitle = "LOCATION";
  const locationDescription = `${details.city}, ${details.country}.`;
  const timeZoneTitle = "TIME ZONE";
  const timeZoneDescription = details.timeZone.split("/").join(" / ");
  const ispTitle = "ISP";
  const ispDescription = details.isp;

  // If there is an error render error message.
  if (error) {
    return (
      <h2
        className={`${styles["ip-details"]} ${styles.error}`}
      >{`😔 "${error}" is not a valid IP Address. Try again!`}</h2>
    );
  }

  // Render details in columns.
  return (
    <article className={styles["ip-details"]}>
      <DetailsItem
        className={styles["border-right"]}
        title={addressTitle}
        description={addressDescription}
      />
      <DetailsItem
        className={styles["border-right"]}
        title={locationTitle}
        description={locationDescription}
      />
      <DetailsItem
        className={styles["border-right"]}
        title={timeZoneTitle}
        description={timeZoneDescription}
      />
      <DetailsItem title={ispTitle} description={ispDescription} />
    </article>
  );
};

export default IPDetails;
