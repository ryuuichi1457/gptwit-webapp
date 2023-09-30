#!/usr/local/bin/python3
from wsgiref.handlers import CGIHandler
from serberz import app
CGIHandler().run(app)