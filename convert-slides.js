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

asciidoctor.convertFile('src/java-enterprise/java-enterprise.adoc', options)
asciidoctor.convertFile('src/java-enterprise/apache-tomcat.adoc', options)
asciidoctor.convertFile('src/java-enterprise/servlet.adoc', options)
asciidoctor.convertFile('src/java-enterprise/jsp.adoc', options)
asciidoctor.convertFile('src/java-enterprise/jstl.adoc', options)
