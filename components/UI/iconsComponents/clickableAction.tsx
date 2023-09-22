import React, { FunctionComponent, ReactNode } from "react";
import styles from "../../../styles/components/identityMenu.module.css";

type ClickableActionProps = {
  icon: ReactNode;
  onClick?: () => void;
  title?: string;
  description?: string;
  style?: "primary" | "secondary" | "disabled";
  width?: "fixed" | "auto";
  logoBackgroundColor?: string;
};

const ClickableAction: FunctionComponent<ClickableActionProps> = ({
  icon,
  onClick,
  title,
  description,
  style = "secondary",
  width = "fixed",
  logoBackgroundColor,
}) => {
  return (
    <div
      className={`${
        style === "disabled"
          ? styles.clickableActionDisabled
          : styles.clickableActionPrimary
      }
        ${width === "auto" ? styles.clickableActionAutoWidth : ""}`}
      onClick={onClick}
    >
      <div
        className={
          style === "disabled"
            ? styles.clickableIconDisabled
            : styles.clickableIconPrimary
        }
        style={{ backgroundColor: logoBackgroundColor }}
      >
        {icon}
      </div>

      <div className="ml-2">
        <h1 className={styles.clickableActionTitle}>{title}</h1>
        <p className={styles.clickableActionDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ClickableAction;
