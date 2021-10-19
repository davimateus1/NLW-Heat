import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";

export function LoginBox() {
  return (
    <div className={styles.LoginBoxWrapper}>
      <strong>Entre e compatilhe sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size="24"/>
        Entrar com Github
      </a>
    </div>
  );
}
