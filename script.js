const location2 = (window.location.href);
const date = (document.lastModified);
const last = document.querySelector(".script");
const LastModified = () => {
   last.textContent = `Last Modified date: ${date}   Location: ${location2}`
}

LastModified();