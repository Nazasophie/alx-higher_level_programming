#!/bin/bash
# This scripts takes in a URL, sends a request to that URL, and displays the size of the body of the response
# The size must be displayed in bytes
# usage: ./0-body_size.sh URL
curl -sI "$1" | grep content-Length | awk '{print $2}'
