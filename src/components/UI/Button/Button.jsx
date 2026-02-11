import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss"; 


const Button = ({
    children,
    variant = "primary",
    className = "",
    onClick,
    to,
    href
     }) => {

    let Component = "button";
    let props = {};

    if (to) {
      Component = NavLink;
      props.to = to;
    } else if (href) {
     Component = "a";
     props.href= href;
    }
    return (
        <>
            <Component
      {...props}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className} text-decoration-none d-inline-block`}
    >
      {children}
    </Component>
        </>
    )
}

export default Button;