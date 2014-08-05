#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2014-08-01 10:35:08

import json

from base import *

class HAREditor(BaseHandler):
    def get(self):
        return self.render('har/editor.html')

class HARTest(BaseHandler):
    def post(self):
        data = json.loads(self.request.body)
        self.finish(data)

handlers = [
        (r'/har/edit', HAREditor),
        (r'/har/test', HARTest),
        ]
