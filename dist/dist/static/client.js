/// <reference path="../typings/jquery/jquery.d.ts" />
document.addEventListener("ondomcontentloaded", function () {
    $.ajax("/api/authors", function (data) { return document.write(data); });
});
//# sourceMappingURL=client.js.map