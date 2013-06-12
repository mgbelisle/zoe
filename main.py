import os
import webapp2

from google.appengine.ext.webapp import template


_template_dir = os.path.join(os.path.dirname(__file__), 'templates')


class MainHandler(webapp2.RequestHandler):
    def get(self):
        template_fname = os.path.join(_template_dir, 'main.html')
        self.response.write(template.render(template_fname, {}))


app = webapp2.WSGIApplication([('/', MainHandler)], debug=True)
