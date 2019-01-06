import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.less";
// import { ipcRenderer } from "electron";

function send() {
  // ipcRenderer.send("close", "1234567890");


}

function IndexPage() {
  return (
    <div className={styles.normal}>
      <button onClick={send}>发消息</button>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
