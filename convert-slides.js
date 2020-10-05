// Load Asciidoctor.js and the reveal.js converter
var asciidoctor = require('@asciidoctor/core')()
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
var options = {
    safe: 'safe',
    backend: 'revealjs',
    attributes: [
        'revealjsdir=https://cdn.jsdelivr.net/npm/reveal.js@3.9.2',
        'revealjs_theme=white',
        'revealjs_slideNumber=true',
        'source-highlighter=highlightjs',
        'highlightjs-theme=https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/styles/vs.min.css',
        'customcss=/assets/css/custom.css',
        'highlightjs-languages: xml, java, json, html, css'
    ]
}

asciidoctor.convertFile('./index.adoc', options)

// Common thrmes
asciidoctor.convertFile('./common/design-patterns.adoc', options)
asciidoctor.convertFile('./common/programming-languages.adoc', options)
asciidoctor.convertFile('./common/scrum.adoc', options)
asciidoctor.convertFile('./common/solid.adoc', options)

// Course: "HTML and CSS"
asciidoctor.convertFile('./html-and-css/form.adoc', options)
asciidoctor.convertFile('./html-and-css/link.adoc', options)
asciidoctor.convertFile('./html-and-css/text-markup.adoc', options)
asciidoctor.convertFile('./html-and-css/html-tables.adoc', options)
asciidoctor.convertFile('./html-and-css/css-intro.adoc', options)
asciidoctor.convertFile('./html-and-css/css-float.adoc', options)

// Course: "Java Basics"
asciidoctor.convertFile('./java/basic/intro.adoc', options)
asciidoctor.convertFile('./java/basic/data-types.adoc', options)
asciidoctor.convertFile('./java/basic/operators.adoc', options)
asciidoctor.convertFile('./java/basic/methods.adoc', options)
asciidoctor.convertFile('./java/basic/conditional-statements.adoc', options)
asciidoctor.convertFile('./java/basic/loops.adoc', options)
asciidoctor.convertFile('./java/basic/arrays.adoc', options)
asciidoctor.convertFile('./java/basic/oop-classes-and-objects.adoc', options)
asciidoctor.convertFile('./java/basic/strings.adoc', options)
asciidoctor.convertFile('./java/basic/oop-inheritance-and-polymorphism.adoc', options)
asciidoctor.convertFile('./java/basic/generics.adoc', options)
asciidoctor.convertFile('./java/basic/enum.adoc', options)
asciidoctor.convertFile('./java/basic/collection.adoc', options)
asciidoctor.convertFile('./java/basic/exception-handling.adoc', options)
asciidoctor.convertFile('./java/basic/java-io.adoc', options)
asciidoctor.convertFile('./java/basic/multithreading.adoc', options)
asciidoctor.convertFile('./java/basic/lambda-expressions.adoc', options)
asciidoctor.convertFile('./java/basic/stream-api.adoc', options)
asciidoctor.convertFile('./java/basic/networking.adoc', options)
asciidoctor.convertFile('./java/basic/annotations.adoc', options)

// Course: "Java with Jakarta EE"
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
asciidoctor.convertFile('./sql/database-normalization.adoc', options)