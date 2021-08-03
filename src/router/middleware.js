export default function useMidlewares() {
  async function isAuth(to, from, next) {
    const auth = JSON.parse(sessionStorage.getItem("trtst")) !== null;

    if ((to.name === "Login" || to.name === "Register") && !auth) next();
    else if (to.name === "Login" && auth) next({ name: "Home" });
    else if (to.name === "Home" && !auth) next({ name: "Login" });
    else next();
  }

  return { isAuth };
}
