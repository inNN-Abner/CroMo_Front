export default function gerarHTMLListaPresenca(materia, dataAgendamento, alunos) {
  const linhasExtras = Array.from({ length: 5 }, () => `
    <tr>
      <td></td>
      <td></td>
      <td class="assinatura"></td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Lista de Presença</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Inter', sans-serif;
          background-color:rgb(255, 255, 255);
          margin: 0;
          padding: 30px;
        }

        .container {
          max-width: 900px;
          margin: auto;
          padding: 40px;
          background-color:rgb(243, 242, 242);
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #7f0000;
          font-size: 28px;
          margin-bottom: 10px;
        }

        p {
          font-size: 17px;
          color: #333333;
          margin: 6px 0;
          border-radius: 15px;
        }

        .info {
          margin-top: 20px;
        }

        .info p {
          border-bottom: 1px solid #ccc;
          padding-bottom: 4px;
          margin-bottom: 12px;
        }

        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin-top: 30px;
          border-radius: 15px;
          overflow: hidden;
        }

        th, td {
          padding: 14px 12px;
          border-bottom: 1px solid #e0e0e0;
        }

        th {
          background-color: #275060;
          color: white;
          font-size: 16px;
          border-radius: 5px;
        }

        td {
          background-color: #f9f9f9;
          font-size: 16px;
          height: 20px;
          border-radius: 15px;
          margin-top: 3px;
        }

        .assinatura {
          height: 20px;
          width: 300px;
          border-radius: 15px;
        }

        .assinaturas-final {
          margin-top: 60px;
          display: flex;
          justify-content: space-between;
        }

        .assinatura-campo {
          width: 45%;
          text-align: center;
          font-size: 16px;
          border-top: 1px solid #999;
          padding-top: 10px;
          color: #555;
        }

        @media print {
          body {
            background: none;
            padding: 0;
          }

          .container {
            box-shadow: none;
            border: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Lista de Presença</h1>
        <p><strong>Matéria:</strong> ${materia}</p>
        <p><strong>Data:</strong> ${new Date(dataAgendamento).toLocaleDateString('pt-BR')}</p>

        <div class="info">
          <p><strong>Monitor Responsável:</strong> __________________________________________</p>
          <p><strong>Professor Responsável:</strong> _______________________________________</p>
          <p><strong>Horários:</strong> _______________________________________________________</p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RA</th>
              <th>Assinatura</th>
            </tr>
          </thead>
          <tbody>
            ${alunos.map(aluno => `
              <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.ra}</td>
                <td class="assinatura"></td>
              </tr>
            `).join('')}
            ${linhasExtras}
          </tbody>
        </table>

        <div class="assinaturas-final">
          <div class="assinatura-campo">Assinatura - Monitor</div>
          <div class="assinatura-campo">Assinatura – Prof.</div>
        </div>
      </div>
    </body>
    </html>
  `
}