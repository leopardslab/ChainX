import http.server
import socketserver
from urllib import parse
#from urlparse import parse_qs
import json
import time
products = [
  {
    "id": "1",
    "productName": "Apple",
    "company": "Apple Company A",
    "brand": "AppleBrnd1",
    "barcode": "12345678980",
    "country": "SL",
    "imageURL": "http://192.168.14.75:5000/images?img=apple.jpeg",
  },
  {
    "id": "2",
    "productName": "Orange",
    "company": "Orange Company A",
    "brand": "OrangeBrnd1",
    "barcode": "555512345678980",
    "country": "SL",
    "imageURL": "http://192.168.14.75:5000/images?img=orange.jpeg",
  },
  {
    "id": "3",
    "productName": "Peanuts",
    "company": "Peanuts Company A",
    "brand": "PeanutsBrnd1",
    "barcode": "4790015010281",
    "country": "SL",
    "imageURL": "http://192.168.14.75:5000/images?img=peanut.jpeg",
  },
]

productDetailList = [
    {
    "id": "1",
    "productName": "Apple",
    "company": "Apple Company A",
    "brand": "AppleBrnd1",
    "barcode": "12345678980",
    "country": "SL",
    "imageURL": "http://192.168.14.75:5000/images?img=apple.jpeg",
    "batches" : [
      {
        "batchID" : "2222",
        "neutritions" : {
          "summery": "Per serving",
          "neutritionData" : [
          {
            "name": "protein",
            "value": "1.2mg",
            "colour":"#FFB740"
            },
            {
            "name": "carbo",
            "value": "10mg",
            "colour": "#66DE93",
            }
        ]
        },
        "ingredients":{
          "ingredientsList" : [
            {
              "id": "A1",
              "name" : "Tree",
              "company" : "ABC",
              "refLink" : "https://itemcontatstest.com/Tree"
            },
            {
              "id": "A1",
              "name" : "Water",
              "company" : "PQR",
              "refLink" : "https://itemcontatstest.com/Water"
            }
          ]
        },
        "supplier":[
          {
            "name":"ABC cocnut pvt Ltd",
            "country":"SL",
            },
            {
            "name":"PQR cocnut pvt Ltd",
            "country":"SL",
            }
        ]
      },
      {
        "batchID" : "3333",
        "neutritions" : {
          "summery": "Per serving 100g",
          "neutritionData" : [
          {
            "name": "protein",
            "value": "1.5mg",
            "colour":"#D83A56"
            },
            {
            "name": "carbo",
            "value": "1mg",
            "colour":"#66DE93"
            }
        ]
        },
        "ingredients":{
          "ingredientsList" : [
            {
              "id": "A1",
              "name" : "Tree",
              "company" : "ABC",
              "refLink" : "https://itemcontatstest.com/Tree"
            },
            {
              "id": "A1",
              "name" : "Water",
              "company" : "PQR",
              "refLink" : "https://itemcontatstest.com/Water"
            }
          ]
        },
        "supplier":[
          {
            "name":"LMN cocnut pvt Ltd",
            "country":"SL",
            },
            {
            "name":"XYZ cocnut pvt Ltd",
            "country":"SL",
            },
            {
            "name":"XYZ cocnut pvt Ltd",
            "country":"SL",
            }
        ]
      }
    ],
    "legal":[
          {
            "date" : "2021-08-16",
            "description" : "This is dummy data.",
            "Link" : "http://lawauthworl.cm/12345678"
          },
          {
            "date" : "2021-08-15",
            "description" : "This is dummy data.",
            "Link" : "http://lawauthworl.cm/12345678"
          }
        ],
        "feedback":{
          "overallRating": 10.9,
          "feedbackData":[
          {
            "date" : "2021-08-16",
            "comment" : "This is dummy data.",
          },
          {
            "date" : "2021-08-15",
            "comment" : "This is dummy data.",
          }
        ]}
  }
]


from flask import Flask
from flask import request
from flask import jsonify
from flask import send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/product")
def product():
  time.sleep(1)
  key = request.args.get('text').lower()
  if(key != ""):
    output_dict = [x for x in products if key in x['productName'].lower() or key in x['barcode'].lower()]
  else:
    output_dict = products
  return jsonify(output_dict)

@app.route("/itemData")
def itemData():
  time.sleep(2)
  key = request.args.get('item').lower()
  if(key != ""):
    output_dict = [x for x in productDetailList if key in x['id'].lower()]
  else:
    output_dict = productDetailList
  if (len(output_dict)==0):
    out = {}
  else:
    out = output_dict[0]
  return jsonify(output_dict)

@app.route("/feedback")
def feedback():
  return jsonify({"A":1})

@app.route("/images")
def images():
  key = request.args.get('img').lower()
  return send_file("imgs/"+key, mimetype='image/gif')


if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)