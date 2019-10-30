from PIL import Image

tplSize = (300,300)
img = Image.open("./img/cat-4.jpg")
img.thumbnail(tplSize)
img.save("./img/cat-4.jpg")

print("Done!")