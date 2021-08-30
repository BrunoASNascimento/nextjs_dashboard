export default async function updateTable(request, response) {
  if (request.method === "POST") {
    console.log(request);
    response.json({ message: "Teste" });
    return;
  }
  response.status(404).json({ message: "Ainda não temos nada no GET." });
}
