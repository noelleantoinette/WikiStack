module.exports = function(swig) {
  var page_link = function (doc) {
    var link_name;

    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.url_name
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='"+doc.fullRoute+"'>"+link_name+"</a>";
  };
  page_link.safe = true;

  swig.setFilter('page_link', page_link);
};