var wip = `<div class="wip">
<i class="las la-exclamation-triangle main-icon"></i>
<br />
<span class="main"><i class="las la-wrench"></i> This article is under construction.</span>
<br />It's content, structure or url might change without notice or changelog.
</div>`;
if (window.location.href.indexOf("wip") > -1) {
    var wrap = document.createElement("div");
    wrap.innerHTML = wip;
    document.getElementById("main_content").prepend(wrap);
}