var href = window.location.href.split("/")
href.pop()
window.location.replace(href.join("/"))