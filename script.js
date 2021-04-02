const links = document.querySelectorAll("a");
links.forEach(link => link.addEventListener("click", handleClick));

function handleClick(evento) {
    evento.preventDefault();
    fetchPage(evento.target.href);
    window.history.pushState(null, null, evento.target.href);
}

async function fetchPage(urlPage) {
    const responsePage = await fetch(urlPage);
    const pageText = await responsePage.text();

    replaceContent(pageText);
}

window.addEventListener("popstate", (evento) => {
    fetchPage(location.href);
});

function replaceContent(newText) {
    const newHtml = document.createElement("div");
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector(".content");
    const newContent = newHtml.querySelector(".content");

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector("title").innerText;
}