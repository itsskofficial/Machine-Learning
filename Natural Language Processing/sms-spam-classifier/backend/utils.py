from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords
import pickle
import string
import nltk


ps = PorterStemmer()
nltk.download("punkt")
nltk.download("stopwords")
tfidf = pickle.load(open("vectorizer.pkl", "rb"))
model = pickle.load(open("model.pkl", "rb"))

def transform_text(text) :
  text = text.lower()
  text = nltk.word_tokenize(text)
  y = []
  for i in text :
    if i.isalnum() :
      y.append(i)

  text = y[:]
  y.clear()

  for i in text :
    if i not in stopwords.words("english") and i not in string.punctuation :
      y.append(i)

  text = y[:]
  y.clear()
  ps = PorterStemmer()

  for i in text :
    y.append(ps.stem(i))

  return " ".join(y)

def classify(text) :
  transformed_text = transform_text(text)
  vectorized_text = tfidf.transform([transformed_text])
  result = model.predict(vectorized_text)[0]
  if result == 0 :
    return "ham"
  else :
    return "spam"