module.exports = {
  HTML(title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list(dataList) {
    const result = dataList.reduce((list, data) => {
      return `${list}<li><a href="/?id=${data.id}">${data.title}</a></li>`;
    }, '<ul>');
    const list = `${result}</ul>`;
    return list;
  }
};
