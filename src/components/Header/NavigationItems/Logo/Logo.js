import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <a href="/">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill={props.fillLinkedin}
        >
          <title>linkedin</title>
          <path d="M19.515 11.952c-0.678 0-1.18 0.171-1.573 0.387-0.063-0.224-0.27-0.388-0.514-0.339h-2.984c-0.295-0.049-0.534 0.19-0.443 0.5v11c-0.091 0.28 0.148 0.52 0.443 0.5h2.984c0.295 0.020 0.534-0.22 0.534-0.515l-0.001-6.648c-0.001-0.003-0.012-0.321 0.189-0.54 0.161-0.174 0.438-0.263 0.821-0.263 0.638 0 0.922 0.261 1.028 0.845v6.606c-0.105 0.295 0.134 0.535 0.429 0.515h3.145c0.295 0.020 0.534-0.22 0.428-0.515v-6.828c0.105-3.472-2.368-4.705-4.486-4.705zM23.038 23h-2.076v-6.121c0-1.181-0.763-1.913-1.99-1.913-0.694 0-1.234 0.204-1.606 0.606-0.517 0.56-0.477 1.27-0.366 1.428v6h-2.022v-9.98h1.916v0.336c0 0.203 0.115 0.39 0.298 0.479s0.4 0.067 0.562-0.056l0.14-0.108c0.405-0.319 0.824-0.65 1.622-0.65 0.826 0 3.523 0.263 3.523 3.637v6.342zM11 6.966c-1.122 0-2.034 0.912-2.034 2.034s0.912 2.034 2.034 2.034 2.034-0.912 2.034-2.034-0.912-2.034-2.034-2.034zM11 9.966c-0.532 0-0.966-0.434-0.966-0.966s0.434-0.966 0.966-0.966 0.966 0.434 0.966 0.966-0.434 0.966-0.966 0.966zM12.428 11.951h-2.968c-0.295 0-0.534 0.239-0.46 0.549v11c-0.074 0.28 0.165 0.52 0.46 0.5h2.968c0.295 0.020 0.534-0.22 0.534-0.515v-11c0-0.295-0.239-0.534-0.534-0.534zM12 23h-2.006v-9.98h2.006v9.98zM16-0.034c-8.842 0-16.034 7.192-16.034 16.034s7.192 16.034 16.034 16.034 16.034-7.192 16.034-16.034-7.192-16.034-16.034-16.034zM16 30.966c-8.252 0-14.966-6.714-14.966-14.966s6.714-14.966 14.966-14.966 14.966 6.714 14.966 14.966-6.714 14.966-14.966 14.966z"></path>
        </svg>
      </a>
      <a href="/">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill={props.fillGithub}
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>github</title>
          <path d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z"></path>
        </svg>
      </a>
    </div>
  );
};

export default logo;