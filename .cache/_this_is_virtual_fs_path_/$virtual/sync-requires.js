
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/producao/Documentos/ocariocaGatsbySite/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/producao/Documentos/ocariocaGatsbySite/src/pages/index.js"))
}

