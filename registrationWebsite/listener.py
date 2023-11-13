from flask import Flask, request

app = Flask(__name__)

@app.route('/receive_data', methods=['POST'])
def receive_data():
if request.method == 'POST':
data = request.get_json()
print('Received data:', data)
return 'Data received successfully', 200
else:
return 'Method not allowed', 405

if __name__ == '__main__':
app.run(debug=True, port=3000)
