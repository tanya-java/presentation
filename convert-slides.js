// Load Asciidoctor.js and the reveal.js converter
var asciidoctor = require('@asciidoctor/core')()
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
var options = {
    safe: 'safe',
    backend: 'revealjs',
    attributes: [
        'revealjsdir=/node_modules/reveal.js@',
        'customcss=/res/css/custom.css',
        'revealjs_theme=white',
        'source-highlighter=highlightjs',
        'highlightjs-languages: xml, java, json, html, css'
    ]
}
