// www.hishivam.com → hishivam.com (permanent), keeping path and query.
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = "hishivam.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  },
};
