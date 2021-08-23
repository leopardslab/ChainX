# This is a mock server for the ChainX mobile application.

### How to setup

1) Install the libraries
    1) `pip install Flask`
    2) `pip install flask-cors`
    3) `pip install urllib3`
2) Create a folder called *imgs*
3) Check the JSON object list called `products` and check the `imageURL` of each object.
4) Add images to imgs folder (jpeg) as required.
- If URL is `http://192.168.14.75:5000/images?img=orange.jpeg` then create an orange.jpeg image in this folder.
5) Start the server `python server.py`