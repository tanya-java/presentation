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
        'customcss=/assets/css/custom.css',
        'revealjs_theme=white',
        'revealjs_slideNumber=true',
        'source-highlighter=highlightjs',
        'highlightjs-languages: xml, java, json, html, css'
    ]
}

asciidoctor.convertFile('./index.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/java-enterprise.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/apache-tomcat.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/servlet.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/jsp.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/jstl.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/el.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/filter.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/i18n.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/logging.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/apache-maven.adoc', options)
asciidoctor.convertFile('./java/data-persistence/database-connection-pool.adoc', options)
asciidoctor.convertFile('./java/data-persistence/intro-jpa.adoc', options)
asciidoctor.convertFile('./java/data-persistence/intro-hibernate.adoc', options)
asciidoctor.convertFile('./java/data-persistence/mapping.adoc', options)
asciidoctor.convertFile('./java/data-persistence/query-language.adoc', options)
asciidoctor.convertFile('./java/spring/intro-spring.adoc', options)
asciidoctor.convertFile('./java/spring/beans.adoc', options)
asciidoctor.convertFile('./java/spring/spring-orm.adoc', options)
asciidoctor.convertFile('./java/spring/spring-webmvc.adoc', options)
