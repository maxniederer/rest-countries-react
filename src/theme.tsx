const darkModeIcon = document.getElementById("dark-mode-icon");
const darkModeText = document.getElementById("dark-mode-text");

let currThemeCookie = localStorage.getItem("theme");
const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
if (!currThemeCookie) {
  if (darkThemeQuery.matches) {
    currThemeCookie = "dark";
  } else {
    currThemeCookie = "light";
  }
}
changeThemeTo(currThemeCookie);

function changeThemeTo(str: string) {
  localStorage.setItem("theme", str);
  document.documentElement.setAttribute("data-theme", str);
}

function toggleTheme() {
  let currTheme = localStorage.getItem("theme");
  if (currTheme === "dark") {
    changeThemeTo("light");
  } else {
    changeThemeTo("dark");
  }
}

export default toggleTheme;
