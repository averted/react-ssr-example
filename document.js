module.exports = (content) => {
  return `
<!doctype html>
<html>
  <head>
    <title>SSR Example</title>
  </head>
  <body style="margin:0; padding:0;">
    <div id="app">${content || ''}</div>
    <script src="/public/app.js"></script>
  <body>
</html>`
}
