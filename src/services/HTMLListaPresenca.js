export default function gerarHTMLListaPresenca(materia, dataAgendamento, alunos) {
  return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Lista de Presença</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f8f9fa;
          margin: 20px;
          text-align: center;
        }
        .container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          background: #ffffff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        h1 {
          color: #7f0000;
        }
        p {
          font-size: 17px;
          color: #495057;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          border: 1px solid #dee2e6;
          padding: 12px;
          text-align: left;
        }
        th {
          background-color: #275060;
          color: #ffffff;
          text-align: center;
        }
        td {
          background-color: #f8f9fa;
        }
        .assinatura {
          text-align: center;
          font-style: italic;
          color: #6c757d;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Lista de Presença</h1>
        <p><strong>Matéria:</strong> ${materia}</p>
        <p><strong>Data:</strong> ${new Date(dataAgendamento).toLocaleDateString('pt-BR')}</p>
        
        <table>
          <tr>
            <th>Nome</th>
            <th>RA</th>
            <th>Assinatura</th>
          </tr>
          ${alunos.map(aluno => `
            <tr>
              <td>${aluno.nome}</td>
              <td>${aluno.ra}</td>
              <td class="assinatura">____________________</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </body>
    </html>
  `
}
