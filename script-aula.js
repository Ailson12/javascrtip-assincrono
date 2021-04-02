// // fetch("./dados.json")
// // .then(dados => dados.text())
// // .then(jsonText => {
// //     const jsonFinal = JSON.parse(jsonText);
// //     console.log(jsonFinal);
// // });

// // const configuracoes = {
// //     player: "Google",
// //     tempo: 25.5,
// //     aula: "2.1 Javascript"
// // }

// // const stringConfig = JSON.stringify(configuracoes);

// const url = "http://jsonplaceholder.typicode.com/posts";
// const opcoes = {
//     method: "POST",
//     body: "{title: 'javascript'}",
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     }
// }

// async function puxarDados() {
//     const responseDados = await fetch("./dados.json");
//     const jsonDados = await responseDados.json();
//     console.log(jsonDados);
// }

// puxarDados();

// window.history.pushState(null, null, "sobre.html");
window.addEventListener("popstate", () => {
    console.log("teste");
});