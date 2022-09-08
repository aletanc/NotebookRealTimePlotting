import IPython
from IPython.display import display, HTML, Javascript


def configure_browser_state():
  display(IPython.core.display.HTML('''
    <canvas id="myChart"></canvas>
    <br />
    <div id="log">Log:<br/></div>
  '''))
  display(IPython.core.display.HTML('''
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/atancredi/NotebookRealTimePlotting/Core.min.js"></script>
        '''))