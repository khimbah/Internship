from prometheus_client import start_http_server
from prometheus_client import Histogram, Gauge

REQUEST_TIME=Histogram('', 'Time spent in http requests')
ANALYZE_TIME=Histogram('', 'Time spent analyzing pictures')
IN_PROGRESS=Gauge('', 'Number of request in progress')

 


if __name__="__main__":
   start_http_server(8000)
   app.run()
