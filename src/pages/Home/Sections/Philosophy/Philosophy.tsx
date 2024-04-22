import styles from "./philosophy.module.css";

import iStockImg from "@/assets/imgs/istock.svg";

const PhilosophySection = () => {
  return (
    <div
      className={styles["philosophy-section"]}
      id="intuitiveSoftwareSolution"
    >
      <div className={styles["philosophy-section-grid"]}>
        <div className={styles["philosophy-section-grid-details"]}>
          <span className={styles["philosophy-section-grid-details-title"]}>
            Intuitive Software Solution
          </span>
          <div className={styles["philosophy-section-grid-details-content"]}>
            <span
              className={styles["philosophy-section-grid-details-content-item"]}
            >
              AgroRisk is a leading software tool designed specifically for
              financial companies to evaluate and quantify climate-related risks
              faced by agricultural farms.
            </span>
            <span
              className={styles["philosophy-section-grid-details-content-item"]}
            >
              With the increasing impacts of climate change and extreme weather
              events, it is crucial for banks and insurance companies to
              accurately assess credit risks, determine appropriate insurance
              premiums, and to improve customer dialogues.
            </span>
          </div>
        </div>
        <img
          src={iStockImg}
          alt="istock"
          className={styles["philosophy-section-grid-img"]}
        />
      </div>
    </div>
  );
};

export default PhilosophySection;
